import { Topics } from "@omnia/tenantadmin";
import { Guid } from '@omnia/fx-models';

Topics.registerAppTemplates.publish(
{
    info: {
        id: new Guid("3dcbd651-3d01-4574-b7b9-50ed39e0f5a4"),
        title: "Omnia Fx Demos Custom Step",
        elementToRender: "omfx-examples-approvisioning-step-introduction",
        appDefinitionId: "",
        isFeature: false
    },
    weight: 90
})