# Tsx

## Render
A significant change from omnia web component and Vue component is that the property **$createElement** is not available in Vue component instead.
It is suggested that the **h** parameter in **render** function need to be removed as well.
Starting from Omnia 7.0, all components written in tsx format will be automatically transform to javascript object "virtual node" injected with **h**.
This means that you do not have to worry about forgetting inject **h** manually.

Below are few example of old render coding style and how to convert them to new render.

Old render function requires **h** parameter written manually in code
```tsx
render(h) {
    return (<div>Hello, world!!!</div>);
}
```

New render should not have any parameters
```tsx
render() {
    return (<div>Hello, world!!!</div>);
}
```

Before you have to provide **h** parameter from **render** function to other functions
```tsx
render(h) {
    return (<div>{this.renderHeading(h)}</div>);
}

renderHeading(h) {
    return (<h1>Welcome to Omnia 7.0</h1>);
}
```

Or have to create **h** manually by using **$createElement** from Vue instance base class
```tsx
render(h) {
    return (<div>{this.renderHeading()}</div>);
}

renderHeading() {
    const h = this.$createElement
    return (<h1>Welcome to Omnia 7.0</h1>);
}
```

From Omnia 7.0, you can write tsx syntax without **h** parameter
```tsx
render() {
    return (<div>{this.renderHeading()}</div>);
}

renderHeading() {
    return (<h1>Welcome to Omnia 7.0</h1>);
}
```

## Dynamic Render
Before when rendering a component with unknown tag name, we usually explicit call **h** or **$createElement**

Using **h** parameter from **render** function
```tsx
render(h) {
    return (<div>{this.renderUnknownComponent(h)}</div>);
}

renderUnknownComponent(h) {
    return h(runtimeComponentTag, {});
}
```

Using **$createElement** from Vue instance base class
```tsx
render(h) {
    return (<div>{this.renderUnknownComponent()}</div>);
}

renderUnknownComponent() {
    const h = this.$createElement;
    return h(runtimeComponentTag, {});
}
```

With **h** and **$createElement** being removed in Omnia 7.0, there will be two approaches for this case

Import **h** variable directly from **@vue/composition-api** module
```tsx
import { h } from "@vue/composition-api";

render() {
    return (<div>{this.renderUnknownComponent()}</div>);
}

renderUnknownComponent() {
    return h(runtimeComponentTag, {});
}
```

Import **useCreateElementByName** variable directly from **@omnia/fx/ux** module. This variable is a wrapper for **h** in **@vue/composition-api** so the result is the same
```tsx
import { useCreateElementByName } from "@omnia/fx/ux";

render() {
    return (<div>{this.renderUnknownComponent()}</div>);
}

renderUnknownComponent() {
    return useCreateElementByName(runtimeComponentTag, {});
}
```