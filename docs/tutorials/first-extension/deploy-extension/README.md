# Deploy a Extension

Time to **'Ship it'**!

In this part of tutorial, you will deploy a extension to your tenant

>Note: Please make sure you've installed [Docker](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/getting-started#docker) and been running it

>Note: The following example will continue what we have done in [Call a Web API](../call-web-api) so make sure you've been through it.

# Step 1. Registers a new extension in Omnia Cloud

```
omnia extensions new --name "HelloOmniaFx"  --id extension-id
```

>Tip: You can find the `extension-id` defined in `extension.json` file in the project

>Tip: You only need to do this once for each extension

# Step 2. Publish a new version of extension

In this example, we use version `1.0.0` for a completely new extension

In a basic deployment scenario, you should prepare a [version](../../../cli#versioning-reference) to be published


```
omnia dev publish --path C:\your-hello-omnia-fx-path\extension.json --version 1.0.0
```

>Tip: For more publishing options visit [omnia dev publish](../../../cli#omnia-dev-publish)

# Step 3. Push the new version to Omnia Cloud

Check what intent your tenant has been provisioned with. It could be `dev` or `prod`

```
omnia tenants list
```

We use `dev` intent and version `1.0.0` in this tutorial

```
omnia extensions push {extension-id}:1.0.0 --intent dev
```

>Tip: For more pushing options visit [omnia extensions push](../../../cli#omnia-extensions-push)

# Step 4. Deploy the new version to your tenant

Get all existing versions of the extension

```
omnia extensions versions {extension-id}
```

Select which version you want to deploy. We deploy the version `1.0.0` in this tutorial

```
omnia extensions deploy {extension-id}:1.0.0 --tenantid {tenant-id}
```

# Step 6. Stop serving the extension locally

If you are serving the extension locally in the [previous step](../create-extension#step-5-serve-the-extension-locally) in this tutorial, you will need to stop it first 

Open `Omnia Developer Console` in your Omnia Developing site and run the following cmd

```
serve stop https://localhost:44351
```

# Step 7. Test the result

Enter your name in the text box, and click the `Send` button

Enjoy!
