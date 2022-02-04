# reproduction
CRA is looking for `scr/` in `tailwind-styled-component`; throws fail on `npm start` in console but still works. o.0

1. `npm install`
2. `npm start`

```bash
WARNING in ./node_modules/tailwind-styled-components/dist/tailwind.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/Users/worker/development/REPRODUCTIONS/reproduction-tailwind-styled-component/node_modules/tailwind-styled-components/src/tailwind.tsx' file: Error: ENOENT: no such file or directory, open '/Users/worker/development/REPRODUCTIONS/reproduction-tailwind-styled-component/node_modules/tailwind-styled-components/src/tailwind.tsx'
 @ ./node_modules/tailwind-styled-components/dist/index.js 14:35-56
 @ ./src/App.tsx 7:0-44 9:19-24
 @ ./src/index.tsx 7:0-24 11:33-36
```