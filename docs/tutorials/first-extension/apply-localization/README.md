# Apply localization

In this last part of the tutorial, you will learn how to apply localization into the extension.

## Create localization files

Create a new folder called `loc` under `..\HelloOmniaFx.Web\`.

Inside the newly created folder, run the following cmd:

```
omnia dev new localization --name HelloOmniaFxLocalization
```

- `localize.ts` - Define the localization namespace and structure (interface).
- `localize.manifest.ts` - Define the default value in English.
- `localize.sv-se.manifest.ts` - Define the translation value in Swedish.

>Tip: It is possible to export a whole localization .json file in Omnia Admin to send to translator, then manually add the content back into manifest files.

## Usage

- in Component:

    ```tsx

    //Retrieve your localization instance
    @Localize(HelloOmniaFxLocalization.namespace) private loc: HelloOmniaFxLocalization.locInterface;

    //Omnia has provided common localization so try to reuse it as much as possible.
    @Localize(OmniaUxLocalizationNamespace) private omniaLoc: OmniaUxLocalization;

    //Inject this localization service if you want to transorm localization key
    @Inject(LocalizationService) private localizationService: LocalizationService;

    //Render it
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

- in Feature definition:

    ```ts
    .registerFeature({
        ...

        title: "$Localize:HelloOmniaFxLocalization.Features.Feature1;"
    
    ```
    
- in Admin Journey left nav:

    ```ts
    Topics.Admin.registerNavigationNode.publish({
        ...

        title: '$Localize:HelloOmniaFxLocalization.Labels.Label1;'
    ```


- in any other definitions that is supporting localization:
  
    Apply syntax `$Localization:Namespace.Something.Something;`

- in Server-side code:

    Inject `Omnia.Fx.Localization.ILocalizationProvider`