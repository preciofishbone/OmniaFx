# Journey

Stating from Omnia 7.0, the **JourneyInstance** typing will no longer have **addBlade** function. The existing function **addOrUpdateBlade** has the same functionality but handle updated blade as well.

```ts
interface JourneyInstance {
    addBlade(blade: Blade); // Removed from 7.0
    addOrUpdateBlade(blade: Blade); // Use this instead
}
```

Another change from blade typing is that property **content** will need to be function which returns **JSX.Element** from now on instead of **JSX.Element** object.

```ts
interface Blade {
    content: JSX.Element; // deprecated typing
    content: () => JSX.Element; // new typing
}
```