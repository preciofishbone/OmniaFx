# Deploy a Extension

Time to **'Ship it!'**

>Note: Please make sure you've installed [Docker](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/getting-started#docker) and been running it

>Note: The sample will continue what we have done in [Call a Web API](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension/call-web-api) so make sure you've been through it.

# Step 1. Registers a new extension in Omnia Cloud

```
omnia extensions new --name "HelloOmniaFx"  --id extension-id
```

>Tip: You can find the `extension-id` defined in `extension.json` file in the project

>Tip: You only need to do this once for each extension

# Step 2. Publish a new version of extension

We use version `1.0.0` for this completely new sample extension, or you should prepare a [version](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#versioning-reference) to be published


```
omnia dev publish --path C:\your-hello-omnia-fx-path\extension.json --version 1.0.0
```

>Tip: For more publishing options visit [omnia-dev-publish](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#omnia-dev-publish)

# Step 3. Push the new version to Omnia Cloud

Check what intent your tenant has been provisioned with. It could be `dev` or `prod`

```
omnia tenants list
```

We use `dev` intent and version `1.0.0` in this sample

```
omnia extensions push {extension-id}:1.0.0 --intent dev
```

>Tip: For more pushing options visit [omnia-dev-publish](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#omnia-extensions-push)

# Step 4. Deploy the new version to your tenant

Get all existing versions of the extension

```
omnia extensions versions {extension-id}
```

Select which version you want to deploy. We deploy the version `1.0.0` in this sample

```
omnia extensions deploy {extension-id}:1.0.0 --tenantid {tenant-id}
```

# Step 6. Stop serving the extension locally

You need to stop local serving you did before in the [previous sample](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension/create-extension#step-5-serve-the-extension-locally)

Open browser to your Omnia Developing site and run the following cmd in `Omnia Developer Console`


```
serve stop https://localhost:44351
```

# Step 7. Test the result

Enter your name in the text box, and click the `Send` button

Enjoy!