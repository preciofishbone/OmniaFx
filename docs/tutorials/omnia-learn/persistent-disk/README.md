# Persistent Disk

## Registration

To register a persistent disk for your service, add the below code into the `omnia.service.ts` file

```ts

.requestPersistentDisk({
    uniqueId: '...' //generate a unique guid here
})

```

To use this persistent disk for local developing, add the below settings into your appsettings.local.json

```json

//inside OmniaAppSettings node, add
"PersistentDiskResources": {
    //put the same unique guid here
    "...": {
        "Path": "C:\\Whatever\\Path\\Local"
    }
}

```

> You might want to update .gitignore or use a external path outside your git repo so the local files won't be commited to the source code.


## Usage

```cs

//inject the settings
IOptionsMonitor<OmniaAppSettings> OmniaAppSettings;


//then get the persistent disk path
var persistentDiskPath = OmniaAppSettings.CurrentValue.PersistentDiskResources["guid id"].Path;


//********************************************
// You should share a single persistent disk to different features within a service by creating a root folder for each feature instead of registering multiple persistent disks.
//********************************************

//E.g. 
var featureAPersistentDiskPath = Path.Combine(persistentDiskPath, "featureA");

await File.WriteAllBytesAsync(featureAPersistentDiskPath + "doc1.txt", null);
await File.WriteAllBytesAsync(featureAPersistentDiskPath + "doc2.txt", null);

var featureBPersistentDiskPath = Path.Combine(persistentDiskPath, "featureB");

await File.WriteAllTextAsync(featureBPersistentDiskPath + "img1.png", null);
await File.WriteAllTextAsync(featureBPersistentDiskPath + "img2.png", null);


```



