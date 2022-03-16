# Apply localization

In this last part of [Build your first extension](https://github.com/preciofishbone/OmniaFx/tree/main/docs/tutorials/first-extension#build-your-first-extension-like-a-boss) tutorial, you will learn how to apply localization into the extension.

## Create localization files

Create a new folder called `loc` under `..\client\`.

Inside the newly created folder, run the following cmd:

```
omnia dev new localization --name HelloOmniaFxLocalization
```

- `localize.ts` - Define the localization namespace and structure (interface).
- `localize.manifest.ts` - Define the default value in English.
- `localize.sv-se.manifest.ts` - Define the translation value in Swedish.

>Tip: You can notice that the generated `localize.sv-se.manifest.ts` does not constraint on interface so when any Swedish label is missing it will just fallback to English without causing build error. 

>Tip: It is possible to export a whole localization as .json file in Omnia Admin for doing translation work, then manually add all the translated json back into the correct manifest files.

## Usage

- E.g. in Component:

    ```tsx

    //Retrieve your localization instance
    @Localize(HelloOmniaFxLocalization.namespace) private loc: HelloOmniaFxLocalization.locInterface;

    //Omnia has provided common localization so try to reuse it as much as possible.
    @Localize(OmniaUxLocalizationNamespace) private omniaLoc: OmniaUxLocalization;

    //Inject this localization service if you want to transform localization key
    @Inject(LocalizationService) private localizationService: LocalizationService;

    
    render(h){
        //two way to get the value:

        //1. get from localization instance
        let label1 = this.loc.Labels.Label1;
        //2. get from localization service
        let label2 = this.localizationService.transform("$Localize:HelloOmniaFxLocalization.Labels.Label2;")

        return(
            <div>{label1} - {label2}</div>
        )
    }
    
    ```

- E.g. in Feature definition:

    ```ts
    .registerFeature({
        ...

        title: "$Localize:HelloOmniaFxLocalization.Features.Feature1;"
    
    ```
    
- E.g. in Admin Journey left nav:

    ```ts
    .registerNavigationNode([
        {
            ...
            title: '$Localize:HelloOmniaFxLocalization.Features.Feature1;' 
        
    ```

- E.g. in Server-side code:

    ```cs
        //Inject the service
        Omnia.Fx.Localization.ILocalizationProvider localizationProvider;
        var localizedValue = await localizationProvider.GetLocalizedValueAsync("'$Localize:HelloOmniaFxLocalization.Features.Feature1;");
    ```
    
## Issue

 - When you see strange issues with localization, you should first check whether your localization value is correct or not in the global variable `omnia.localization` by browser console.  

 - When your localization seems only work with local serve and does not work after deploying. It could be some caching issues so you could try to **empty browser cache**, or even try to **re-deploy** the extension.

 - Be careful that you might be using a duplicate namespace of other existing localization. The namespace should be unique. 
 
 - Also, be careful with the translated localization files that don't constraint on interface so they could have conflict json structure that unexpectedly overrides the final localization. 