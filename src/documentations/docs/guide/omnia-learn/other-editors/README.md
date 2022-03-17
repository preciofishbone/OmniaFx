# VS Code for Omnia Development

Run the following cmd inside the webapp/worker project folder:

```
omnia dev new vscodesetup
```

By default, VS Code disallow `Manage Automatic Tasks In Folder`, which is also disabled Omnia tasks (i.e. client-side files change detection) . You should ensure to allow it through Command Palette `Ctrl + Shift + P`. You will need to close and reopen VS Code to apply the changes.

You can check at the Terminal panel to know if the Omnia automatic tasks is running.

There are 2 ways to run code:

-   run or debug in VS Code. 
-   run the following cmd inside the project folder

    ```
    omnia dev run
    ```

# Whatever editor for doing only UI work

Run the following cmd inside the webapp project folder:

```
omnia dev run
```

Done.
