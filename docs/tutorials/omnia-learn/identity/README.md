# Identity (User/Group)

## Class/Model
There are 2 base class/model in Omnia system: **Identity** and **ResolvedIdentity**

- **Identity** is a light model contains only `uid` and `type` for identifying/resolving a user or a group. This is also an input/ouput of people-picker (client-side) so that it is recommended to use this data model for storage.
   
- **ResolvedIdentity** is a full model that could be resolve from an **Identity**.
 

![image](https://user-images.githubusercontent.com/17378364/112411280-3a00dd00-8d4f-11eb-8dae-8286cfc39d97.png)


In server-side code, it is always able to check/cast to a proper derived class from a base. For example

```cs
ResolvedUser currentUser = await this.UserService.GetCurrentUserAsync();
if(currentUser is AzureAdUser azureAdUser) {
    //retrieves azure ad user properties
    azureAdUser.DisplayName;
}
```



--- 
## Services


On server-side, we can use `Omnia.Fx.Users.IUserService` to resolve identity, which can also be done by `import { UserStore } from '@omnia/fx'` on client-side.

If you want more stuff around identity belongs to AzureAd, you can look at `Omnia.Fx.AzureAd.IAzureAdService` or `import { AzureAdStore } from '@omnia/fx'`