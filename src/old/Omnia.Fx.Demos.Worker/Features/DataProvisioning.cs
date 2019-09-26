using Microsoft.Extensions.Logging;
using Omnia.Fx.Apps;
using Omnia.Fx.Http;
using Omnia.Fx.NetCore.Features.Attributes;
using Omnia.Fx.NetCore.Features.FeatureProviders;
using Omnia.Fx.Utilities;
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Omnia.Fx.SharePoint.Client;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.SharePoint.Client;
using System.Linq;

namespace Omnia.Fx.Demos.Worker.Features.ProvisionData
{
    [OmniaFeature("3B19822A-D16C-40CB-B6EE-343ADE07D6C8")]
    internal class DataProvisioningProvider : BaseAppFeatureProvider
    {
        ILogger<DataProvisioningProvider> Logger { get; }
        ISharePointClientContextProvider SharePointClientContextProvider { get; }

        public DataProvisioningProvider(ILogger<DataProvisioningProvider> logger,
            IAppService appService,
            ISharePointClientContextProvider sharePointClientContextProvider
            ) : base(appService)
        {
            Logger = logger;
            SharePointClientContextProvider = sharePointClientContextProvider;
        }

        protected override async Task ActivateAsync()
        {
            var contactListName = "Contact List";
            var taskListName = "Onboarding Tasks";
            var documentListName = "Documents";

            var contacts = new List<string> {
                "Thomas,Mod,admin@adventrix.onmicrosoft.com,112, Admin",
                "David,De Gea,degea@adventrix.onmicrosoft.com,113, Goal Keeper",
                "Luke,Shaw,luke.shaw@advemtrix.onmicrosoft.com,114, Left Back"
                };

            var tasks = new List<string> {
                $"Greeting to everyone;admin@adventrix.onmicrosoft.com; {DateTime.Now.ToString()};{DateTime.Now.AddHours(4).ToString()}"
                };

            var spUrl = AppInstance.Properties.ContextParams.EnsureContextParamStringValue(Omnia.Fx.SharePoint.Constants.Parameters.SPUrl);
            var ctx = SharePointClientContextProvider.CreateClientContext(spUrl);
            var spSite = ctx.Site;

            var contactList = ctx.Web.Lists.GetByTitle(contactListName);
            var taskList = ctx.Web.Lists.GetByTitle(taskListName);
            var documentList = ctx.Web.Lists.GetByTitle(documentListName);
            var documentFolders = documentList.RootFolder.Folders;
            var web = ctx.Web;
            ctx.Load(contactList);
            ctx.Load(taskList);
            ctx.Load(documentList);
            ctx.Load(documentFolders);
            ctx.Load(web);

            await ctx.ExecuteQueryAsync();

            //Add data to contact list
            foreach (var contact in contacts)
            {
                var itemCreation = new ListItemCreationInformation();
                var oContact1 = contactList.AddItem(itemCreation);

                oContact1["First_x0020_Name"] = contact.Split(',')[0];
                oContact1["Last_x0020_Name"] = contact.Split(',')[1];
                oContact1["Email"] = contact.Split(',')[2];
                oContact1["Phone_x0020_number"] = contact.Split(',')[3];
                oContact1["Job_x0020_Title"] = contact.Split(',')[3];
                oContact1.Update();
                await ctx.ExecuteQueryAsync();
            }

            //Add data to task list
            foreach (var task in tasks)
            {
                Microsoft.SharePoint.Client.User user = ctx.Web.EnsureUser(task.Split(';')[1]);
                ctx.Load(user);
                await ctx.ExecuteQueryAsync();

                var toBeAddUser = new FieldUserValue()
                {
                    LookupId = user.Id
                };

                var itemCreation = new ListItemCreationInformation();
                var oTask = taskList.AddItem(itemCreation);

                oTask["Title"] = task.Split(';')[0];
                oTask["Contact"] = toBeAddUser;
                oTask["StartDate"] = task.Split(';')[2];
                oTask["DueDate"] = task.Split(';')[3];
                oTask.Update();
                await ctx.ExecuteQueryAsync();
            }

            /// Documents list
            var srcUrl = spUrl.Substring(0, spUrl.LastIndexOf("/sites"));
            var srcCtx = SharePointClientContextProvider.CreateClientContext($"{srcUrl}/sites/onboarding-source");
            var camlQuery = CamlQuery.CreateAllItemsQuery();
            var srcList = srcCtx.Web.Lists.GetByTitle("Documents");
            var srcItems = srcList.GetItems(camlQuery);
            srcCtx.Load(srcList, l => l.RootFolder, l => l.RootFolder.Folders);
            srcCtx.Load(srcItems, items => items.Include(i => i.File));
            await srcCtx.ExecuteQueryAsync();

            foreach (var folder in srcList.RootFolder.Folders)
            {
                var existedFolder = documentFolders.FirstOrDefault(f => f.Name == folder.Name);
                var folderUrl = "";
                if (existedFolder == null)
                {
                    documentList.EnableFolderCreation = true;
                    documentList.Update();
                    await ctx.ExecuteQueryAsync();

                    ListItemCreationInformation folderCreationInfo = new ListItemCreationInformation();
                    folderCreationInfo.UnderlyingObjectType = FileSystemObjectType.Folder;
                    folderCreationInfo.LeafName = folder.Name;

                    var newItem = documentList.AddItem(folderCreationInfo);
                    newItem["Title"] = folder.Name;
                    newItem.Update();
                    await ctx.ExecuteQueryAsync();

                    ctx.Load(newItem);
                    await ctx.ExecuteQueryAsync();
                    folderUrl = newItem.FieldValues["FileRef"].ToString();
                }
                else
                {
                    folderUrl = existedFolder.ServerRelativeUrl;
                }
                //var srcItem = srcItems.FirstOrDefault(item => item.FieldValues["FileLeafRef"])
                var folderItems = folder.Files;
                srcCtx.Load(folderItems);
                await srcCtx.ExecuteQueryAsync();

                foreach (var file in folderItems)
                {
                    var fileStream = file.OpenBinaryStream();
                    await srcCtx.ExecuteQueryAsync();

                    var fileCreationInfo = new FileCreationInformation();
                    fileCreationInfo.ContentStream = fileStream.Value;
                    fileCreationInfo.Overwrite = true;
                    Uri result = null;
                    if (Uri.TryCreate(new Uri(ctx.Web.Url), folderUrl, out result))
                    {
                        fileCreationInfo.Url = result.ToString() + "/" + file.Name;
                    }
                    Microsoft.SharePoint.Client.File uploadFile = documentList.RootFolder.Files.Add(fileCreationInfo);
                    uploadFile.Update();

                    await ctx.ExecuteQueryAsync();

                    if (file.Title != "" && file.Title != null)
                    {
                        uploadFile.ListItemAllFields["Title"] = file.Title;
                        uploadFile.Update();
                        await ctx.ExecuteQueryAsync();
                    }
                }

            }

        }

        protected override Task DeactivateAsync(string fromVersion)
        {
            //
            //Debug.WriteLine(fromVersion);
            //ExecuteTestCode();
            return Task.CompletedTask;
        }

        protected override async Task UpgradeAsync(string fromVersion)
        {
            //
            //ExecuteTestCode();
            //var response = await GraphApi.GetAsync("v1.0/groups");
            //var content = await response.Content.ReadAsStringAsync();
            //await VersionUtils.UpgradeForSpecificVersionAsync(fromVersion, "0.0.2", () =>
            //{
            //    Debug.WriteLine(fromVersion);
            //    Logger.LogInformation($"Execute upgrade code for version 0.0.2 from version {fromVersion}");
            //    return Task.CompletedTask;
            //});
        }
    }
}
