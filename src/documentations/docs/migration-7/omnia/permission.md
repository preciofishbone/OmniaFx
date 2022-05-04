# Permission was changed as below.

## InternalUsersOnly changed to InternalUsersExceptRestricted.

Before
```ts
import { RoleDefinitions } from "@omnia/fx-models";

RoleDefinitions.InternalUsersOnly  // was removed
```

After changed
```ts
import { RoleDefinitions } from "@omnia/fx-models";

RoleDefinitions.InternalUsersExceptRestricted // use this instead.
```


