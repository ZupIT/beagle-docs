---
title: RootView
weight: 121
description: >-
  Interface RootView detém a referência de activity ou fragment.
---

---

## RootView

Interface RootView detém a referência de uma activity ou fragment, Atravéz dos métodos da interface você tem referência de contexto, ciclo de vida, ViewModelStore e id da view pai, rootView está presente como atributos nas interfaces ViewConvertable e na interface Action.

```kotlin
interface RootView {
    
    fun getContext(): Context

    fun getLifecycleOwner(): LifecycleOwner

    fun getViewModelStoreOwner(): ViewModelStoreOwner

    fun getParentId(): Int
}
```

### getContext()

Retorna o contexto

```kotlin
fun getContext(): Context
```

### getLifecycleOwner()

Retorna uma classe que possui um ciclo de vida.

```kotlin
fun getLifecycleOwner(): LifecycleOwner
```

### getViewModelStoreOwner()

Retorna um ViewModelStore para activity e fragment.

```kotlin
fun getViewModelStoreOwner(): ViewModelStoreOwner
```

### getParentId()

Retorna o id da View pai que encapsula todo o conteúdo renderizado.

```kotlin
fun getParentId(): Int
```

## ActivityRootView

O ActivityRootView detém a referência de uma activity, usado no método [**loadView**](/pt/docs/tutoriais/adicionando-o-beagle-a-uma-parte-da-tela-nativa/adicionando-um-componente-beagle-server-driven/) para ter a referência da activity, onde será renderizado componente beagle.

```kotlin
class ActivityRootView(
    val activity: AppCompatActivity,
    private val parentId: Int
) : RootView {

    override fun getContext(): Context = activity

    override fun getLifecycleOwner(): LifecycleOwner = activity

    override fun getViewModelStoreOwner(): ViewModelStoreOwner = activity

    override fun getParentId(): Int = parentId
}
```

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :--- |
| activity | AppCompatActivity | ✓ | Pai de uma visualização. |
| parentId | Int | ✓ | Id view pai. |


## FragmentRootView

O FragmentRootView detém a referência de um fragment, usado no método [**loadView**](/pt/docs/tutoriais/adicionando-o-beagle-a-uma-parte-da-tela-nativa/adicionando-um-componente-beagle-server-driven/) para ter a referência do fragment, onde será renderizado componente beagle.

```kotlin
class FragmentRootView(
    val fragment: Fragment,
    private val parentId: Int
) : RootView {

    override fun getContext(): Context = fragment.requireContext()

    override fun getLifecycleOwner(): LifecycleOwner = fragment.viewLifecycleOwner

    override fun getViewModelStoreOwner(): ViewModelStoreOwner = fragment

    override fun getParentId(): Int = parentId
}
```

| **Atributo** | **Tipo** | **Obrigatório** | **Definição** |
| :--- | :--- | :---: | :--- |
| fragment | Fragment | ✓ | Pai de uma visualização. |
| parentId | Int | ✓ | Id view pai. |
