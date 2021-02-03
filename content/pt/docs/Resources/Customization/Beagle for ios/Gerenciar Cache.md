---
title: Gerenciar Cache
weight: 148
description: >-
  Nesta seção, você encontra informações sobre como adicionar camada de cache no beagle. 

---

---

## Introdução

O `Beagle` não fornece uma camada de cache padrão, logo é necessário configurar essa camada na sua aplicação. Fornecemos um protocolo ao qual você consegue configurar a camada de cache.

```swift
public protocol CacheManagerProtocol {
    func addToCache(_ reference: CacheReference)
    func getReference(identifiedBy id: String) -> CacheReference?
    func isValid(reference: CacheReference) -> Bool
}
```

O método **addToCache** é responsavel por pegar a referência do cache que é passada como um parâmetro.

O método **getReference** é responsável por pegar o valor de uma referência de cache através de um ID. Logo, o método retorna a referência desejada.

O método **isValid** é responsavel por validar se o cache já expirou de acordo com seu tempo de criação. Esse método retorna um `boleano` indicando o status do cache.

Utilize o objeto CacheReference para configurar o cache.

```swift
public struct CacheReference {
    public let identifier: String
    public let data: Data
    public let hash: String
    public let maxAge: Int?
    public let timeOfCreation: Date
}
```

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :---: |
| identifier | String  | ✓ | `identifier` é o parâmetro identificador da referência do cache. |
| data | Data| ✓ | `data` é o parâmetro para passar os dados.  |
| hash | String | ✓ | `hash` é o parâmetro para passar a chave da referência |
| maxAge | Int |  | `maxAge`é o parâmetro para configurar quanto tempo vai durar o cache. |
| timeOfCreation | Date | ✓ | `timeOfCreation` é o parâmetro para passar o tempo de criação. |

Agora com protocolo `CacheManagerProtocol` e objeto `CacheReference`, já pode usar para configurar sua própria camada de cache.

## Exemplo de camada de cache customizada:

Para criar a camada de cache customizada utilize o core data e salve esses dados em disco. No entanto, também podemos configurá-lo para ser salvo em memória.

### Passo 1: Criar o arquivo Data Model

Crie um arquivo do tipo `Data Model` que será usado para criar as entidades e relacionamentos.

* 1: Crie uma entidade chamada Entity.
* 2: Crie os atributos que deseja salvar, no caso serão os atributos da estrutura do `CacheReference`, que são **beaglehash**, **data**, **id** e o **timeOfCreation**.

![](/imageEntidadesCoreData.png)

### Passo 2: Criar uma estrutura para passar os dados do Beagle para salvar no core data.

Crie a estrutura `CacheEntity` do tipo `NSManagedObject` com os mesmos nomes configurados na **entidade** do core data.

```swift
import Foundation
import CoreData
import Beagle

public class CacheEntity: NSManagedObject {
    
    @NSManaged public var id: String
    @NSManaged public var data: Data
    @NSManaged public var beagleHash: String
    @NSManaged public var timeOfCreation: Date
    
    public func update(with reference: CacheReference) {
        id = reference.identifier
        data = reference.data
        beagleHash = reference.hash
        timeOfCreation = Date()
    }
    
    func mapToReference() -> CacheReference {
        return CacheReference(
            identifier: id,
            data: data,
            hash: beagleHash,
            maxAge: 0,
            timeOfCreation: timeOfCreation
        )
    }
}
```

O método `update` recebe uma referência que é salva no core data. O método `mapToReference` mapeia as referências.

### Passo 3: Criar uma classe para configurar e salvar os dados no core data.

Crie um protocolo com todos os métodos que precisamos para configurar o cache.

```swift
public protocol CacheDiskManagerProtocol {
    func update(_ reference: CacheReference)
    func getReference(for key: String) -> CacheReference?
    func numberOfReferences() -> Int
    func removeLastUsed()
    func clear()
    func saveChanges()
}
```

Os métodos que registramos são:

* **`update`:** Atualiza alguma referência já registrada.

* **`getReference`:** Pega uma referência já registrada utilizando a chave da referência.

* **`numberOfReferences`:** Conta quantas referência já foram registradas,

* **`removeLastUsed`:** Remove a referência mais antiga usada.

* **`clear`:** Apaga as referências.

* **`saveChanges`:**  Salva as alterações.

Abaixo temos a implementação do protocolo e exemplos de cada método.

Crie a classe DefaultCacheDiskManager. Essa classe irá conter a configuração para salvar os dados no core data.

Com as configurações da classe também recebemos na inicialização o `DependencyLogger` para setar log de erro.

