---
title: RootView
weight: 121
description: >-
  Interface RootView holder the reference of activity or fragment.
---

---

## RootView

The RootView interface holds the reference of an activity or fragment. Through the interface methods, you have a reference to context, life cycle, ViewModelStore and parent view id. 

RootView is present as attributes in the ViewConvertable interfaces and in the Action interface.

```kotlin
interface RootView {
    
    fun getContext(): Context

    fun getLifecycleOwner(): LifecycleOwner

    fun getViewModelStoreOwner(): ViewModelStoreOwner

    fun getParentId(): Int
}
```
### getContext()

Returns the context.

```kotlin
fun getContext(): Context
```

### getLifecycleOwner()

Returns the lifecycle.

```kotlin
fun getLifecycleOwner(): LifecycleOwner
```

### getViewModelStoreOwner()

Returns a ViewModelStore for activity and fragment.

```kotlin
fun getViewModelStoreOwner(): ViewModelStoreOwner
```

### getParentId()

Returns the id of the parent View that encapsulates all rendered content.

```kotlin
fun getParentId(): Int
```

## ActivityRootView

The ActivityRootView holds a activity reference, used in the [**loadView**](/docs/tutorials/adding-beagle-to-a-part-of-a-native-screen/adding-a-beagle-server-driven-component/) method to have the activity reference, where the beagle component will be rendered.

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

| **Attributes** | **Type** | **Required** | **Description** |
| :--- | :--- | :---: | :--- |
| activity | AppCompatActivity | ✓ | Receives the instance of an activity. |
| parentId | Int | ✓ | View id. |


## FragmentRootView

The FragmentRootView holds a fragment reference, used in the [**loadView**](/docs/tutorials/adding-beagle-to-a-part-of-a-native-screen/adding-a-declarative-beagle-component/) method to have the fragment reference, where the beagle component will be rendered.

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

| **Attributes** | **Type** | **Required** | **Description** |
| :--- | :--- | :---: | :--- |
| fragment | Fragment | ✓ | Receives the instance of an fragment. |
| parentId | Int | ✓ | View id. |
