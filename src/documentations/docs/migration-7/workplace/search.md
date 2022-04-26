# Search

## SearchAdminSettingsSection
Remove **SearchAdminSettingsSection** model from **"@omnia/workplace/models"** module.

```ts
interface SearchAdminSettingsSection {
    title: string;
    icon: IIcon
    elementToRender: string;
    weight: number;
    bladeSize?: BladeSizes;
}
```

Use api hub to register node instead by using **Constants.ux.admin.navigationNodes.search** variable from **"@omnia/workplace"** module. For example:

```ts
import { Constants } from "@omnia/workplace/models";

// get search node parent
const searchNode = Constants.ux.admin.navigationNodes.search;

// use api hub to register children nodes
extendApi(api => api.fx.ux.admin.registration.navigationMenuNode, api => {
    return new Promise((resolve, _) => {

        api.registerNavigationMenuNode([
            {
                // registered node will be child node of search admin node
                parentNodeKey: searchNode.key,
                menuNode: {
                    key: "23ce7826-beb6-4cc3-be8b-fbd3c0aec393",
                    elementToRender: "omnia-wpl-searchconfig",
                    title: "$Localize:OmniaWorkplace.Search.Admin.ConfigTabTitle;",
                    weight: 210,
                    icon: new FontAwesomeIcon("fas fa-cog"),
                    bladeSize: BladeSizes.medium,
                }
            }
        ]);

        resolve();
    });
});

```

## Search result
Remove **BaseSearchResult** model from **"@omnia/workplace/models"** module.

```ts
interface BaseSearchResult {
    title?: string;
    highlightedProperties?: string;
    path?: string;
    contentType?: Enums.SearchContentTypes;
}
```

Use **SearchResultItem** model from **"@omnia/workplace/models"** module instead.

```ts
interface SearchResultItem {
    itemType: Enums.SearchResultItemTypes;
    imageIconSize?: string;
    imageRatioUniqueId?: GuidValue;
}
```

In case you need more details from search result item, refer to **SharePointSearchResultItem** or **MicrosoftSearchResultItem** models from **"@omnia/workplace/models"** module.

```ts
interface SharePointSearchResultItem extends SearchResultItem {
    spWebUrl: string;
    fileType: string;
    siteTitle: string;
    siteDescription: string;
    siteLogo: string;
    lastModifiedTime?: Date;
    created?: Date;
    modifiedBy: string;
    author: string;
    authorOWSUSER: string;
    description: string;
    contentTypeId: string;
    contentType?: Enums.SearchContentTypes;
    modifiedById: string;
    editorOWSUSER: string;
    webTemplate: string;
    customPropertiesResult: { [key: string]: string; };
    path: string;
    serverRedirectedUrl?: string;
}

interface MicrosoftSearchResultItem extends SearchResultItem {
    title: string;
    path: string;
    customPropertiesResult: { [key: string]: string; };
}
```

## Search category
Remove **SearchCategory** model from **"@omnia/workplace/models"** module.

```ts
interface SearchCategory {
    id: string;
    title: MultilingualString;
    resultSource?: string;
    enableQueryRules?: boolean;
    enableWildcardSearch: boolean;
    query: string;
    sortBy?: string;
    sortDirection?: Enums.SortDirection;
    itemTemplateIds: Array<string>;
    listTemplatePropertiesMapping?: { [templateId: string]: DictionaryPropertiesMapping }; 
    targetingFilter?: TargetingFilterProperty;
    multilingualTitle: string;
    providerId?: GuidValue;
    contentSources?: string;
}
```

Use **SearchCategoryBase** model from **"@omnia/workplace/models"** module instead. 

```ts
export interface SearchCategoryBase {
    id: GuidValue;
    providerId: GuidValue;
    title: MultilingualString;
    enableWildcardSearch: boolean;
    itemTemplateIds: Array<string>;
    targetingFilter?: TargetingFilterProperty;
    businessProfileId: GuidValue;
    providerComponentId: GuidValue;
}
```

In case you need more details from search category, refer to **SharePointSearchCategory**, **MicrosoftSearchCategory** or **SharedLinkSearchCategory** models
from **"@omnia/workplace/models"** module.

```ts
interface SharePointSearchCategory extends SearchCategoryBase {
    resultSource: string;
    enableQueryRules: boolean;
    query: string;
    sortBy?: string;
    sortDirection?: Enums.SortDirection;
    listTemplatePropertiesMapping?: { [templateId: string]: DictionaryPropertiesMapping };
}

interface MicrosoftSearchCategory extends SearchCategoryBase {
    resultSource: string;
    contentSources?: Array<string>;
    query: string;
    sortBy?: string;
    sortDirection?: Enums.SortDirection;
    listTemplatePropertiesMapping?: { [templateId: string]: DictionaryPropertiesMapping };
}

interface SharedLinkSearchCategory extends SearchCategoryBase {
    sortBy: string;
}
```