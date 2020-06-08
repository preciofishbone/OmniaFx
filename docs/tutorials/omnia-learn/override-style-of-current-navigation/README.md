# Override the style of Current Navigation block

Current Navigation block is using the Omnia StyleFlow to define styles. So you can use StyleFlow to override it.

Ensure your extension has been installed `@omnia/wcm` npm.

Create a new folder called `current-nav-style` under `..\client\`.

Add 2 files:

- Style.css.ts

```ts
import { CurrentNavigationBlockStyles } from '@omnia/wcm/models';
import { StyleFlow } from '@omnia/fx/ux';

StyleFlow.define(CurrentNavigationBlockStyles, {
    //There you can define all the overrided styles
    //i.e. apply the background color
    wrapper: {
        'background' : 'red !important'
    }

})

```

- Style.manifest.ts

```ts
import { Composer } from "@omnia/tooling-composers";
import { Guid } from '@omnia/fx/models';
import { WcmService, WcmWebComponentManifests } from '@omnia/wcm/models';

Composer
    .registerManifest(new Guid(a-guid-id), "CustomCurrentNav")
    .registerResources({
        resourcePaths: ['./Style.css.js']
    })
    .withLoadRules().loadIfManifestLoaded({
        omniaServiceId: WcmService.Id.toString(),
        resourceId: WcmWebComponentManifests.PageRenderer.toString()
    });

```