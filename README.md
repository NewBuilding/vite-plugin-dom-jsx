# vite-plugin-dom-jsx 
Provides [ts-dom](https://github.com/Lusito/tsx-dom) support with vite.

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

