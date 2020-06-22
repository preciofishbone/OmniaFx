# Teamwork App

Install `Omnia.TeamCollaboration.Fx` nuget.

```cs
using Omnia.TeamCollaboration.Fx;

//Inject IAppService (Omnia.Fx.Apps.IAppService)
IAppService AppService;

//Then you can

//- Get a Teamwork by SharePoint site url
AppService.WorkWithTeamwork().GetTeamworkAppAsync

//- Attach a SharePoint site to a new Teamwork
AppService.WorkWithTeamwork().AttachO365GroupAsync
AppService.WorkWithTeamwork().AttachSharePointTeamSiteAsync
AppService.WorkWithTeamwork().AttachSharePointCommunicationSiteAsync
AppService.WorkWithTeamwork().AttachYammerGroupAsync
AppService.WorkWithTeamwork().AttachMicrosoftTeamAsync

//- Create a new Teamwork
AppService.WorkWithTeamwork().CreateFacebookWorkplaceGroupAsync
AppService.WorkWithTeamwork().CreateYammerGroupAsync
AppService.WorkWithTeamwork().CreateMicrosoftTeamAsync
AppService.WorkWithTeamwork().CreateO365GroupAsync
AppService.WorkWithTeamwork().CreateSharePointTeamSiteAsync
AppService.WorkWithTeamwork().CreateSharePointCommunicationSiteAsync
```

## App Context issues

- SharePoint Teamwork is not supported to workwith App Context.
- Setting up Systeam Account might solve the App Context issue, but it is not fully supported. 

> It is recommended to use User Context.

