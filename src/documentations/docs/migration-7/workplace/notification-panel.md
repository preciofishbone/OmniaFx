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

### Check a component rendering inside notification panel.
```ts{10,13-15}
import { Inject } from "@omnia/fx";
import { IBlockInstance } from "@omnia/fx/models";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Inject(BlockInstance) private blockInstance: IBlockInstance</* block settings model */>;

    private isInNotificationPanel = false;

    created() {
        if (this.blockInstance.notificationPanel) {
            this.isInNotificationPanel = true;
        }
    }
}
```

### Check a component visible to user.
Before
```ts{67-69}
import { IBlockInstance } from "@omnia/fx/models";
import { Inject, SubscriptionHandler } from "@omnia/fx";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import { Topics as WorkplaceTopics } from '@omnia/workplace';
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Prop() settingsKey: string;

    @Inject(SubscriptionHandler) private subscriptionHandler: SubscriptionHandler;

    private isVisibleInNotificationPanel = false;

    created() {
        this.subscriptionHandler.add(WorkplaceTopics.NotificationPanel
            .controlStatusInNotificationPanel(this.settingsKey)
            .subscribe(this.handleControlVisibleInNotificationPanel));
    }

    private handleControlVisibleInNotificationPanel(msg: ControlStatusInNotificationMsg) {
        this.isVisibleInNotificationPanel = msg.active;
    }
}
```

After changed
```ts{15,22-24}
import { Inject, SubscriptionHandler } from "@omnia/fx";
import { IBlockInstance } from "@omnia/fx/models";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Inject(BlockInstance) private blockInstance: IBlockInstance</* block settings model */>;
    @Inject(SubscriptionHandler) private subscriptionHandler: SubscriptionHandler;

    private isVisibleInNotificationPanel = false;

    created() {
        if (this.blockInstance.notificationPanel) {
            this.isVisibleInNotificationPanel = this.blockInstance.notificationPanel.visibled;

            this.subscriptionHandler.add(this.blockInstance.notificationPanel.onChanged
                .subscribe(this.handleNotificationPanelChanged));
        }
    }

    private handleNotificationPanelChanged() {
        this.isVisibleInNotificationPanel = this.blockInstance.notificationPanel.visibled;
    }
}
```
### Register new items.
Before
```ts{67-69}
import { IBlockInstance } from "@omnia/fx/models";
import { Inject, SubscriptionHandler } from "@omnia/fx";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import { Topics as WorkplaceTopics, NotificationPanelStore } from '@omnia/workplace';
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Prop() settingsKey: string;

    @Inject(SubscriptionHandler) private subscriptionHandler: SubscriptionHandler;
    @Inject(NotificationPanelStore) private notificationPanelStore: NotificationPanelStore;

    private getIdForNotificationHistory(item) {
        return `rss:${item.link}`.toLowerCase();
    }

    private publishNotificationCount(items) {
        if (items) {
            let pageHistoryIds = items.map(this.getIdForNotificationHistory);
            this.notificationPanelStore.actions.getHistory.dispatch(pageHistoryIds).then(entries => {
                var newitem = items.filter(item => !entries.find(entry => entry.objectId === this.getIdForNotificationHistory(item)))
                    .map(item => item.link);

                WorkplaceTopics.NotificationPanel.newDataNotification.publish({
                    id: this.settingsKey,
                    notificationCount: newitem.length
                });
            });
        }
    }
}
```

After changed
```ts
import { Inject } from "@omnia/fx";
import { IBlockInstance } from "@omnia/fx/models";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Inject(BlockInstance) private blockInstance: IBlockInstance</* block settings model */>;

    private getIdForNotificationHistory(item) {
        return `rss:${item.link}`.toLowerCase();
    }

    private registerNewsItems(items) {
        if (items) {
            const pageHistoryIds = items.map(this.getIdForNotificationHistory);
            this.blockInstance.notificationPanel.getHistory(pageHistoryIds).then(entries => {
                const newitem = items.filter(item => !entries.find(entry => entry.objectId === this.getIdForNotificationHistory(item)));

                this.blockInstance.notificationPanel.registerNewItems(newitem.map(this.getIdForNotificationHistory));
            });
        }
    }
}
```

### Check new items already viewed.
```ts{13,15,18}
import { Inject, SubscriptionHandler } from "@omnia/fx";
import { IBlockInstance } from "@omnia/fx/models";
import { BlockInstance, VueComponentBase } from "@omnia/fx/ux";
import Component from "vue-class-component";

@Component
export class YourBlockComponent extends VueComponentBase {
    @Inject(BlockInstance) private blockInstance: IBlockInstance</* block settings model */>;
    @Inject(SubscriptionHandler) private subscriptionHandler: SubscriptionHandler;

    created() {
        if (this.blockInstance.notificationPanel) {
            const viewedNewItem = this.blockInstance.notificationPanel.viewedNewItem;

            this.subscriptionHandler.add(this.blockInstance.notificationPanel.onChanged
                .subscribe(this.handleNotificationPanelChanged));
        }
    }

    private handleNotificationPanelChanged() {
        const viewedNewItem = this.blockInstance.notificationPanel.viewedNewItem;
    }
}
```


