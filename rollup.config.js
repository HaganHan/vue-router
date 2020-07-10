import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/plugins/vue-router/index.js',
    output: [
      {
        file: 'dist/bundle.min.js',
        format: 'umd',
        name: 'VueRouter'
      }
    ],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      uglify()
    ]
  },
  {
    input: 'src/plugins/vue-router/index.js',
    output: [
      {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'VueRouter'
      }
    ],
    plugins: [
      resolve()
    ]
  }
]
