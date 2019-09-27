import { Composer } from '@omnia/tooling/composers';
import { Guid, FontAwesomeIcon } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("bdd74666-4317-4871-bc74-06458d2d40dd"), "BikeComponent")
    .registerWebComponent({
        elementName: "WebAppWithDb-bike",
        entryPoint: "./BikeComponent.jsx",
        typings: ["./IBikeComponent.ts"]
    })
    .withDefinition({
        title: 'Bike',
        icon: new FontAwesomeIcon("fas fa-bicycle")
    })
    .registerOmniaBlock();