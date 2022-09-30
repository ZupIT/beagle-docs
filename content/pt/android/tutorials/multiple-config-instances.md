---
title: Como usar várias instâncias do beagle
weight: 234
description: >-
  Nesta seção, você encontrará o passo a passo para iniciar a configuração do beagle para várias instâncias
---

---
### O que é isso?

**Beagle Multiple Instances** é um recurso que permite a inicialização de fluxos server driven distintos com configurações de Beagle independentes. Isso permite que cada fluxo tenha seus próprios componentes, base url, ações, http client, etc.


## Configurando várias instâncias do Beagle

### Definindo novas configurações

Neste exemplo, você criará uma classe para definir a configuração do beagle.

Nesta etapa você pode configurar widgets, ações, httpclients e todas as outras configurações aceitas pelo beagle.

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

### Configurando um ponto de entrada beagle para usar a nova configuração

A função [**newServerDrivenIntent**]({{< ref path="/android/tutorials/how-to-display-a-screen" lang="en" >}}) é responsável por exibir uma tela server driven. Para definir que esta tela usará a configuração definida acima, faça:

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
