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

//- initial enterprise property values for creating Teamwork 
var enterpriseProperties = new EnterprisePropertyDictionary();
enterpriseProperties
    .AddPerson(personProperty, new UserIdentity {Uid = "user1@tenant.com" } , new UserIdentity {Uid = "user2@tenant.com" })
    .AddBoolean(booleanProperty, true)
    .AddDateTime(dateTimeProperty, DateTime.UtcNow)
    .AddEnterpriseKeywords(keyWordProperty, Guid.NewGuid())
    .AddTaxonomy(taxonomyProperty, Guid.NewGuid(), Guid.NewGuid())
    .AddNumber(numberProperty, 1)
    .AddTags(tagProperty, new Tag { Name = "TagA" }, new Tag { Name = "TagB" })
    .AddText(textProperty, "Lorem ipsum dolor sit amet")
    .AddRichText(richTextProperty, "Lorem ipsum dolor sit amet");

AppService.WorkWithTeamwork().AttachO365GroupAsync(
    ...
    enterpriseProperties: enterpriseProperties
);
```

## App Context issues

- SharePoint Teamwork is not supported to workwith App Context.
- Setting up Systeam Account might solve the App Context issue, but it is not fully supported. 

> It is recommended to use User Context.

