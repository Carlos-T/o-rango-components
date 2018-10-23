webpackJsonp([95],{836:function(n,e,r){var s=r(15),t=r(45),o=r(286).PageRenderer;o.__esModule&&(o=o.default);var i=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:r(993)}},componentWillMount:function(){},render:function(){return s.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,n.exports=i},993:function(n,e){n.exports="# universalify\n\n[![Travis branch](https://img.shields.io/travis/RyanZim/universalify/master.svg)](https://travis-ci.org/RyanZim/universalify)\n![Coveralls github branch](https://img.shields.io/coveralls/github/RyanZim/universalify/master.svg)\n![npm](https://img.shields.io/npm/dm/universalify.svg)\n![npm](https://img.shields.io/npm/l/universalify.svg)\n\nMake a callback- or promise-based function support both promises and callbacks.\n\nUses the native promise implementation.\n\n## Installation\n\n```bash\nnpm install universalify\n```\n\n## API\n\n### `universalify.fromCallback(fn)`\n\nTakes a callback-based function to universalify, and returns the universalified  function.\n\nFunction must take a callback as the last parameter that will be called with the signature `(error, result)`. `universalify` does not support calling the callback with more than three arguments, and does not ensure that the callback is only called once.\n\n```js\nfunction callbackFn (n, cb) {\n  setTimeout(() => cb(null, n), 15)\n}\n\nconst fn = universalify.fromCallback(callbackFn)\n\n// Works with Promises:\nfn('Hello World!')\n.then(result => console.log(result)) // -> Hello World!\n.catch(error => console.error(error))\n\n// Works with Callbacks:\nfn('Hi!', (error, result) => {\n  if (error) return console.error(error)\n  console.log(result)\n  // -> Hi!\n})\n```\n\n### `universalify.fromPromise(fn)`\n\nTakes a promise-based function to universalify, and returns the universalified  function.\n\nFunction must return a valid JS promise. `universalify` does not ensure that a valid promise is returned.\n\n```js\nfunction promiseFn (n) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve(n), 15)\n  })\n}\n\nconst fn = universalify.fromPromise(promiseFn)\n\n// Works with Promises:\nfn('Hello World!')\n.then(result => console.log(result)) // -> Hello World!\n.catch(error => console.error(error))\n\n// Works with Callbacks:\nfn('Hi!', (error, result) => {\n  if (error) return console.error(error)\n  console.log(result)\n  // -> Hi!\n})\n```\n\n## License\n\nMIT\n"}});
//# sourceMappingURL=95.875d7c16.chunk.js.map