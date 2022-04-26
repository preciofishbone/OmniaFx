# Page

## PageWithNavigationCreationRequest
Remove **childStructureType** property from **PageWithNavigationCreationRequest** model from **"@omnia/wcm/models"** module.

```ts
interface PageWithNavigationCreationRequest extends PageCreationRequest {
    urlSegment: string;
    position: NavigationPosition;
    childStructureType?: ChildStructureType; // Removed from 7.0
}

interface PageCreationRequest {
    pageData: PageData;
    tenantScope?: boolean;
}
```