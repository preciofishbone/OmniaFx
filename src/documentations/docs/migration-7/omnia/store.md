# Store was changed as below.

## Removed require id value in constructor.

Before
```ts
import { Store } from '@omnia/fx/stores';
import { InstanceLifetimes } from '@omnia/fx-models';

@Injectable({ onStartup: (storeType) => { 
    Store.register(storeType, InstanceLifetimes.Singelton) 
}})
export class YourStore extends Store {
    constructor() {
        super({ id: "7521b4f2-7620-4bc7-8fc5-9438ace3e5bc" });  // removed id value here.
    }  
}
```

After changed
```ts
import { Store } from '@omnia/fx/stores';
import { InstanceLifetimes } from '@omnia/fx-models';

@Injectable({ onStartup: (storeType) => { 
    Store.register(storeType, InstanceLifetimes.Singelton) 
}})
export class YourStore extends Store {
}
```


