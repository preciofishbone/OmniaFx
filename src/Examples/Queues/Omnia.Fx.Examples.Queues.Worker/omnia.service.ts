import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("247ae210-d508-41f7-9560-7cfa8950df69"), "Omnia.Fx.Examples.Queues.Worker")
    .registerService({ description: "Description of Omnia.Fx.Examples.Queues.Worker" })
    .AsWorker();
    
   