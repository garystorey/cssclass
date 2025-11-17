import { defineConfig } from 'rollup'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import { createRequire } from 'module' // Built-in Node module

// Use createRequire to safely load package.json in ESM
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

export default defineConfig([
  // Main build (JS)
  {
    input: ['./src/index.ts'],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      del({ targets: 'dist/*' }), // ✅ Official plugin matches Rollup types
      esbuild(), // Transpile TS
      minify(), // Minify output
      json(), // Allow JSON imports in source files
    ],
  },

  // Type declarations
  {
    input: ['./src/index.ts'],
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
])
