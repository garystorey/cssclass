import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import pkg from './package.json'

export default defineConfig([
  {
    plugins: [del({ targets: 'dist/*' }), nodeResolve(), commonjs(), json(), esbuild(), minify()],

    input: ['./src/index.ts'],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
  {
    plugins: [dts({})],
    input: ['./src/index.ts'],
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
  },
])
