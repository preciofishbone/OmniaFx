# Create an Omnia block

Time to play around with **Omnia block**

In this part of tutorial, you will create an simple Omnia block.

# Step 1. Install WCM npm

You need to install WCM npm to be able to register an Omnia block.

Add a dependency in the `package.json` file in your project

```json
"dependencies": {  

    "@omnia/wcm": "4.0.0",
  
}
```

Now you need to restore the package you added using the "omnia dev restore" cmd. Open the console to the root of the extension folder and simply run > omnia dev restore

>Tip: To check latest version visit [@omnia/wcm](https://www.npmjs.com/package/@omnia/wcm)

# Step 2. Create a new Omnia block

Create a new folder called `helloomniafxblock` under `..\HelloOmniaFx.Web\client\`

Inside the newly created folder, run the following cmd:

```
omnia dev new omniablock -n HelloOmniaFxBlock -t element="hello-omnia-fx-block"
```

# Step 3. Test the result

Build and start the project.

Try to add the block on to the page and edit its settings.

Enjoy!

# Next Part
-   [Create a Timer Job](../create-timer-job#create-timer-job)