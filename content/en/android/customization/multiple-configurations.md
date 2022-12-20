---
title: Multiple configurations
weight: 234
description: >-
  On this section, you'll find the step by step on how to start multiple instances of Beagle, with different configurations
---

---
### What is it? 

**Beagle Multiple Instances** is a feature that allows the start up of distinct server driven flows with independent configurations of Beagle. This allows each server driven flow to have its own components, base url, actions, http client, etc.


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
        AppViewClient(it.asBeagleSdk().httpClientFactory?.create())
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

fun BeagleSdkWrapper.logInfo(message: String) {
  this.asBeagleSdk().logger?.info(message)
}

fun BeagleSdkWrapper.logWarning(message: String) {
  this.asBeagleSdk().logger?.warning(message)
}

fun BeagleSdkWrapper.logError(message: String, throwable: Throwable? = null) {
  if (throwable != null) {
    this.asBeagleSdk().logger?.error(message, throwable)
  } else {
    this.asBeagleSdk().logger?.error(message)
  }
}

```

### Configuring a beagle entry point to use the new configuration

The function [**newServerDrivenIntent**]({{< ref path="/android/tutorials/how-to-display-a-screen" lang="en" >}}) is responsible for displaying a server-driven screen. To define that this screen must use the configuration defined above, do:

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