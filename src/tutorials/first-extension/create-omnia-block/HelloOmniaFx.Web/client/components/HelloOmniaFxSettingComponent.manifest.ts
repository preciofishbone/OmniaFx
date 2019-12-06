import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("{a guid id}"), "HelloOmniaFxSettingComponent")
    .registerWebComponent({
        elementName: "hello-omnia-fx-setting-component",
        entryPoint: "./HelloOmniaFxSettingComponent.jsx",
        typings: ["./IHelloOmniaFxSettingComponent.ts"]
    });