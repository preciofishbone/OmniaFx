# Create a Page Rollup view

Page Rollup is an out-of-the-box Omnia block that is used to query and render pages.

In this part of tutorial, you will create a new Page Rollup view where you have full control of how to render pages.

# Step 1. Install WCM npm

You need to install WCM npm to integrate with Page Rollup.

Add a dependency in the `package.json` file in your project

```json
"dependencies": {  

    "@omnia/wcm": "4.0.0",
  
}
```

# Step 2. Create a Page Rollup view

Create a new folder called `pagerollupview` under `..\client\`

Inside the newly created folder, run the following cmd:

```
omnia dev new pagerollupview --name HelloOmniaFxPageRollupView --tokens element=hello-omnia-fx-page-rollup-view
```

# Step 3. Test the result

Build and start the project.

Try to select the new view in Page Rollup.