# Create a new Action 

Action can be added in Action Container (e.g. Workspace Action Menu or Action Button block). 

Create a new folder called `testaction` under `..\client\`

Inside the newly created folder, run the following cmd:

```
omnia dev new action --name TestAction --tokens element=test-action
```

Then you can follow some instruction with in the created files.

# Advance Action with custom renderer

> In normal scenarios, we would just let the Action Container take care of rendering our action. E.g. Action Button block will render buttons. So that we are done. 

If we need to take over the redering for some special logic. For example, 

- Handle icon badge

  ![image](https://user-images.githubusercontent.com/17378364/141458711-11e897fc-7671-45b2-8c71-d34ee6355052.png)

  ![image](https://user-images.githubusercontent.com/17378364/141459479-6297b036-c1ba-4783-873b-8604f23917bf.png)

- Display a menu instead of a normal button

  ![image](https://user-images.githubusercontent.com/17378364/141464265-f54b05d1-0cb7-424f-869a-183f9d165540.png)

- Or any needs that Omnia Action has not supported yet

Then we can enable custom renderer for our Action 

```ts

//In the action handler .ts file

 onActivated() {    
    //So that the Action Container will render this web element instead.
    this.customRendererElementName = "put-any-web-component-element-here";
}

```

The custom renderer web component must implements interface `IActionHandlerCustomRendererComponent`, For example


```ts


@Component
export class MyActionCustomRendererComponent extends VueComponentBase implements IActionHandlerCustomRendererComponent, IWebComponentInstance {
    //So that the interface ensure to have these 2 Props

    //With this prop, can get action settings
    @Prop() actionHandler: ActionHandlerInstance;

    //With this prop, the component know how to render. 
    //It needs to render differently based on its Action Container (e.g. Action Menu or Action Button). You can see the example of 'Handle icon badge' above.
    //BUT, it's not necessary to handle render for all modes. i.e. we might assume/accept this action should only be used with in Action Button then just go head to render as a button style and ignore the rest.
    @Prop() renderingMode: ActionHandlerRenderingModes; 

}

```