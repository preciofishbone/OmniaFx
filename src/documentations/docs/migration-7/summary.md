# Omnia 7 Migration

This article explains how to update an existing Omnia extension from version 6 to 7

| WARNING: 7.0 contains preview features such as ... |
| --- |

# Prerequisite

Run the below cmd to update new Omnia cli

```
dotnet tool update -g omnia
```

Run the below cmd to update all cli templates:

```
omnia dev new --install 7.0.0 --force
```

Run the below cmd to update all fx npm/nuget packages:

>Replace `7.0.x` of each package with the version that running on your tenant. Find those version in Omnia Admin > System > Extensions

- Omnia Fx
```
omnia dev update omniafx -v 7.0.x -p C:\your-extension-path
```

- OmniaWebContentManagement Fx
```
omnia dev update wcmfx -v 7.0.x -p C:\your-extension-path
```

- OmniaWorkplace Fx
```
omnia dev update workplacefx -v 7.0.x -p C:\your-extension-path
```
