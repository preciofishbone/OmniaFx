import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("62143d4d-c68c-459a-9927-2027678e4a90"), "OmniaFxPlayground.Worker")
    .registerService({ description: "Description of OmniaFxPlayground.Worker" })
    .AsWorker();
    
   