# App Instance
Property **appInstanceId** is removed from **AppRoute** and **IAppRoute** models. You should use property **appInstance** instead in the same model.
```ts
interface AppRoute {
    appInstanceId: Guid; // Removed from 7.0
    appInstance: AppInstance; // Use this instead
}

interface IAppRoute {
    appInstanceId: Guid; // Removed from 7.0
    appInstance: AppInstance; // Use this instead
}

interface AppInstance {
    id: GuidValue; // Same value as appInstanceId
}
```

Property **properties** typing in **AppInstanceProperties** model is changed from **any** to **AppInstancePropertiesStorage**

```ts
interface AppInstanceProperties {
    properties: any; // Type any removed from 7.0
    properties: AppInstancePropertiesStorage; // Updated type
}

interface AppInstancePropertiesStorage {
    [name: string]: unknown;
    omniaPath?: string;
    omniaRoutePrefix?: string;
}
```