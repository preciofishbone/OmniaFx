# Deploy an extension

Time to **'Ship it'**!

In this part of tutorial, you will deploy an extension to your tenant

>Note: Please make sure you've installed [Docker](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/getting-started#docker) and been running it

>Note: The following example will continue what you have done in [Call a Web API](../call-web-api#call-a-web-api) so make sure you've been through it.

# Step 1. Registers a new extension in Omnia Cloud

```
omnia extensions new --name "HelloOmniaFx"  --id extension-id
```

>Tip: You can find the `extension-id` defined in `extension.json` file in the project

>Tip: You only need to do this once for each extension

# Step 2. Publish a new version of extension

In this example, use version `1.0.0` for this completely new extension

In a basic deployment scenario, you should prepare a [version](../../../cli#versioning-reference) to be published


```
omnia dev publish --path C:\your-hello-omnia-fx-path\extension.json --version 1.0.0
```

>Tip: For more publishing options visit [omnia dev publish](../../../cli#omnia-dev-publish)

# Step 3. Push a new version to Omnia Cloud

Check what intent your tenant has been provisioned with. It could be `dev` or `prod`

```
omnia tenants list
```

Now you can push the pulished version to Omnia Cloud

```
omnia extensions push {extension-id}:1.0.0 --intent {dev or prod}
```

>Tip: For more pushing options visit [omnia extensions push](../../../cli#omnia-extensions-push)

# Step 4. Deploy a new version to your tenant

Get all available versions of the extension on Omnia Cloud

```
omnia extensions versions {extension-id}
```

Choose which version you want to deploy your tenant

In this example, use version `1.0.0`

```
omnia extensions deploy {extension-id}:1.0.0 --tenantid {tenant-id}
```

# Step 5. Test the result

## If you are serving the extension locally in the [previous step](../create-extension#step-5-serve-the-extension-locally) in this tutorial, you will need to stop it first. 

To stop service, open `Omnia Developer Console` in your Omnia Developing site and run the following cmd:

```
serve --stop https://localhost:44315
```

Now you can test the result.

Enjoy!

# Next Part
-   [Create an Omnia block](../create-omnia-block#create-an-omnia-block)
