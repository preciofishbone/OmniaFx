import { Composer } from '@omnia/tooling/composers';
import { ServiceDefinition, WebComponentManifests } from '@omnia/workplace/models';

Composer.registerManifest("14207cfb-f2ea-4569-9041-40fa63ba1f25", 
        "omnia.fx.examples.appprovisioning.steps.introduction")
    .registerWebComponent({
        elementName: "omfx-examples-approvisioning-step-introduction",
        entryPoint: "./IntroductionStep.jsx",
        typings: ["./IIntroductionStep.ts"]
    })

Composer
    .registerManifest("b9921096-0ea9-40b3-a66a-d97406a66e77", "omnia.fx.examples.appprovisioning.steps.registration")
    .registerResources({ resourcePaths: ["./IntroductionStepRegistration.js"] })
    .withLoadRules()
    .loadIfManifestLoaded({
        omniaServiceId: ServiceDefinition.Id.toString(),
        resourceId: WebComponentManifests.TeamCollaborationAppJourney.toString()
    })
    .or()
    .loadIfManifestLoaded({
        omniaServiceId: ServiceDefinition.Id.toString(),
        resourceId: WebComponentManifests.CreateTeamworkBlock.toString()
    })
    .or()
    .loadIfManifestLoaded({
        omniaServiceId: ServiceDefinition.Id.toString(),
        resourceId: WebComponentManifests.CreateTeamworkComponent.toString()
    });