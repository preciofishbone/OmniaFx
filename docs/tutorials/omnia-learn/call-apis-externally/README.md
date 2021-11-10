# Call Omnia APIs externally

1. Create an Omnia extension  

    [Lean how to create an Omnia extension](https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension#build-your-first-extension-like-a-boss) 

2. Generate a client credentials (a pair of ClientId/ClientSecret) for that extension.

    ```
    omnia secrets add --tenantid {tenantid} --extensionid {extensionid} --name {name}
    ```

    e.g.

    Run the below cmd to generate a secret for an extension on a tenant 

    ```
    omnia secrets add --tenantid 9b0c2314-1a84-471a-8032-b547a66dc89e --extensionid 6bf14e2e-5636-4da8-8e00-5cde9709ecee --name CredentialForUsingInPowerAutomate
    ```

    Then you must save the output information, this is the only time the secret will be show.

    ```json
    {
        "Name": "CredentialForUsingInPowerAutomate",
        "ExtensionId": "6bf14e2e-5636-4da8-8e00-5cde9709ecee", //ClientId
        "Value": "ysCKgSZ7CtIy6m6iSws6F3nOt9yPMQTi", //ClientSecret
        "CreatedBy": "",
        "CreatedAt": "2020-10-05T04:38:34.0119016+00:00"
    }
    ```

    >Tip: For more information, visit [Extension Secret Commands]([../../../cli#omnia-extensions-push](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#extension-secret-commands))


3. Add the client credentials to http request headers to be able to call Omnia APIs.

    | Key | Value |
    | -- | -- |
    | ClientId | extension id |
    | ClientSecret | a secret of the extension |

    > You should first call to your own Omnia extension APIs, then using other fx nuget. So that you can maintain the fx changes.