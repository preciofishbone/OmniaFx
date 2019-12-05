import { Composer } from '@omnia/tooling/composers';
import { Guid, FontAwesomeIcon } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("{a guid id}"), "HelloOmniaFxComponent")
    .registerWebComponent({
        elementName: "hello-omnia-fx-component",
        entryPoint: "./HelloOmniaFxComponent.jsx",
        typings: ["./IHelloOmniaFxComponent.ts"]
    })
    //component definition
    .withDefinition({
        title: "Hello Omnia Fx",
        description: "",
        icon: new FontAwesomeIcon("fal fa-smile-wink")
    })
    //register as Omnia Block
    .registerOmniaBlock({
        category: "Hello Omnia Fx"
    });