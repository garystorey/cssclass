# cssclass

A small utility to combine css classes written in TypeScript.

## Example

```js

const value = 1;
const classes = cssclass({
    'default' : true,
    'notadded' : (value === 0),
    'added' : (value === 1)
});
console.log(classes);
// "default added"

```

You can see it in action [in this CodeSandbox](https://codesandbox.io/s/cssclass-example-w1og5),

