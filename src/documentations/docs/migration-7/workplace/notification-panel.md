# Notification Panel

## Removed all notification panel topics.

```ts
import { Topics } from '@omnia/workplace';

Topics.NotificationPanel.registerNotificationPanelControl // removed
Topics.NotificationPanel.registerNotificationProvider // removed
Topics.NotificationPanel.newDataNotification // removed
Topics.NotificationPanel.controlStatusInNotificationPanel // removed
Topics.NotificationPanel.controlInNotification // removed
```

## Use notification panel apis in block instance instead.

### Inject block instance inside the block.
```ts
import { IBlockInstance } from "@omnia/fx/models";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Inject(BlockInstance) private blockInstance: IBlockInstance</* block settings model */>;
}
```

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


