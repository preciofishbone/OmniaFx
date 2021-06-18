import { extendApi } from "@omnia/fx";
import { TrianglifyRegistration } from "./TrianglifyRegistration";

extendApi(api => api.fx.ux.mediaPicker.registration,
    registerApi => {
        return new Promise<void>((resolve, reject) => {
            registerApi.registerProviders([                
                new TrianglifyRegistration()  
            ])
            resolve();
        })
    }
    )