```swift
public class DefaultCacheDiskManager: CacheDiskManagerProtocol {
    
    public typealias Dependencies =
        DependencyLogger
    
    let dependencies: Dependencies

    lazy var persistentContainer: NSPersistentContainer = {
        let url = Bundle(for: DefaultCacheDiskManager.self)
            .url(forResource: "CoreCache", withExtension: "momd")!
        let object = NSManagedObjectModel(contentsOf: url)!
        return NSPersistentContainer(name: "CoreCache", managedObjectModel: object)
    }()

    private var context: NSManagedObjectContext {
        return persistentContainer.viewContext
    }
    
    lazy private var fetchRequest: NSFetchRequest<CacheEntity> = {
        return NSFetchRequest<CacheEntity>(entityName: "CacheEntity")
    }()
    
    // MARK: Init
    
    public init(dependencies: Dependencies) {
        self.dependencies = dependencies

        self.persistentContainer.loadPersistentStores() { _, error in
            if let error = error?.localizedDescription {
                self.dependencies.logger.log(Log.cache(.loadPersistentStores(description: error)))
                assertionFailure("ERROR: Beagle's DiskManager (CoreData) is not working")
            }
        }
    }
    
    // MARK: CacheDiskManagerProtocol

    public func update(_ reference: CacheReference) {
        if let old = getEntity(for: reference.identifier) {
            old.update(with: reference)
        } else {
            addNew(reference)
        }
    }

    public func numberOfReferences() -> Int {
        let request = NSFetchRequest<NSNumber>(entityName: "CacheEntity")
        request.resultType = .countResultType
        do {
            let results = try context.fetch(request)
            return (results.first?.intValue) ?? 0
        } catch {
            dependencies.logger.log(Log.cache(.clear(description: error.localizedDescription)))
            return 0
        }
    }

    public func getReference(for key: String) -> CacheReference? {
        let entity = getEntity(for: key)
        entity?.timeOfCreation = Date()
        try? context.save()
        return entity?.mapToReference()
    }
    
    public func removeLastUsed() {
        let request = fetchRequest
        request.sortDescriptors = [NSSortDescriptor(keyPath: \CacheEntity.timeOfCreation, ascending: true)]
        
        do {
            let result = try context.fetch(request)
            result.first.map { context.delete($0) }
        } catch {
            dependencies.logger.log(Log.cache(.removeData(description: error.localizedDescription)))
            return
        }
    }

    public func saveChanges() {
        guard context.hasChanges else { return }

        do {
            try context.save()
        } catch {
            dependencies.logger.log(Log.cache(.saveContext(description: error.localizedDescription)))
        }
    }
    
    public func clear() {
        let fetchRequest: NSFetchRequest<NSFetchRequestResult> = self.fetchRequest as! NSFetchRequest<NSFetchRequestResult>
        let deleteRequest = NSBatchDeleteRequest(fetchRequest: fetchRequest)

        do {
            try context.execute(deleteRequest)
        } catch {
            dependencies.logger.log(Log.cache(.clear(description: error.localizedDescription)))
        }
    }
    
    // MARK: Privates

    private func addNew(_ reference: CacheReference) {
        if let descriptor = NSEntityDescription.entity(forEntityName: "CacheEntity", in: context),
            let entity = NSManagedObject(entity: descriptor, insertInto: context) as? CacheEntity {
            entity.update(with: reference)
        }
    }

    private func getEntity(for key: String) -> CacheEntity? {
        let request = fetchRequest.copy() as! NSFetchRequest<CacheEntity>
        request.predicate = NSPredicate(format: "id == %@", key)

        do {
            let result = try context.fetch(request)
            return result.first
        } catch {
            dependencies.logger.log(Log.cache(.fetchData(description: error.localizedDescription)))
            return nil
        }
    }
}
```

Nessa classe existem dois métodos privados que são o **addNew** e o **getEntity**.

* **`addNew`**: Adiciona novas referências.

* **`getEntity`**: Pega a entidade com todas as referências.

Agora que toda configuração de cache foi concluída, crie uma classe para adotar o protocolo **`CacheManagerProtocol`** que o `Beagle` fornece.

### Passo 4: Criar uma classe para adotar o protocolo do Beagle.

Crie uma classe `CustomCache` do tipo **`CacheManagerProtocol`**.

A classe terá uma struct Config que possui os parâmetros `diskMaximumCapacity`, que define a capacidade máxima do disco, e o `cacheMaxAge`, que define a idade maxima do cache. 

```swift 
public struct Config {
        
        public let diskMaximumCapacity: Int
        public let cacheMaxAge: Int

        public init(
            diskMaximumCapacity: Int = 150,
            cacheMaxAge: Int = 300
        ) {
            self.diskMaximumCapacity = diskMaximumCapacity
            self.cacheMaxAge = cacheMaxAge
        }
    }
```
Inicialize a classe com o `dependencies` e o `config`.

