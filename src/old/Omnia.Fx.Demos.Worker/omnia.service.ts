import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("6f32b34d-bb62-45b8-90e2-77512f0abb90"), "Omnia.Fx.Demos.Worker")
    .registerService({ description: "Description of Omnia.Fx.Demos.Worker" })
    .AsWorker();
    
   