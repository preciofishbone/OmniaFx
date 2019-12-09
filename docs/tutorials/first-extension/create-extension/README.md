# Create an extension

Time to say **Hello to Omnia Fx**.

In this part of the tutorial, you will create a simple extension that consists of a client-side component showing `Hello from Omnia Fx`. You will learn how to run and test the code locally.

>Tip: Please make sure you have installed all [prerequisites](../../getting-started#installation).

>Tip: Please make sure there are no white space in the relevant folder names. 

>[Sample Source Code](../../../../src/tutorials/first-extension/create-extension)

# Step 1. Create an extension

## Install the latest templates

```
omnia dev new --install 3.0.0
```

>Tip: You only need to run this command once in your development environment as long as you want to develop for this version. If you need to use another version, you need to run the command for that specific version.

>Tip: For more information about different versions of the templates, please visit [Omnia Cli Templates](https://github.com/preciofishbone/omniaclitemplates)

## Create a new extension project using template

```
omnia dev new extension --name web=HelloOmniaFx.Web
```

>Tip: The project will be created at the current path running the cmd.

# Step 2. Generate appsettings.local.json file

The appsettings.local.json file contains all information you need to run your extension locally and test the code in a specific tenant.

>Note: You need to login to the Omnia Cloud with a valid account. Make sure the tenant you want to generate an app settings file for have dev intent.

Get your `tenant-id`

```
omnia tenants list
```

Generate appsettings.local.json

```
omnia dev appsettings get --path C:\your-hello-omnia-fx-path\extension.json --tenantid {tenant-id}
```

# Step 3. Create a new Vue-based Web Component

Create a new folder called `components` under `..\HelloOmniaFx.Web\client\`.

Inside the newly created folder, run the following cmd:

```
omnia dev new vuewebcomponent --name HelloOmniaFxComponent --tokens element=hello-omnia-fx-component
```

# Step 4. Open your project in visual studio 2019

Open `HelloOmniaFxComponent.tsx` and modify the `render` function 

```tsx
render(h) {
    return (
        <div class={this.HelloOmniaFxComponentClasses.container}>
            Hello from Omnia Fx
        </div>
    )
}
```

Build and run the project. 

# Step 5. Serve the extension locally 

Open a browser and browse to your Omnia Developing tenant.

>Tip: You can find the url to browse to by looking at the information in your appsettings.local.json file (e.g. `domain-something.omniacloud.net`)

When the site is loaded, press `Shift + O` then `Shift + C` to open the `Omnia Developer Console`, then run the following cmd to serve your extension locally:

```
serve https://localhost:44351
```

>Tip: The default port for the project created by the template is 44351. Feel free to change the port to a new unique value on your machine if needed.

The browser will be reloaded after serving successfully.

You can verify the serve status by running the following cmd in the `Omnia Developer Console`:

```
serve list
```

# Step 6. Test the component

## For testing purpose only, you will make the component automatically render itself as full screen on the browser.


Open the `HelloOmniaFxComponent.manifest.ts` and add the load rules:

```tsx
.registerWebComponent({
    elementName: "hello-omnia-fx-component",
    entryPoint: "./HelloOmniaFxComponent.jsx",
    typings: ["./IHelloOmniaFxComponent.ts"]
})
//load rule to load this manifest after page load
.withLoadRules()
.loadByUrlMatching({startsWith: '/'});
```

Open the `HelloOmniaFxComponent.tsx` and modify the `registerElement` logic at the end of the file:

```tsx
WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
    //component injects itself into document body
    document.body.appendChild(document.createElement(manifest.elementName));
});
```

Open the `HelloOmniaFxComponent.css.ts` and modify the `container` styles:

```ts
StyleFlow.define(HelloOmniaFxComponentStyles, {
    container: {
        //Full screen styles
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        color: 'black',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }
})
```

Rebuild and run the project, then refresh the browser.

Cool, you've got your first component in Omnia up and running!

# Next Part
-   [Call a Web API](../call-web-api#call-a-web-api)
