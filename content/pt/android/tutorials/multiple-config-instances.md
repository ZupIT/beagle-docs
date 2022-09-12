---
title: How to use multiple instances of beagle
weight: 234
description: >-
  On this section, you'll find the step by step to configure beagle configuration for multiple instances
---

---
### What is it? 

The **Beagle Multiple Instances** is a way to start beagle for the current server driven flow using another beagle configuration, such as new widgets, actions and so on.

You will see below how to configure the multiple instances.

## Configuring Multiple Instances of Beagle

### Defining new configurations

On this example you will create a class to define the beagle configuration.

In this step you can configure widgets, actions, httpclients and all other configurations accepted by beagle.

```kotlin
private const val CONFIG_NAME = "BeagleSetupNew"
class BeagleSetupNew: BeagleSdkWrapper {
    override val logger = beagleConfigFactory<BeagleLogger> {
        BeagleLoggerDefault()
    }

    override val config = beagleConfigFactory<BeagleConfig> {
        it.logInfo("$CONFIG_NAME:config")
        AppBeagleConfig()
    }

    override val deepLinkHandler = beagleConfigFactory<DeepLinkHandler> {
        it.logInfo("$CONFIG_NAME:deepLinkHandler")
        AppDeepLinkHandler()
    }

    override val httpClientFactory = beagleConfigFactory<HttpClientFactory>  {
        it.logInfo("$CONFIG_NAME:httpClientFactory")
        AppHttpClientFactory()
    }

    override val designSystem = beagleConfigFactory<DesignSystem> {
        it.logInfo("$CONFIG_NAME:designSystem")
        AppDesignSystem()
    }

    override val imageDownloader = beagleConfigFactory {
        it.logInfo("BeagleSetupSecond:imageDownloader")
        imageDownloaderObject
    }
    override val viewClient = beagleConfigFactory<ViewClient> {
        it.logInfo("BeagleSetupSecond:viewClient")
        AppViewClient(it.httpClientFactoryInstance?.create())
    }

    override val controllerReference = beagleConfigFactory {
        it.logInfo("$CONFIG_NAME:controllerReference")
        beagleControllerReferenceObject
    }

    override val typeAdapterResolver = beagleConfigFactory {
        it.logInfo("$CONFIG_NAME:typeAdapterResolver")
        typeAdapterObject
    }

    override val analyticsProvider = beagleConfigFactory<AnalyticsProvider> {
        it.logInfo("$CONFIG_NAME:analyticsProvider")
        AppAnalytics()
    }

    override val urlBuilder = beagleConfigFactory<UrlBuilder> {
        it.logInfo("$CONFIG_NAME:urlBuilder")
        AppUrlBuilder()
    }

    override fun registeredWidgets() =
        beagleConfigFactory {
            it.logInfo("$CONFIG_NAME:registeredWidgets")
            listOf(
                Text3::class.java as Class<WidgetView>,
                Input::class.java as Class<WidgetView>)
        }

    override fun registeredActions() =
        beagleConfigFactory {
            it.logInfo("$CONFIG_NAME:registeredActions")
            listOf(
                br.com.zup.beagle.sample.actions.CustomAndroidAction::class.java as Class<Action>,
            )
        }

    override fun registeredOperations() =
        beagleConfigFactory {
            it.logInfo("$CONFIG_NAME:registeredOperations")
            mapOf<String, Operation>(
                "isValidCpf" to br.com.zup.beagle.sample.operations.IsValidCPFOperation(),

                )
        }
}
```

### Configuring a beagle entry point to use the new configuration

A function called [**newServerDrivenIntent**]({{< ref path="/android/tutorials/how-to-display-a-screen" lang="en" >}}) is responsible to display a server-driven screen, now you can define that this screen will use the configuration defined above like this:

```kotlin
startActivity(
  newServerDrivenIntent<ServerDrivenActivity>(
      screenJson = SCREEN_JSON,
      beagleSdk = BeagleSetupNew()
  )
)            
// or
startActivity(      
  newServerDrivenIntent<ServerDrivenActivity>(
      requestData = RequestData(SAMPLE_ENDPOINT),
      beagleSdk = BeagleSetupNew()
  )
)
 // or
binding.fragmentContent.loadView(
      this,
      RequestData("https://usebeagle.io/start/welcome"),
      beagleSdk = BeagleSetupNew()
  ) 
```
