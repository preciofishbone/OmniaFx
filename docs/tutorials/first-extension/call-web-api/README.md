# Call a Web API

Time to **Hello from Omnia Fx Web API**.

In this part of tutorial, you will make a client-side component call to a Web API then display the response message

>Note: The following example will continue what we have done in [Create an extension](../create-extension#create-an-extension) so make sure you've been through it.

>[Sample Source Code](../../../../src/tutorials/first-extension/call-web-api)

# Step 1. Create a controller

Create a new folder `Controllers` under `..\HelloOmniaFx.Web\`

Inside the created folder, create a new `API Controller - Empty`  with the name `TestController`

Add a GET method in the controller

```cs
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelloOmniaFx.Web.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public string Hello(string name)
        {
            return $"Hello {name}, nice to meet you. I am Omnia Fx Web API";
        }
    }
}
```

# Step 2. Call the Web API

Open the `HelloOmniaFxComponent.tsx`  

## Inject a HttpClient instance

```tsx
@Component
export default class HelloOmniaFxComponent extends Vue implements IWebComponentInstance, IHelloOmniaFxComponent {

    //Inject HttpClient
    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig('web-service-id')
    }) private httpClient: HttpClient;


    ...
}
```

>Note: Replace  `web-service-id` to the guid id defined in `omnia.service.ts` file in the project

>Tip: Use the built-in [Potential Fixes](https://docs.microsoft.com/en-us/visualstudio/ide/quick-actions?view=vs-2019#to-see-a-light-bulb-or-screwdriver) in Visual Studio to automatically import required modules from omnia fx npm


## Add new properties and function

```tsx
private name = '';
private responseMsg = '';
private waiting = false;

callWebAPI() {
    this.waiting = true;
    this.httpClient.get<string>('/api/test?name=' + this.name).then((response) => {
        this.waiting = false;
        this.responseMsg = response.data
    })
}
```

## Update the render function

```tsx
render(h) {
    return (
        <div class={this.HelloOmniaFxComponentClasses.container}>
            <div class='text-xs-center'>
                <div><v-text-field label="Name" v-model={this.name}></v-text-field></div>
                <div><v-btn flat loading={this.waiting} onClick={this.callWebAPI}>Send</v-btn></div>
                <div><p>{this.responseMsg}</p></div>
            </div>
        </div>
    )
}
```

# Step 3. Test the result

Build and start the project.

Enter your name in the text box, and click the send button

Enjoy!

# Next Part
-   [Deploy an extension](../deploy-extension#deploy-an-extension)
