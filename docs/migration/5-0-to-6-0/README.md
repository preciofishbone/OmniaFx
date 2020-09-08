# Migrate from Fx 5.0 to 6.0

This article explains how to update an existing Omnia extension from 5.0 to 6.0.

| WARNING: Fx 6.0 is currently in development ! |
| --- |

# Cli Template

Run the below cmd to update all cli templates:

```
omnia dev new --install 6.0.0 --force
```

# Omnia Fx 

Run the below cmd to update all omnia fx npm/nuget:

```
omnia dev update omniafx -v 6.0.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [User](#user)|


# WCM Fx

Run the below cmd to update all wcm fx npm/nuget:

```
omnia dev update wcmfx -v 6.0.0 -p C:\your-extension-path
```

| Breaking Changes |
| --- |
| [WCM Block](#wcm-block)|
| [Page Rollup](#page-rollup)|
| [Variation Page](#variation-page)|

# Breaking Changes

## User

If you see errors that using `UserPrincipalName` of Identity/User, you have to replace it with `Uid`. For example:

```cs
/*-----Old-----*/
OmniaContext.Identity.UserPrincipalName

/*-----New-----*/
OmniaContext.Identity.Uid
```

If you see errors that using `UserIdentity` interface/class, you have to replace it with `IdentityId` interface/class. For example: People Picker (omfx-people-picker) has been updated to use `Array<IdentityId>` as input/output.

## WCM Block

Follow the instruction below to update WCM blocks in your extension:

- Update block model

```ts
/*-----Old-----*/
interface MyBlockDataData {
    someProperty: object;
}

interface MyBlockDataSettings {
    someSettings: object;
}

interface MyBlockData extends BlockDataWithSettingsAndData<MyBlockDataData, MyBlockDataSettings> {
}


/*-----New-----*/
//block data has been separated into 2 parts: block settings and block property.

//1 - Remove the MyBlockData model

//2 - Rename MyBlockDataSettings to MyBlockSettings
interface MyBlockSettings {
    someSettings: object
}

//3 - Rename MyBlockDataData to MyBlockProperty
interface MyBlockProperty {
    someData: object;
}

```

- Update the block component - MyBlock.tsx

    - Remove `@Prop() settingsKey: string`.
    - Remove all related code that using SettingsService to get/set block settings/property.
    - Remove all related code that using Topics.onPageEditModeChanged to get the mode.

```ts
import { Watch } from 'vue-property-decorator';
import { Inject } from '@omnia/fx';
import { IBlockInstance, BlockRenderingModes } from "@omnia/fx-models";
import { BlockSettingsReader, BlockInstance } from "@omnia/fx/ux";

@Component
export class MyBlockComponent extends VueComponentBase {

    //Inject the block instance...
    @Inject(BlockInstance) private blockInstance: IBlockInstance<MyBlockSettings>;
    //...so we can check the mode
    private get isPageEditMode() {
        return this.blockInstance.mode != BlockRenderingModes.render;
    }

    private get isPageContentEditing() {
        return this.blockInstance.mode == BlockRenderingModes.designPreview;
    }

    private get isPageLayoutEditing() {
        return this.blockInstance.mode == BlockRenderingModes.design;
    }


    /*--------------------------------------------------------*/


    //New way to get block settings
    @BlockSettingsReader<MyBlockSettings>({
            //New way to set default value for MyBlockSettings.
            //NOTE: it is recommended to set default value for all properties of MyBlockSettings. Otherwise you will lost reactivity on block settings and end up with using bad-$forceUpdate() everywhere.
            defaultValue: MyBlockConfigurationFactory.defaultSettings(),
            
            //New way to get register block settings web component
            editElement: "my-block-settings"
    })
    private settings: MyBlockSettings; //Block settings will be addedto this property before the block component is created. 


    /*--------------------------------------------------------*/


    //If you want to lister on the block settings changed to handle extra logic (e.g. re-query server base on the new settings). Then you can watch the block settings. 
    //However, if you only use the block settings for rendering, it will automatically trigger re-render after changing the value.

    @Watch('settings', { immediate: false, deep: true })
    private onSettingsChanged() {
        //Yo, the block settings is changed, do the init again 
        this.init();
    }

    public created(){
        //block is created, do some init
        this.init();
    }

    
    /*--------------------------------------------------------*/

    
    //If your block is working with block property (AKA block data data in 5.0). Follow the following code to know how to get/set the block property.

    private blockProperty: ReactivePageBlockProperty<MyBlockProperty> = null;
    private init(){
        //Check if the block is render inside wcm layout
        if(this.blockInstance.wcm){
            //Get the block property
            this.blockProperty = this.blockInstance.wcm.pageBlockPropertyStore.getBlockProperty(this.blockInstance, this.settings, MyBlockConfigurationFactory.defaultProperty())
        }
    }

    private saveBlockProperty(){
        if(this.blockInstance.wcm){
          this.blockInstance.wcm.pageBlockPropertyStore.updateBlockProperty(this.blockProperty);
        }
    }
}
```

- Update the block settings component - MyBlockSettings.tsx

    - Remove `@Prop() settingsKey: string`
    - Remove all the related code that using SettingsService to get/set block settings/property

```ts

@Component
export class MyBlockComponent extends VueComponentBase {

    //New way to get block settings
    @BlockSettingsWriter<MyBlockSettings>({
        //New way to set default value for MyBlockSettings.
        //NOTE: it is recommended to set default value for all properties of MyBlockSettings. Otherwise you will lost reactivity on block settings and end up with using bad-$forceUpdate() everywhere.
        defaultValue: MyBlockConfigurationFactory.defaultSettings()
    })
    private settings: IBlockSettingsWriter<MyBlockSettings>; //Block settings will be added to this property before the block component is created. 

}

```

- Update block manifest - MyBlock.manifest.ts

```ts

...
.registerOmniaBlock({
    ...
    layoutDependencyProviders: ["wcm"] //this block is available for using inside wcm layout
});

```

## Page Rollup

Fix the way to navigate pages in custom view:

```ts

/*-----Old-----*/
this.pageRollupStore.actions.navigate.dispatch(pageId, pageUrl);


/*-----New-----*/
this.pageRollupStore.actions.navigate.dispatch(pageNavigationNode, pageId, pageUrl);

//you can get the pageNavigationNode from the PageDetailsQueryResult that passing into the view

```

## Variation Page

If you see errors that getting all variation pages from a default page, then you have to change the logic.

Form now on, the default page will contain all the variation pages, and the page navigation node will always link to the default page.

**Server-side:**

```cs

    //check if the page is default variation page
    if(page is DefaultVariationPage defaultVariationPage){
        //then you can get all related variation pages (not include default page)
        defaultVariationPage.VariationPages
    }

```

**Client-side:**

```ts

    let defaultVariationPage = page as DefaultVariationPage
    if(defaultVariationPage.variationPages){
        //then you can get all related variation pages (not include default page)
        defaultVariationPage.VariationPages
    }

```