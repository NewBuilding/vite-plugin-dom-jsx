const babel = require('@babel/core')


function some(regs, str) {
  for (const reg of regs) {
    if (!(reg instanceof RegExp)) throw new Error('include must be regexp array.')
    if (reg.test(str)) return true;
  }
  return false;
}


function domJsxPlugin(options = {}) {
  let needSourceMap = true
  options = Object.assign({}, {
    pragma: 'h',
    include: [/.\.tsx$/],
  }, options)

  return {
    name: 'vue-jsx',

    config(config) {
      return {
        // only apply esbuild to ts files
        // since we are handling jsx and tsx now
        esbuild: {
          include: /\.ts$/
        },
        define: {
          ...config.define
        }
      }
    },

    transform(code, id, ssr) {
      if (!some(options.include, id)) return;
      if (/\.[jt]sx$/.test(id)) {
        const plugins = [
          [require('@babel/plugin-transform-react-jsx'), {
            pragma: options.pragma
          }]
        ]
        if (id.endsWith('.tsx')) {
          plugins.push([
            require('@babel/plugin-transform-typescript'),
            // @ts-ignore
            {
              isTSX: true,
              allowExtensions: true,
              jsxPragma: 'h'
            }
          ])
        }

        const result = babel.transformSync(code, {
          babelrc: false,
          ast: true,
          plugins,
          sourceMaps: needSourceMap,
          sourceFileName: id,
          configFile: false
        })

        return {
          code: result.code,
          map: result.map
        }
      }
    }

  }
}


module.exports = domJsxPlugin
domJsxPlugin.default = domJsxPlugin