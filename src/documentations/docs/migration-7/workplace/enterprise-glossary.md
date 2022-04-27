# Enterprise Glossary

## EnterpriseGlossaryBlade
Change **content** property in **EnterpriseGlossaryBlade** model from **"@omnia/workplace/models"** module.

```ts
interface EnterpriseGlossaryBlade extends Omit<Blade, "content"> {
    content?: JSX.Element; // Deprecated typing
    content?: () => JSX.Element; // New typing
}
```
