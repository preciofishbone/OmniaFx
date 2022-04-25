# Ux

## Dialog
Confirm dialog will no longer use **displayMessageMode** property to show dialog in message mode. Use **displayMode** property with **message** value instead.

```ts
interface ConfirmDialogOptions {
    displayMessageMode?: boolean; // Remove from 7.0
    displayMode?: "message" | "confirm"; // Use this instead
}
```
Example
```tsx
this.$confirm.open({
    displayMessageMode: true, // deprecated
    title: this.omniaUxLoc.Common.Errors,
    message: this.wcmAdminLoc.Messages.HaveAnotherEditorCheckoutPage
});

this.$confirm.open({
    displayMode: "message", // use this instead
    title: this.omniaUxLoc.Common.Errors,
    message: this.wcmAdminLoc.Messages.HaveAnotherEditorCheckoutPage
});
```