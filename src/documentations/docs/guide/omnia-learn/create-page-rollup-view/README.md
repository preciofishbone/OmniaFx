# Create a Page Rollup view

Page Rollup is an out-of-the-box Omnia block that query and render pages.

In this part of tutorial, you will create a custom Page Rollup view to render pages.

# Step 1. Install WCM npm

You need to install WCM npm to integrate with Page Rollup.

Run the following cmd: 
```
omnia dev add wcmfx -v 6.6.0
omnia dev restore -f
```

Or manually add a dependency in the `package.json` file in your project and restore npm

```json
"dependencies": {  

    "@omnia/wcm": "6.6.0",
  
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