# Teamwork App

Install `Omnia.Workplace.Fx` nuget.

```cs
using Omnia.Fx.Apps;

//Inject IAppService 
IAppService AppService;

//Then it is able to

//- get a Teamwork by SharePoint site url
AppService.WorkWithTeamwork().GetTeamworkAppAsync

//- create a new Teamwork and attach an existing SharePoint site to it.
AppService.WorkWithTeamwork().AttachO365GroupAsync
AppService.WorkWithTeamwork().AttachSharePointTeamSiteAsync
AppService.WorkWithTeamwork().AttachSharePointCommunicationSiteAsync
AppService.WorkWithTeamwork().AttachYammerGroupAsync
AppService.WorkWithTeamwork().AttachMicrosoftTeamAsync

//- create a new Teamwork 
AppService.WorkWithTeamwork().CreateFacebookWorkplaceGroupAsync
AppService.WorkWithTeamwork().CreateYammerGroupAsync
AppService.WorkWithTeamwork().CreateMicrosoftTeamAsync
AppService.WorkWithTeamwork().CreateO365GroupAsync
AppService.WorkWithTeamwork().CreateSharePointTeamSiteAsync
AppService.WorkWithTeamwork().CreateSharePointCommunicationSiteAsync


//To create a new Teamwork with its default enterprise properties, you can initialize the properties with EnterprisePropertyDictionary. For example:
var enterpriseProperties = new EnterprisePropertyDictionary();
enterpriseProperties
    .AddOrUpdatePerson(personProperty, "user1@tenant.com" , "user2@tenant.com")
    .AddOrUpdateBoolean(booleanProperty, true)
    .AddOrUpdateDateTime(dateTimeProperty, DateTime.UtcNow)
    .AddOrUpdateEnterpriseKeywords(keyWordProperty, Guid.NewGuid())
    .AddOrUpdateTaxonomy(taxonomyProperty, Guid.NewGuid(), Guid.NewGuid())
    .AddOrUpdateNumber(numberProperty, 1)
    .AddOrUpdateTags(tagProperty, new Tag { Name = "TagA" }, new Tag { Name = "TagB" })
    .AddOrUpdateText(textProperty, "Lorem ipsum dolor sit amet")
    .AddOrUpdateRichText(richTextProperty, "<p>Lorem ipsum dolor sit amet</p>");

    //Or use the property internal name directly
    .AddOrUpdatePerson("personPropertyInternalName", "user1@tenant.com", "user2@tenant.com")
    .AddOrUpdateBoolean("booleanPropertyInternalName", true)
    .AddOrUpdateDateTime("dateTimePropertyInternalName", DateTime.UtcNow)
    .AddOrUpdateEnterpriseKeywords("keywordPropertyInternalName", Guid.NewGuid())
    .AddOrUpdateTaxonomy("taxonomyPropertyInternalName", Guid.NewGuid(), Guid.NewGuid())
    .AddOrUpdateNumber("numberPropertyInternalName", 1)
    .AddOrUpdateTags("tagPropertyInternalName", new Tag { Name = "TagA" }, new Tag { Name = "TagB" })
    .AddOrUpdateText("textPropertyInternalName", "Lorem ipsum dolor sit amet")
    .AddOrUpdateRichText("richTextPropertyInternalName", "Lorem ipsum dolor sit amet");

AppService.WorkWithTeamwork().CreateO365GroupAsync(
    enterpriseProperties: enterpriseProperties
)
 
AppService.WorkWithTeamwork().AttachO365GroupAsync(
    enterpriseProperties: enterpriseProperties
);
```

## App Context issues

- It is not supported to create O365 Group for now.

- If your tenant is using System Account mode, make sure that the System Account's user is not used in teamwork's app instance admin. Otherwise, it might cause unexpected issues. 


