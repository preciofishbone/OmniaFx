# Migrate from Fx 5.0 to 6.0

This article explains how to update an existing Omnia extension from 5.0 to 6.0.

| WARNING: 6.0 contains preview features such as Page API, Layout Engine and Action Button |
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

>Replace `6.0.x` of each package with the version that running on your tenant. Find those version in Omnia Admin > System > Extensions

- Omnia
```
omnia dev update omniafx -v 6.0.x -p C:\your-extension-path
```

- OmniaWebContentManagement
```
omnia dev update wcmfx -v 6.0.x -p C:\your-extension-path
```

- OmniaWorkplace
```
omnia dev update workplacefx -v 6.0.x -p C:\your-extension-path
```


# Omnia Fx 

| Recommended Changes |
| --- |
| [Enterprise Property](#enterprise-property)|

| Breaking Changes |
| --- |
| [Tooling](#tooling)|
| [Rich Text Editor](#rich-text-editor)|
| [Button Presets](#button-presets)|
| [User](#user)|
| [Import from Omnia npm](#import-from-omnia-npm)|
| [Register admin navigation node](#register-admin-navigation-node)|

# WCM Fx

| Breaking Changes |
| --- |
| [WCM Block](#wcm-block)|
| [WCM Block Title](#wcm-block-title)|
| [Page Rollup](#page-rollup)|
| [Variation Page](#variation-page)|
| [Create page from hardcoded json](#create-page-from-hardcoded-json)|
| [Image Rendering](#image-rendering)|

# Admin Fx

| Breaking Changes |
| --- |
| [Admin Fx npm has been removed](#admin-fx-npm-has-been-removed)|

# ODM Fx

| Breaking Changes |
| --- |
| [ODM Fx npm has been removed](#odm-fx-npm-has-been-removed)|

# Team Collaboration Fx

| Breaking Changes |
| --- |
| [Team Collaboration Fx nuget has been removed](#team-collaboration-fx-nuget-has-been-removed)|


# Recommended Changes

## Enterprise Property

From now on, enterprise properties could be grouped under categories. If you use `v-autocomplete` or `v-select` to render a list of enterprise properties, you might want to switch to using our new component  `omfx-enterpriseproperty-picker`. 

# Breaking Changes

## Tooling

Rename `Gulpfile.js` file to `Gulpfile.esm.js`

## Rich Text Editor

If you see import issues relating to RTE stuffs, try to update the import path to `@omnia/fx/ux/richtexteditor`

## Button Presets

```ts
/*-----Old-----*/
import { ButtonPreset } from '@omnia/fx';
/*-----New-----*/
import { ButtonPresets } from '@omnia/fx/ux';


/*-----Old-----*/
<omfx-button preset={ButtonPreset.ImageIconButton} ... />
/*-----New-----*/
<omfx-button preset={ButtonPresets.base.smallIcon} ... />


/*-----Old-----*/
<omfx-button preset={ButtonPreset.CloseIconButton} ... />
/*-----New-----*/
<omfx-button preset={ButtonPresets.icons.close} ... />


/*-----Old-----*/
<omfx-button preset={ButtonPreset.Close} ... />
/*-----New-----*/
<omfx-button preset={ButtonPresets.text.close} ... /> 


/*-----Old-----*/
<omfx-button preset={ButtonPreset.Ok} ... />
/*-----New-----*/
<omfx-button preset={ButtonPresets.text.ok} ... /> 

```

## User

If you see errors that using `UserPrincipalName` property of Identity/User, you have to replace it with `Uid`. For example:

```cs
/*-----Old-----*/
OmniaContext.Identity.UserPrincipalName

/*-----New-----*/
OmniaContext.Identity.Uid
```

If you see errors that using `UserIdentity` interface/class, you have to replace it with `Identity` interface/class. 

For example: People Picker (omfx-people-picker) has been updated to use `Array<Identity>` as input/output.

**Even if you do not see errors, you should find all references of using `UserIdentity` in your project and try to replace it with `Identity`. Because from now on, `UserIdentity` means identity for user only (not include group).**

> Its recommended to go through [this article](https://github.com/preciofishbone/OmniaFx/tree/main/docs/tutorials/omnia-learn/identity#identity-usergroup) to know how Identity is in Omnia System.


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

## Register admin navigation node

```ts

/*-----Old-----*/
Topics.Admin.registerNavigationNode.publish({
    title: '$Localize:....Admin.NavigationLabel;',
    category: AdminNavigationBuiltInCategory.Tenant,
    elementToRender: '...-journey',
    icon: new FontAwesomeIcon("fal fa-exclamation-triangle"),
    tooltip: 'NavigationLabel',
    weight: 800
})


/*-----New-----*/
import { AdminStore } from '@omnia/fx/ux/admin';

AdminStore.mutations.addNavigationNode.commit({
    title: '$Localize:....Admin.NavigationLabel;',
    category: AdminNavigationBuiltInCategory.Tenant,
    elementToRender: '...-journey',
    icon: new FontAwesomeIcon("fal fa-exclamation-triangle"),
    tooltip: 'NavigationLabel',
    weight: 800
});

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

Fix view registration:

- Manifest file:
  
```ts
Composer.registerManifest("" /** Manifest Id */, ""   /** Manifest Name */)
.registerResources({
    resourcePaths: ["./Registration.js"]
})
.extendApi(api => api.wcm.pageRollup.registration)
```

- Registration file:

```ts
import { extendApi } from "@omnia/fx";

extendApi(api => api.wcm.pageRollup.registration, registerApi => {

    return new Promise<void>((resolve, reject) => {

        registerApi.registerViews(null /** input the Page Rollup Registration View */);

        resolve();
    })
})
```


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

## Create page from hardcoded json

If you are using any hardcoded json (constant) to create wcm pages, you should update the json. Try to get the valid json via client-side.

## Image Rendering

In 6.0, Media concept/data model has been changed.

The below code is a sample showing how an image (page image property) is rendered inside a custom Page Rollup view.

```tsx
import { MigrationUtils, Utils } from '@omnia/fx';
import { ImageSvgTransformer } from '@omnia/fx/ux';
import { PageDetailsQueryResult } from '@omnia/wcm/models';
import { MediaPickerVideo, MediaPickerEnums, MediaPickerVideo, MediaPickerImageRatio, SquareRatio, LandscapeRatio, PortraitRatio, WideRatio } from '@omnia/fx-models';

export class ACustomPageRollupView extends VueComponentBase {


    /**
    *
    *
    * DEFINE WHICH RATIO FOR RENDERING IMAGE IN THIS VIEW: hardcoded ratio in 5.0
    *
    */
    oldRatio = { xRatio: 1, yRatio: 1 }
    uniqueId = Utils.generateGuid();

    /**
    *
    *
    * DEFINE WHICH RATIO FOR RENDERING IMAGE IN THIS VIEW: SquareRatio/LandscapeRatio/PortraitRatio...
    *
    */
    ratioUniqueId = new SquareRatio().uniqueId;
    imageRatio: MediaPickerImageRatio = null;

    created() {
        getSelectedImageRatio();
    }

    getSelectedImageRatio(){
        this.mediaPickerStore.actions.ensureImageRatios.dispatch().then(() => {
            this.imageRatio = this.mediaPickerStore.getters.imageRatios().find(item => item.uniqueId == this.radioUniqueId);
        })
    }

    getHtmlByThumbnailUrl(videoThumbnailUrl: string) {
        if (!videoThumbnailUrl)
            return null;
        
        if (videoThumbnailUrl.match(/https:\/\/img\.youtube\.com\/vi\/(.)+\/maxresdefault\.jpg/gm)) {
            videoThumbnailUrl = videoThumbnailUrl.replace("/maxresdefault.jpg", "/hqdefault.jpg");
        }

        return `<img src="${videoThumbnailUrl}" />`;
    }

    /**
    *
    *
    * THIS IS THE RENDER IMAGE FUNCTION
    *
    */
    renderImage(h, page: PageDetailsQueryResult) {
        if (!this.imageRatio)
            return null;

        let imagePropertyValue: MediaPickerMedia = page.properties['***which page image property***'];
        let imageHTML = '';
        let imageUrl = '';
        if (imagePropertyValue) {         
            MigrationUtils.migrateMediaPickerMedia(imagePropertyValue);
            try {
                let mediaType = imagePropertyValue.omniaMediaType;

                /**
                *
                *
                * THIS IS THE NEW WAY OF RENDERING IMAGE WITH NEW IMAGE DATA 
                *
                */
                if (mediaType != null) {
                    if (mediaType == MediaPickerEnums.OmniaMediaTypes.Video) {
                        imageHTML = this.getHtmlByThumbnailUrl((imagePropertyValue as MediaPickerVideo).thumbnailUrl);
                    }
                    else {
                        imageUrl = this.mediaPickerService.getImageUrl((imagePropertyValue as MediaPickerImage), imageRatio ? imageRatio.id : null);
                    }
                }
                /**
                *
                *
                * THIS IS THE OLD WAY OF RENDERING IMAGE WITH OLD IMAGE DATA (backward compatibility)
                *
                */
                else {
                    if (imagePropertyValue['thumbnailUrl']) {
                        imageHTML = this.getHtmlByThumbnailUrl(imagePropertyValue['thumbnailUrl']);
                    }
                    else if (imagePropertyValue['src']) {
                        /**
                        *
                        * DEFINE THE OLD RATIO HERE
                        *
                        */

                        let ratio = imagePropertyValue['ratios'] ? imagePropertyValue['ratios'].filter(r => r.xRatio == this.oldRatio.xRatio && r.yRatio == this.oldRatio.yRatio)[0] : null;
                        let transformerConfig = ratio ? { cropArea: ratio.ratioCropArea, cropRatio: { x: ratio.xRatio, y: ratio.yRatio }, elementId: this.uniqueId } : { elementId: this.uniqueId };
                        imageHTML = new ImageSvgTransformer(imagePropertyValue['src'], transformerConfig).getElementString();
                    }
                }
            }
            catch (ex) {
                console.log(`Cannot render image`)
            }
        }
        let retElement = null;
        if (imageHTML)
            retElement = <a onClick={(event: MouseEvent) => {  }} href={page.url} domProps-innerHTML={imageHTML}></a>;
        else {
            retElement = <a onClick={(event: MouseEvent) => {  }} href={page.url}>
                {
                    imageUrl ? <img src={imageUrl} alt={(imagePropertyValue as MediaPickerImage).altText} /> : 
                    <img src={this.defaultPageImageSrc} />
                }
            </a>;
        }
        return retElement;
    }
}


```

## Admin Fx npm has been removed

Replace `@omnia/tenantadmin` to `@omnia/workplace`

## ODM Fx npm has been removed

Replace `@omnia/dm` to `@omnia/managementsystem`

## Team Collaboration Fx nuget has been removed

Replace `Omnia.TeamCollaboration.Fx` to `Omnia.Workplace.Fx`

