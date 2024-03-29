# Create a Timer Job
So far in this tutorial, you have created a Web App service `HelloOmniaFx.Web` that serves UI resources and APIs.

In this part of tutorial, you will create a Worker service `HelloOmniaFx.Worker` that run a Timer Job.

# Step 1. Create a worker service

Create worker:

```
omnia dev new worker -n HelloOmniaFx.Worker -o C:\your-hello-omnia-fx-path\extension.json
```

Generate appsettings.local.json:

```
omnia dev appsettings get --path C:\your-hello-omnia-fx-path\extension.json --tenantid {tenant-id}
```

# Step 2. Create a Timer Job in worker

Create a new folder called `TimerJobs` under `..\HelloOmniaFx.Worker\`.

Inside the newly created folder, run the following cmd:

```
omnia dev new timerjob --name HelloOmniaFxTimerJob
```

A new .cs file will be created at `..\HelloOmniaFx.Worker\TimerJobs\HelloOmniaFxTimerJob.cs`.

Follow the instruction written in `HelloOmniaFxTimerJob.cs`:

- Update the namespace of the file.

```cs
namespace HelloOmniaFx.Worker.TimerJobs
```

- Add the configuration code in `..\HelloOmniaFx.Worker\Program.cs`.

```cs
hostbuilder.ConfigureServices(serviceCollection => {
    serviceCollection.AddHostedService<HelloOmniaFxTimerJob>();
});
```

# Step 3. Run it 

Build and start the worker. 

Try to debug it.

Enjoy!

# Next Part
-   [Create a feature](../create-feature#create-a-feature)