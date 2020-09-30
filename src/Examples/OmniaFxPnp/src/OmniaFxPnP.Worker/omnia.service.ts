import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("62143d4d-c68c-459a-9927-2027678e4a90"), "OmniaFxPnP.Worker")
    .registerService({ description: "Description of OmniaFxPnP.Worker" })
    .AsWorker();
    
   