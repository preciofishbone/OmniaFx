# Call a Web API

Time to say **Hello to an Omnia Fx Web API**.

In this part of the tutorial, you will make a client-side component call to a Web API and then display a response message.

>Note: The following example will build upon what we have done in [Create an extension](../create-extension#create-an-extension), so make sure you've been through it.

>[Sample Source Code](../../../../src/tutorials/first-extension/call-web-api)

# Step 1. Create a controller

Create a new folder called `Controllers` under `..\HelloOmniaFx.Web\`.

Inside the newly created folder, create a new item of type `API Controller Class`  with the name `TestController`.

Add a GET method in the controller

```cs
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelloOmniaFx.Web.Controllers;

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
```

# Step 2. Call the Web API

Open the file `HelloOmniaFxComponent.tsx`.  

Inject a HttpClient instance

```tsx
import { ..., useInject, HttpClient } from "@omnia/fx";
...
setup(props) {
  const httpClient = useInject(HttpClient, {
      configPromise: HttpClient.createOmniaServiceRequestConfig("[web-service-id]")
  });
  ...
}
```

>Note: Replace  `[web-service-id]` with the guid defined in registerManifest in the `omnia.service.ts` file.

>Tip: Use the built-in [Quick Actions](https://docs.microsoft.com/en-us/visualstudio/ide/quick-actions?view=vs-2019#to-see-a-light-bulb-or-screwdriver) in Visual Studio to automatically import required modules from omnia fx npm.
>Tip: If Quick Actions can't help you with the needed imports, you can always check the source code of the sample project.


Add new properties and function:

```tsx
const state = reactive({
  name: "",
  responseMsg: "",
  waiting: false,
});

function callWebAPI() {
  state.waiting = true;
  httpClient.get<string>("/api/test?name=" + state.name).then((response) => {
      state.waiting = false;
      state.responseMsg = response.data;
  });
}
```

Update the return render function:

```tsx
return () => (
  <div class={HelloOmniaFxComponentClasses.container}>
      <div class='text-xs-center'>
          <div><v-text-field label="Name" v-model={state.name}></v-text-field></div>
          <div><v-btn flat loading={state.waiting} onClick={callWebAPI}>Send</v-btn></div>
          <div><p>{state.responseMsg}</p></div>
      </div>
  </div>
);
```

# Step 3. Test the result

Build and run the project.

Enter your name in the text box, and click the send button.

Wow, your solution has got a backend up and running!

# Next Part
-   [Create an Admin Journey](../create-admin-journey#create-an-admin-journey)