---
footer: false
---

# Quick Start

Let's begin the journey to become an Omnia Developer.


# Installation

## Visual Studio

Download and install Visual Studio 2022 from your MSDN subscription or company repository.

## .Net Core SDK

- To develop on Omnia 6.7
Download and install .NET Core SDK 5.0.100 from  [https://dotnet.microsoft.com/download/dotnet/5.0](https://dotnet.microsoft.com/download/dotnet/5.0)

- To develop on Omnia 6.8
Download and install .NET Core SDK 6.0.201 from [https://dotnet.microsoft.com/download/dotnet/6.0](https://dotnet.microsoft.com/download/dotnet/6.0)


### Node JS
  
Download and install Node.js from  https://nodejs.org/en/ - Install the LTS version recommended for most users.

---

### Docker

Download and install Docker Desktop from https://www.docker.com/products/docker-desktop.

---

### Omnia Cli

To install the latest version of the Omnia Cli, run the following cmd:
```
dotnet tool install --global Omnia
```

or

```
dotnet tool install --global Omnia --add-source https://api.nuget.org/v3/index.json --ignore-failed-sources
```

Then restart the cmd or powershell session.

To update the Omnia Cli to the latest version, run the following cmd: 
```
dotnet tool update -g omnia
```

For a full commands documentation visit [Omnia Cli](https://github.com/preciofishbone/OmniaFx/tree/master/docs/cli#omnia-cli)