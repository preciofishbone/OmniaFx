# Utils

Function **registerScrollPaging** is removed from this release. An alternative function is provided to control scrolling behaviour.

```ts
import { ScrollPagingUtils } from "@omnia/fx";

// no longer available from 7.0
ScrollPagingUtils.registerScrollPaging(/*parameters*/)

// use this function instead
ScrollPagingUtils.registerScrollPagingWithDefaultScrollWrapper(/*parameters*/)
```

Compare to deprecated function **registerScrollPaging**. New function **registerScrollPagingWithDefaultScrollWrapper** will not require scroll element selector parameter, also an optional function to handle scroll event listener being destroyed.

```ts
// deprecated function
function registerScrollPaging(
    elem: HTMLElement,
    // require scroll element selector
    scrollElemSelector: string,
    nextPage: () => Promise<boolean>
)

// new function
function registerScrollPagingWithDefaultScrollWrapper(
    elem: HTMLElement,
    nextPage: () => Promise<boolean>,
    // optional unregister handler when scroll event destroyed
    onUnregister?: () => void
)
```