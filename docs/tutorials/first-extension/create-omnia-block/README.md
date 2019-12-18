# Create an Omnia block

Time to play around with **Omnia block**

In this part of tutorial, you will update the `Hello Omnia Fx Component` to be an Omnia block and create a block setting.

>Note: The following example will continue what you have done in [Deploy an extension](../deploy-extension#deploy-an-extension) so make sure you've been through it.

>Tip: [Omnia Web Content Management (WCM)]() is an Omnia core extension that control all the Omnia block. In this example, you will add an Omnia block on to an Omnia page. so make sure you know how to do it.

>[Sample Source Code](../../../../src/tutorials/first-extension/create-omnia-block)

# Step 1. Update Hello Omnia Fx Component

You need to **REMOVE** some test code to make the `Hello Omnia Fx Component` **NOT** automatically render itself as full screen on the browser. 

In the `HelloOmniaFxComponent.manifest.ts`

```diff
.registerWebComponent({
    elementName: "hello-omnia-fx-component",
    entryPoint: "./HelloOmniaFxComponent.jsx",
    typings: ["./IHelloOmniaFxComponent.ts"]
})
-   //load rule to load this manifest after page load
-   .withLoadRules()
-   .loadByUrlMatching({ startsWith: '/' });
```

In the `HelloOmniaFxComponent.tsx`

```diff
WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
-   //component injects itself into document body
-   document.body.appendChild(document.createElement(manifest.elementName));
});
```

In the `HelloOmniaFxComponent.css.ts`

```diff
StyleFlow.define(HelloOmniaFxComponentStyles, {
    container: {
-       //Full screen styles
-       position: 'absolute',
-       top: 0,
-       bottom: 0,
-       left: 0,
-       right: 0,
-       background: 'white',
-       color: 'black',
-       zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }
})
```

# Step 2. Install WCM npm

You need to install WCM npm to be able to register an Omnia block.

Add a dependency in the `package.json` file in your project

```json
"dependencies": {  

    "@omnia/wcm": "3.0.2-dev",
  
}
```
Now you need to restore the package you added using the "omnia dev restore" cmd. Open the console to the root of the extension folder and simply run > omnia dev restore

>Tip: To check latest version visit [@omnia/wcm](https://www.npmjs.com/package/@omnia/wcm)

# Step 3. Regsiter a WebComponent as an Omnia block

Open the `HelloOmniaFxComponent.manifest.ts`

```tsx
.registerWebComponent({
    elementName: "hello-omnia-fx-component",
    entryPoint: "./HelloOmniaFxComponent.jsx",
    typings: ["./IHelloOmniaFxComponent.ts"]
})
//component definition
.withDefinition({
    title: "Hello Omnia Block",
    description: "",
    icon: new FontAwesomeIcon("fal fa-smile-wink")
})
//register as Omnia Block
.registerOmniaBlock({
    category: "Hello Omnia Block"
});
```

# Step 4. Test your Omnia block

Start the extension and serve it locally

>Note: Now the component should **NOT** be automatically rendered on the browser.

>Tip: You can revisit how serve extension [here](../create-extension#step-5-serve-the-extension-locally)

Add your block on to the page and test it

# Step 5. Create Omnia block settings component

>Tip: Each Omnia block can have its own data settings and be edited through its own block settings component

Create a data model for the block in `..\HelloOmniaFx.Web\client\models\HelloOmniaFxBlockData.ts`

```ts
import { BlockDataWithSettingsAndData } from '@omnia/wcm/models'

//For any settings that set through the block component, put it here
export interface HelloOmniaFxBlockDataData {

}

//For any settings that set through the block settings component, put it here
//All the settings here will have the inheritance rule follow the wcm concept.
export interface HelloOmniaFxBlockDataSettings {
    header: string
} 

export interface HelloOmniaFxBlockData extends BlockDataWithSettingsAndData<HelloOmniaFxBlockDataData, HelloOmniaFxBlockDataSettings> {
}
```

Inside the folder `..\HelloOmniaFx.Web\client\components` run the following cmd to create a new component

```
omnia dev new vuewebcomponent --name HelloOmniaFxSettingComponent --tokens element=hello-omnia-fx-setting-component
```

Open the `HelloOmniaFxSettingComponent.tsx`

Add a new @Prop

```tsx
@Prop() settingsKey: string;
```

Inject a SettingsService instace

```tsx
@Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<HelloOmniaFxBlockData>;
```

Update the `created` function to get the settings data

```tsx
private blockData: HelloOmniaFxBlockData = {
    data: {},
    settings: {
        header: ''
    }
};

created() {
    this.settingsService.getValue(this.settingsKey).then((blockData) => {
        if (blockData) {
            this.blockData = blockData;
        }
    })
}
```

Add a new function to handle settings changed event

```tsx
onSettingChanged() {
    this.settingsService.setValue(this.settingsKey, this.blockData);
}
```

Update the `render` function to render a text field to edit the settings

```tsx
render(h) {
    return (
        <div class={this.HelloOmniaFxSettingComponentClasses.container}>
            <v-text-field name="Header" v-model={this.blockData.settings.header} onChange={this.onSettingChanged}  />
        </div>
    )
}
```

# Step 6. Update Omnia block to read its settings

Open the `HelloOmniaFxComponent.tsx`

Add a new @Prop

```tsx
@Prop() settingsKey: string;
```

Inject a SettingsService instace

```tsx
@Inject<SettingsServiceConstructor>(SettingsService) private settingsService: SettingsService<HelloOmniaFxBlockData>;
```

Inject a SubscriptionHandler instance

```tsx
@Inject(SubscriptionHandler) subscriptionHandler: SubscriptionHandler;
```

Update the `created` function

```tsx
private blockData: HelloOmniaFxBlockData = {
    data: {},
    settings: {
        header: ''
    }
};

created() {
    //Get the settings data
    this.settingsService.getValue(this.settingsKey).then((blockData) => {
        if (blockData) {
            this.blockData = blockData;
        }
    })

    //Register the settings component
    this.settingsService.suggestKeyRenderer(this.settingsKey, "hello-omnia-fx-setting-component");

    //Subscribe to the settings data changed event to be able to re-render with the latest settings
    this.subscriptionHandler.add(
        this.settingsService.onKeyValueUpdated(this.settingsKey)
            .subscribe((blockData) => {
                this.blockData = blockData;
            })
    );
}
```

>Tip: the `hello-omnia-fx-setting-component` is the element name defined in `HelloOmniaFxSettingComponent.manifest.ts`

Update the `render` function to render the settings

```tsx
render(h) {
    return (
        <div class={this.HelloOmniaFxComponentClasses.container}>
            <div class='text-xs-center'>
                
                {/*Render settings data*/}
                <h1>{this.blockData.settings.header}</h1>

                <div><v-text-field label="Name" v-model={this.name}></v-text-field></div>
                <div><v-btn flat loading={this.waiting} onClick={this.callWebAPI}>Send</v-btn></div>
                <div><p>{this.responseMsg}</p></div>
            </div>
        </div>
    )
}
```

# Step 7. Test the result

Build and start the project.

Try to edit the block settings.

Enjoy!
