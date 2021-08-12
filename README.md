# react-vh

**react-vh** normalizes the CSS-unit `vh`. It sets a global CSS-variable with the current `pixel`-number of 1vh based on `window.innerHeight`.

[![NPM](https://img.shields.io/npm/v/react-vh.svg)](https://www.npmjs.com/package/react-vh) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- Works on mobile- and desktop-devices
- Very small (around 1 KB unzipped)
- Written in Typescript

(Mobile-)Browsers implement the `vh`-unit differently. To avoid layout-inconsistencies and janks, this `hook` provides a normalized value for `vh` stored in a [global CSS-variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

---

For a detailed explanation check out this article:
https://css-tricks.com/the-trick-to-viewport-units-on-mobile/#article-header-id-0

---

## PeerDependencies

- react: >= 16.8.0,
- react-dom: >= 16.8.0,

---

## Install

Install all dependencies via `yarn` or `npm`.

```bash
yarn add react-vh react react-dom
```

---

## Usage

Place the hook in a component, the higher in the component-tree the better.

```jsx
import React from "react";
import useVH from "react-vh";

const MyComponent: React.FC = () => {
  useVH();
  return (
    <div>
      <h1>This is a Test!</h1>
    </div>
  );
};

export default MyComponent;
```

Then use it in your CSS by using `calc` and multiply by your desired percent-number. `1vh` is the (optional) fallback.

```css
.example-wrapper-of-100-vh {
  height: calc(var(--vh, 1vh) * 100);
}
.example-wrapper-of-50-vh {
  height: calc(var(--vh, 1vh) * 50);
}
```

Same procedure also works for `vw`:

```css
.example-wrapper-of-100-vw {
  height: calc(var(--vw, 1vw) * 100);
}
.example-wrapper-of-50-vw {
  height: calc(var(--vw, 1vw) * 50);
}
```

### --vh-total

If you want to use the complete viewport-size (browser-bar included), take `--vh-total`, which depends on `window.outerHeight`.

```css
.example-wrapper-of-99-total-viewport-height {
  height: calc(var(--vh-total, 1vh) * 99);
}
```

### maxWidth

If the width of your Layout is limited to a `max-width` and you can also limit the `vw`-value to a value, by passing an object with key `maxWidth` to `useVH`:

```jsx
const MyComponent: React.FC = () => {
  useVH({ maxWidth: 2400 });
  return (
    <div>
      <h1>This is a Test!</h1>
    </div>
  );
};
```

## What it does and how it works

`react-vh` adds two root CSS-variables to the `html`-tag and updates it on `viewport-resize` on desktop- or `orientation-change` on mobile-devices.
It differs mobile and desktop by checking the media-query `pointer: coarse`, which is not supported by [older browsers](https://caniuse.com/css-media-interaction). _Checks like this are not completely reliable, so please report an issue, if you experience bugs._

```html
<html style="--vh:6.67px; --vh-total:6.67px;">
  <head>
    <title>Test</title>
  </head>
  <body></body>
</html>
```

---

## Contributing

Every contribution is very much appreciated.

**If you like `react-vh`, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-vh).**

---

## License

Licensed under the MIT License, Copyright © 2021-present Andreas Faust.

See [LICENSE](LICENSE.md) for more information.
