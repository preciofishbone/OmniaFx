import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("6dd905e6-beb1-446e-8a0d-466d7a4f03a8"), "Omnia.Fx.Examples.BasicSharePointFeature")
    .registerService({ description: "Description of Omnia.Fx.Examples.BasicSharePointFeature" })
    .AsWorker();
    
   