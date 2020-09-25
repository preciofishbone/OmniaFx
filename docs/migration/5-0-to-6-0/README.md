# Migrate from Fx 5.0 to 6.0

This article explains how to update an existing Omnia extension from 5.0 to 6.0.

| WARNING: Fx 6.0 is currently in development ! |
| --- |

# Prerequisite

Run the below cmd to update new Omnia cli

```
dotnet tool update -g omnia
```

Run the below cmd to update all cli templates:

```
omnia dev new --install 6.0.0 --force
```

Run the below cmd to update all fx npm/nuget packages:

>Replace `6.0.x-dev` of each package with the version that running on your tenant. Find those version in Omnia Admin > System > Extensions

- Omnia
```
omnia dev update omniafx -v 6.0.x-dev -p C:\your-extension-path
```

- OmniaWebContentManagement
```
omnia dev update wcmfx -v 6.0.x-dev -p C:\your-extension-path
```

- OmniaWorkplace
```
omnia dev update workplacefx -v 6.0.x-dev -p C:\your-extension-path
```


# Omnia Fx 

| Recommended Changes |
| --- |
| [Enterprise Property](#enterprise-property)|

| Breaking Changes |
| --- |
| [User](#user)|
| [Import from Omnia npm](#import-from-omnia-npm)

# WCM Fx

| Breaking Changes |
| --- |
| [WCM Block](#wcm-block)|
| [WCM Block Title](#wcm-block-title)|
| [Page Rollup](#page-rollup)|
| [Variation Page](#variation-page)|


# Recommended Changes

## Enterprise Property

From now on, enterprise properties could be grouped under categories. If you use `v-autocomplete` or `v-select` to render a list of enterprise properties, you might want to switch to using our new component  `omfx-enterpriseproperty-picker`. 

# Breaking Changes

## User

If you see errors that using `UserPrincipalName` of Identity/User, you have to replace it with `Uid`. For example:

```cs
/*-----Old-----*/
OmniaContext.Identity.UserPrincipalName

/*-----New-----*/
OmniaContext.Identity.Uid
```

If you see errors that using `UserIdentity` interface/class, you have to replace it with `IdentityId` interface/class. 

For example: People Picker (omfx-people-picker) has been updated to use `Array<IdentityId>` as input/output.

**Even if you do not see errors, you should find all references of using `UserIdentity` in your project and try to replace it with `IdentityId`. Because from now on, `UserIdentity` means a full model of user.**

## Import from Omnia npm

```ts

/*-----Old-----*/
import { Store } from '@omnia/fx/store';
/*-----New-----*/
import { Store } from '@omnia/fx/stores';



/*-----Old-----*/
import { ImageSvgTransformer, ItransformerConfigs } from '@omnia/fx/ux';
/*-----New-----*/
import { ImageTransformer, ITransformerConfigs } from '@omnia/fx/ux';



/*-----Old-----*/
import { JourneyInstance, Blade, BladeSizes } from '@omnia/fx/ux';
/*-----New-----*/
import { JourneyInstance, Blade, BladeSizes } from '@omnia/fx-models';

```

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
            /**
            * New way to set default value for MyBlockSettings.
            
            * IT IS RECOMMENDED TO SET DEFAULT VALUE FOR ALL PROPERTIES OF MyBlockSettings. 
            
            * Otherwise, your component might lost reactivity on settings then end up with using bad-$forceUpdate() everywhere.
            
            */
            defaultValue: MyBlockConfigurationFactory.defaultSettings(),
            
            //New way to register block settings web component
            editElement: "my-block-settings"
    })
    //Block settings will be set to this property automatically before creating the block component.
    private settings: MyBlockSettings;


    /*--------------------------------------------------------*/


    //If you want to lister on changes of block settings, (e.g. re-query data based on the new settings), you can @Watch the block settings. 
    //However, if you only use the block settings for rendering, it will automatically trigger re-render after changing the value.

    @Watch('settings', { immediate: false, deep: true })
    private onSettingsChanged() {
        //Yo, the block settings is changed, do the init again 
        this.init();
    }

    public created(){
        //block is created, do first init
        this.init();
    }

    
    /*--------------------------------------------------------*/

    
    //If your block is working with block property (AKA block-data's data in 5.0), you can see the following code to know how to get/set the block property in new way.

    private blockProperty: ReactivePageBlockProperty<MyBlockProperty> = null;
    private init(){
        //Check if the block is rendered inside wcm layout
        if(this.blockInstance.wcm){
            //Get the block property from wcm api
            
            //IT IS RECOMMENDED TO SET DEFAULT VALUE FOR ALL PROPERTIES OF BlockProperty. 
            
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
        /**
        * New way to set default value for MyBlockSettings.
        
        * IT IS RECOMMENDED TO SET DEFAULT VALUE FOR ALL PROPERTIES OF MyBlockSettings. 
        
        * Otherwise, your component might lost reactivity on settings then end up with using bad-$forceUpdate() everywhere.
        
        */
        defaultValue: MyBlockConfigurationFactory.defaultSettings()
    })
    //Block settings will be set to this property automatically before creating the block settings component.
    private settings: IBlockSettingsWriter<MyBlockSettings>; 

}

```

- Update block registration in manifest - MyBlock.manifest.ts

```ts

...
.registerOmniaBlock({
    ...
    //Define layout providers in which this block is supported
    //For example: this block is supported to use inside wcm layout
    layoutDependencyProviders: ["wcm"] 
});

```

## WCM Block Title

If you are using wcm block title stuffs, you have to replace it:


```tsx
/*-----Old-----*/
import { BlockTitleSettingsStore } from '@omnia/wcm';
/*-----New-----*/
import { BlockTitleSettingsStore } from '@omnia/fx/stores';


/*-----Old-----*/
import { BlockTitleSettings } from '@omnia/fx-models';
/*-----New-----*/
import { BlockTitleSettings } from '@omnia/wcm/models';


render(h) {
    return (
       
        /*-----Old-----*/
        <wcm-empty-block-view></wcm-empty-block-view>
        /*-----New-----*/
        <omfx-layout-block-placeholder></omfx-layout-block-placeholder>



        /*-----Old-----*/
        <wcm-block-title></wcm-block-title>
        /*-----New-----*/
        <omfx-layout-block-title></omfx-layout-block-title>



        /*-----Old-----*/
        <wcm-block-title-settings></wcm-block-title-settings>
        /*-----New-----*/
        <omfx-layout-block-title-settings></omfx-layout-block-title-settings>
    )
}
```

## Page Rollup

Fix the way to navigate pages in custom view:

```ts

/*-----Old-----*/
this.pageRollupStore.actions.navigate.dispatch(pageId, pageUrl);


/*-----New-----*/
this.pageRollupStore.actions.navigate.dispatch(pageNavigationNode, pageId, pageUrl);

//you can get the pageNavigationNode from the PageDetailsQueryResult item that passing into the view

```

## Variation Page

If you see errors that getting all variation pages from a default page, you have to change the logic:

Form now on, default page will contain all its variation pages, and page navigation node will always link to the default page.

**Server-side:**

```cs

    //check if the page is default variation page
    if(page is DefaultVariationPage defaultVariationPage){
        //then you can get its all related variation pages (default page will not be included)
        defaultVariationPage.VariationPages
    }

```

**Client-side:**

```ts

    let defaultVariationPage = page as DefaultVariationPage
    //check if the page is default variation page
    if(defaultVariationPage.variationPages){
        //then you can get its all related variation pages (default page will not be included)
        defaultVariationPage.VariationPages
    }

```