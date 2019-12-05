# Create an Omnia block

Time to play around with **Omnia block**

In this part of tutorial, you will update the `Hello Omnia Fx Component` to be a Omnia block.

>Note: The following example will continue what you have done in [Deploy an extension](../deploy-extension#deploy-an-extension) so make sure you've been through it.

>Tip: In this example, you need to add a Omnia block to Omnia page. For more information visit [Omnia Web Content Management (WCM) - not implemented yet]()

>[Sample Source Code](../../../../src/tutorials/first-extension/create-omnia-block)

# Step 1. Preparation

You need to revert back the `Hello Omnia Fx Component` to **NOT** automatically render itself as full screen on the browser. 

>Tip: You can revisit what you need to revert back [here](../create-extension#step-6-test-the-component)

Start the extension and serve it locally

>Tip: You can revisit how to do it [here](../create-extension#step-5-serve-the-extension-locally)

# Step 2. Install WCM npm

WCM is a Omnia core extension that control all the Omnia block

You need to install WCM npm to be able to register a Omnia block.

To do it, add a dependency to `package.json` in your project

```json
"dependencies": {
    ...

    "@omnia/wcm": "3.0.2-dev",

    ...
  },
```

>Tip: To check latest version visit [@omnia/wcm](https://www.npmjs.com/package/@omnia/wcm)

# Step 3. Regsiter a WebComponent as a Omnia block

Update the `HelloOmniaFxComponent.tsx`

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

# Step 4. Test the result

Build and start the project.

Edit a page, add your `Hello Omnia Block` on to the page, then publish it.

Enjoy!