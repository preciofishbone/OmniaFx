# Omnia Fx Components

All the fx components has been updated to use a pair of valueBind/onValueChanged instead of model/onModelChanged.

For example

```tsx
<omfx-people-picker 
    valueBind={this.users} 
    onValueChanged={(val)=>{this.users = val}}>
</omfx-people-picker>
```

Vue has reserved some of the special names such as 'model' and 'value'. We had been lived with a hack solution for a long time to support this "Bad Pattern" but its time to stop.

This is a significant breaking change that you will immediately see build errors relating to this after upgrading fx packages. But there could be some unexpected cases that bypass the TypeScript validation, you should try double-checking within the entire source code.