```swift 
class CustomCache: CacheManagerProtocol {

    public typealias Dependencies =
        DependencyLogger

    let dependencies: Dependencies

    public let config: Config

    public struct Config {
        
        public let diskMaximumCapacity: Int
        public let cacheMaxAge: Int

        public init(
            diskMaximumCapacity: Int = 150,
            cacheMaxAge: Int = 300
        ) {
            self.diskMaximumCapacity = diskMaximumCapacity
            self.cacheMaxAge = cacheMaxAge
        }
    }

    // MARK: Init
    
    public init(dependencies: Dependencies, config: Config = Config()) {
        self.config = config
        self.dependencies = dependencies
    }
}
```

Configure a parte de acesso dos dados guardados utilizando o `DefaultCacheDiskManager` que foi criado para fazer a configuração de cache como salvar, excluir e recuperar os dados.

```swift
lazy var diskManager: CacheDiskManagerProtocol =
        DefaultCacheDiskManager(dependencies: dependencies)

    private let defaultMaxCacheAge = "maxValidAge"
```

Agora, vamos criar um método para atualizar a referência e, dependendo da quantidade já salva, retirar a referência mais antiga usada.

```swift 
private func saveInDisk(reference: CacheReference) {
        diskManager.update(reference)

        if diskManager.numberOfReferences() > config.diskMaximumCapacity {
            diskManager.removeLastUsed()
        }

        diskManager.saveChanges()
    }
```
Agora, adotamos os métodos do protocolo `CacheManagerProtocol` e configuramos os métodos: **`addToCache`** que adiciona uma nova referência, **`getReference`** que pega uma referência já criada e **`isValid`** que valida a referência.

```swift 
public func addToCache(_ reference: CacheReference) {
        saveInDisk(reference: reference)
    }
    
public func getReference(identifiedBy id: String) -> CacheReference? {
    return diskManager.getReference(for: id)
}

public func isValid(reference: CacheReference) -> Bool {
    let maxAge = reference.maxAge ?? config.cacheMaxAge
    let expirationDate = reference.timeOfCreation.addingTimeInterval(TimeInterval(maxAge))
    return expirationDate > Date()
}
```

Segue abaixo a classe `CustomCache` completa:

```swift
import UIKit
import CoreData
import Beagle

class CustomCache: CacheManagerProtocol {

    public typealias Dependencies =
        DependencyLogger

    let dependencies: Dependencies

    public let config: Config

    public struct Config {
        
        public let diskMaximumCapacity: Int
        public let cacheMaxAge: Int

        public init(
            diskMaximumCapacity: Int = 150,
            cacheMaxAge: Int = 300
        ) {
            self.diskMaximumCapacity = diskMaximumCapacity
            self.cacheMaxAge = cacheMaxAge
        }
    }

    lazy var diskManager: CacheDiskManagerProtocol =
        DefaultCacheDiskManager(dependencies: dependencies)

    private let defaultMaxCacheAge = "maxValidAge"
    
    // MARK: Init
    
    public init(dependencies: Dependencies, config: Config = Config()) {
        self.config = config
        self.dependencies = dependencies
    }
    
    // MARK: Public

    public func addToCache(_ reference: CacheReference) {
        saveInDisk(reference: reference)
    }
    
    public func getReference(identifiedBy id: String) -> CacheReference? {
        return diskManager.getReference(for: id)
    }

    public func isValid(reference: CacheReference) -> Bool {
        let maxAge = reference.maxAge ?? config.cacheMaxAge
        let expirationDate = reference.timeOfCreation.addingTimeInterval(TimeInterval(maxAge))
        return expirationDate > Date()
    }
    
    public func clear() {
        diskManager.clear()
    }

    // MARK: Privates
    private func saveInDisk(reference: CacheReference) {
        diskManager.update(reference)

        if diskManager.numberOfReferences() > config.diskMaximumCapacity {
            diskManager.removeLastUsed()
        }

        diskManager.saveChanges()
    }

}
```

Agora está tudo pronto e sua camada de cache foi configurada.

### Passo 5: Registrar a camada de cache no Beagle.

Para registar sua camada de cache bastar ir no aquivo do BeagleConfig onde se configura as dependências.

```swift
dependencies.cacheManager = CustomCache(dependencies: innerDependencies)
```
Agora é so passar o CustomCache para os dependencies do beagle.

```swift
import Foundation
import Beagle

class BeagleConfig {

    private init() {  }

    static func start() {

        let dependencies = BeagleDependencies()

        let innerDependencies = InnerDependencies()
        dependencies.cacheManager = CustomCache(dependencies: innerDependencies)

        Beagle.dependencies = dependencies
    }
}

class InnerDependencies: DependencyLogger {
    var logger: BeagleLoggerType = BeagleLoggerDefault()
}

```
