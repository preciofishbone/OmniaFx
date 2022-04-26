# Utils

## truncate
Remove **truncate** function in **WorkPlaceUtils** from **"@omnia/workplace"** module

```ts
import { WorkPlaceUtils } from "@omnia/workplace";

// Removed from 7.0
WorkPlaceUtils.truncate(/* parameters */);
```

Instead use **Utils** from **"@omnia/fx"** module. Both function has same parameters and typings.

```ts
import { Utils } from "@omnia/fx";

Utils.truncate(/* parameters */);
```

```ts
function truncate(str: string, n: number, useWordBoundary: boolean): string
```