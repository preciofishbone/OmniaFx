import { extendApi } from '@omnia/fx';
import { TeamCollaborationAppDefinitionInfo } from '@omnia/workplace/models';

extendApi(api => api.fx.ux.customStep.stepRegistration, api => {
    return new Promise((resolve, _) => {
        api.registerAppProvisioningStepInfo({
            info: {
                id: "3dcbd651-3d01-4574-b7b9-50ed39e0f5a4",
                appDefinitionId: TeamCollaborationAppDefinitionInfo.id,
                title: "Omnia Fx Demos Custom Step",
                isFeature: false,
                elementToRender: "omfx-examples-approvisioning-step-introduction",
                isDefaultStep: false,
                shouldRender: (appTemplate) => {
                    return true;
                }
            },
            weight: 90

        })

        resolve();
    })
})
