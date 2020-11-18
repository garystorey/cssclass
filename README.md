# cssclass

A small dependency-free utility to combine css classes written in TypeScript.

![Version](https://img.shields.io/github/package-json/v/garystorey/cssclass)
![Size](https://img.shields.io/bundlephobia/min/@garystorey/cssclass)
![License](https://img.shields.io/npm/l/@garystorey/cssclass)

![Leywords](https://img.shields.io/github/package-json/keywords/garystorey/cssclass)

## Installation

You can install either with `npm` or `yarn`:

```
npm install @garystorey/cssclass

yarn add @garystorey/cssclass
```

## Usage

Example in JavaScript:

```js

import cssclass from '@garystorey/cssclass';

const value = 1;
const classes = cssclass({
    'default' : true,
    'notadded' : (value === 0),
    'added' : (value === 1)
});
console.log(classes);
// "default added"

```

Since `cssclass` is written in TypeScript, it includes its own types.

```ts
import {cssclass,CSSClassObject} from '@garystorey/cssclass';

const classObject: CSSClassObject = {
    'default' : true,
    'notadded' : (value === 0),
    'added' : (value === 1)
};

const value: number = 1;
const classes = cssclass(classObject);
console.log(classes);
// "default added"

```
You can see it in action [in this CodeSandbox](https://codesandbox.io/s/cssclass-example-w1og5).

