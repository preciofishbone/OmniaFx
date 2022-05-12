# Introduction

This folder contains different samples for using the script block to implement all kinds of cool little snippets of functionality. It's a pretty powerful tool - you can use Vue or vanilla JavaScript for your code, and Omnia exposes readymade clients for both the Graph API and SharePoint's REST API. These respect the permissions you have currently given to your Omnia deployment.

# Installation

Each sample will have its own installation instructions, but generally speaking it goes somewhat like this:

1. Create a script block in Omnia
2. Paste HTML and JS from the files (JavaScript is in a file ending in .ts because this repository .gitignores .js files)
3. Disable "show in iFrame" in script block's settings

# Local development

If you want to iterate over functionality quickly, you can serve CSS and JavaScript from VS Code using Live Server extension and just refresh the Omnia page you have the script block on to see the latest changes. Here's how to do that:

1. Configure Live Server in VS Code
2. Create an index.html file (that or similar file seems to be required to make Live Server work)
3. Create a local CSS File and import it into the Script Block's CSS -section like this: 
```
@import "https://localhost:5500/myStyles.css";
```
4. Create a local JavaScript file and import it into the Script Block's JavaScript -section like this:
```
dynamicallyLoadScript("https://localhost:5500/myJavaScript.js");

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    script.type = 'module';
   
    // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    document.body.appendChild(script);  
}
```
5. Refresh your page, and you should see your new changes be reflected in the browser!