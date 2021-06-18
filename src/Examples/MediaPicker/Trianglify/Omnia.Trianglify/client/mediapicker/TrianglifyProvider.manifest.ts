import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';


Composer
    .registerManifest(new Guid("72a2d872-794c-4493-9a69-6a26040b954d"), "TrianglifyProvider")
    .registerWebComponent({
        elementName: "omfx-mediapicker-trianglify-provider",
        entryPoint: "./TrianglifyProvider.jsx"
    })
    .withDefinition({
        title: "TrianglifyProvider", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "TrianglifyProvider", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "TrianglifyProvider", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

/*Registration of the provider to mediapicker*/
Composer.registerManifest("8da26563-7907-44d6-8dff-abea51555ac0", "TrianglifyProvider.Registration")
.registerResources({
    resourcePaths: ["./Registrations/RegistrationLoader.js"]
})
.extendApi(api => api.fx.ux.mediaPicker.registration);


