import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import sourceMaps from 'rollup-plugin-sourcemaps';
import json from 'rollup-plugin-json';
import resolve from "rollup-plugin-node-resolve";

let namePackage = 'bs-service-invocator';

export default [{
    input: 'src/index.ts',
    output: [
      // UMD build
      {
        name: namePackage,
        file: pkg.browser,
        format: 'umd',
        sourcemap: true
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true
      }),
    ]
  },
  {
    input: 'src/index.ts',
    output: [{
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true
      })
    ]
  }
];
