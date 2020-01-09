import { Composer } from '@omnia/tooling/composers';
import { Guid, FontAwesomeIcon } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("fc868dc3-fba0-4d91-bf6e-0a923ce1f5f6"), "VuetifyExamplesComponent")
    .registerWebComponent({
        elementName: "fxex-vuetify-examples",
        entryPoint: "./VuetifyExamplesComponent.jsx",
        typings: ["./IVuetifyExamplesComponent.ts"]
    })
    .withDefinition({
        description: 'Examples for Vuetify components',
        icon: new FontAwesomeIcon('fas fa-swatchbook'),
        title: 'Vuetify Examples',
    })
    .registerOmniaBlock({
        category: 'Omnia Fx'
    })