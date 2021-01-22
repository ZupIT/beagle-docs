---
title: Beagle Scafold
weight: 16
description: 'Aqui você encontrará a biblioteca **Beagle-Scaffold** para ajudá-lo a iniciar um projeto usando o Beagle no Android.
Esta biblioteca conterá quase todas as configurações necessárias para adicionar o Beagle a um projeto Android.'
---

---


![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-scaffold?label=beagle-scaffod)
![**Maven Central**](https://img.shields.io/maven-central/v/br.com.zup.beagle/android?label=Beagle)

### Requisitos
Antes de começar a configurar o Beagle para o seu sistema Android, é importante verificar se você instalou todas as versões atuais dos seguintes programas:

* JDK 8+ language
* Android API level: at least 19 or higher
* Kotlin 1.3+

### Primeiros Passos
<hr>

Este tutorial irá configurar o Beagle desde o início.

Etapa 1: adicione uma configuração ao arquivo Gradle em seu projeto:
- `Adicione mavenCentral()` no bloco `All projects` em seu arquivo do Projeto Gradle (build.gradle) <br>

```kotlin
allprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
    }
}
```
Etapa 2: adicione o plugin kotlin kapt e 3 dependências no gerenciador de dependências do seu aplicativo (gradle.gradle) <br>

 ![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/beagle-scaffold?label=beagle-scaffod)
 ![Maven Central](https://img.shields.io/maven-central/v/br.com.zup.beagle/android?label=Beagle)                                                                   

* _Os números de versão listados abaixo podem ter sido atualizados. Verifique as versões reais nas tags acima:_
```kotlin
apply plugin: 'kotlin-kapt'

android {
    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_1_8
    }
}

dependencies {
    implementation "br.com.zup.beagle:android:1.5.1"
    kapt "br.com.zup.beagle:android-processor:1.5.1"
    implementation "br.com.zup.beagle:beagle-scaffold:0.0.4"
}
```

Etapa 3: Crie um AppBeagleConfigFile
* Este arquivo obterá todos os seus atributos de configuração da biblioteca beagle-scaffold. <br>
Se necessitar de uma informação mais detalhada consulte a nossa documentação

```
@BeagleComponent
class AppBeagleConfig: BeagleConfigScaffold()
```
Etapa 4: Construa seu projeto: Ao construir este aplicativo, a configuração acima irá configurar o Beagle em seu projeto. <br>
Etapa 5: crie um arquivo AppAplication conforme o exemplo abaixo:
```
class AppApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        BeagleScaffold(BeagleSetup()).init(this)
    }
}
```
Etapa 6: Teste seu aplicativo <br>
Para testá-lo, basta chamar uma tela de nosso exemplo do BFF. <br>
Para fazer isso, você precisa iniciar uma activity usando o BeagleIntent <br>
da biblioteca Beagle-Scaffold exatamente como mostrado abaixo:
```
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Server-driven Screen
        startActivity(BeagleIntent(this).toSample())
    }
}
```
Uma tela de amostra com todos os componentes do Beagle será exibida na tela do emulador

<hr>

##### Para saber mais sobre o Beagle: Por favor verifique nosso [Beagle](https://github.com/ZupIT/beagle) repositório
##### Para saber mais sobre o  Beagle-Defaults: Por favor verifique nossa [Beagle-Scaffold](https://docs.usebeagle.io/home/) documentação