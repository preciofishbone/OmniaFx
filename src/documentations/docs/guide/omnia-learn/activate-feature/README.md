# Activate a Feature

```cs
//Inject IFeatureService (Omnia.Fx.Features.IFeatureService)
IFeatureService FeatureService

//Then you can 
FeatureService.ActivateFeatureAsync

//find more details in the service interface.
```

## Ensure proper context in feature action 

- Business Profile's feature - set `profileId` into `contextParams` parameter.
- App's feature - set `appInstanceId` into `contextParams` parameter.