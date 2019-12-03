# Building Your First Extension

Time to **Hello World**.

This is a simple extension that includes a client-side component to display Hello World text

>Tip: Please make sure you've been through [Getting Started](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/getting-started)

>Tip: Please make sure no white space in relevant folder names 

# Step 1. Create a extension

## Install latest templates

```
omnia dev new --install 2.0.0
```

>Tip: You only need to do this once until there is any newer version

## Create a new extension project using template

```
omnia dev new extension --name web=HelloWorld.Web
```

>Tip: The project will be created at the current path running the cmd. If there is no any reason, you should create a new folder and run the cmd inside

# Step 2. Generate appsettings.local.json file

This appsettings.local.json file contains all the information to run your extension locally with intergrating to your cloud tenant

Find your tenant id

```
omnia tenants list
```

Generate appsettings.local.json

```
omnia dev appsettings get --path C:\your-hello-world\extension.json --tenantid {tenantid}
```

>Tip: You may be required to login to Omnia Cloud with a valid account

# Step 3. Create a new Vue based WebComponent

Create a new folder `components` under `..\HelloWorld.Web\client`

Inside the created folder, run the following cmd

```
omnia dev new vuewebcomponent --name HelloWorldComponent --tokens element=hello-world-component
```

# Step 4. Open your project in visual studio 2019

Open the `HelloWorldComponent.tsx` and modify the `render` function 

```
render(h) {
    return (
        <div class={this.HelloWorldComponentClasses.container}>
            Hello World
        </div>
    )
}
```

Build and start the project. 

# Step 5. Serve the extension locally 

Open browser to your Omnia Developing site

>Tip: You could also find the site url by looking at the information in your appsettings.local.json file (e.g. `domain-something.omniacloud.net`)

When the site is loaded, press `Shift + O` then `Shift + C` to open the `Omnia Developer Console`, then input the following cmd to serve your extension

```
serve https://localhost:44351 -hmr disable
```

>Tip: The default port for the project created by template is 44351. Feel free to change the port to a new unique value in your machine if needed.

The browser will be reloaded after serving successfully.

You can verify the serve status by running the following cmd in the `Omnia Developer Console`

```
serve list
```


# Step 6. Test the component

## For testing purpose only, we will make the component automatically render itself as full screen on the browser


Open the `HelloWorldComponent.manifest.ts` and add the load rules

-   this will make the manifest automatically loaded

```
.registerWebComponent({
        elementName: "hello-world-component",
        entryPoint: "./HelloWorldComponent.jsx",
        typings: ["./IHelloWorldComponent.ts"]
    })
.withLoadRules().loadByUrlMatching({startsWith: '/'});
```

Open the `HelloWorldComponent.tsx` and modify the `registerElement` logic at the end of the file 

-   this will make the component automatically injects itself into the document body after the manifest is loaded

```
WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloWorldComponent);
    document.body.appendChild(document.createElement(manifest.elementName));
});
```

Open the `HelloWorldComponent.css.ts` and modify the `container` styles

-   this will make the component has full screen style

```
StyleFlow.define(HelloWorldComponentStyles, {
    container: {
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

Rebuild and start the project, then refresh the browser

Enjoy!