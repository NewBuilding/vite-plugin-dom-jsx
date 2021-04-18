# vite-plugin-dom-jsx 
Provides [dom-jsx](https://github.com/NewBuilding/dom-jsx) support with vite.

### Install via YARN

`yarn add dom-jsx`

### Use in vite config


```js
// vite.config.js
import domJsx from 'vite-plugin-vue-jsx'

export default {
  plugins: [
    domJsx({
      // pragma: string, // jsxFactory function
      // include: RegExp[] // include file
    })
  ]
}
```

