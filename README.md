# cssclass

A small utility to concatonate css class objects into a string.

## Example

```js

const value = 1;
const classes = cssclass({
    'default' : true,
    'notadded' : (value ===0),
    'added' : (value===1)
});
console.log(classes);
// "default added"

```
