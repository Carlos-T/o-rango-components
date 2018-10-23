webpackJsonp([73],{1015:function(n,e){n.exports="# brace-expansion\n\n[Brace expansion](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html), \nas known from sh/bash, in JavaScript.\n\n[![build status](https://secure.travis-ci.org/juliangruber/brace-expansion.svg)](http://travis-ci.org/juliangruber/brace-expansion)\n[![downloads](https://img.shields.io/npm/dm/brace-expansion.svg)](https://www.npmjs.org/package/brace-expansion)\n[![Greenkeeper badge](https://badges.greenkeeper.io/juliangruber/brace-expansion.svg)](https://greenkeeper.io/)\n\n[![testling badge](https://ci.testling.com/juliangruber/brace-expansion.png)](https://ci.testling.com/juliangruber/brace-expansion)\n\n## Example\n\n```js\nvar expand = require('brace-expansion');\n\nexpand('file-{a,b,c}.jpg')\n// => ['file-a.jpg', 'file-b.jpg', 'file-c.jpg']\n\nexpand('-v{,,}')\n// => ['-v', '-v', '-v']\n\nexpand('file{0..2}.jpg')\n// => ['file0.jpg', 'file1.jpg', 'file2.jpg']\n\nexpand('file-{a..c}.jpg')\n// => ['file-a.jpg', 'file-b.jpg', 'file-c.jpg']\n\nexpand('file{2..0}.jpg')\n// => ['file2.jpg', 'file1.jpg', 'file0.jpg']\n\nexpand('file{0..4..2}.jpg')\n// => ['file0.jpg', 'file2.jpg', 'file4.jpg']\n\nexpand('file-{a..e..2}.jpg')\n// => ['file-a.jpg', 'file-c.jpg', 'file-e.jpg']\n\nexpand('file{00..10..5}.jpg')\n// => ['file00.jpg', 'file05.jpg', 'file10.jpg']\n\nexpand('{{A..C},{a..c}}')\n// => ['A', 'B', 'C', 'a', 'b', 'c']\n\nexpand('ppp{,config,oe{,conf}}')\n// => ['ppp', 'pppconfig', 'pppoe', 'pppoeconf']\n```\n\n## API\n\n```js\nvar expand = require('brace-expansion');\n```\n\n### var expanded = expand(str)\n\nReturn an array of all possible and valid expansions of `str`. If none are\nfound, `[str]` is returned.\n\nValid expansions are:\n\n```js\n/^(.*,)+(.+)?$/\n// {a,b,...}\n```\n\nA comma separated list of options, like `{a,b}` or `{a,{b,c}}` or `{,a,}`.\n\n```js\n/^-?\\d+\\.\\.-?\\d+(\\.\\.-?\\d+)?$/\n// {x..y[..incr]}\n```\n\nA numeric sequence from `x` to `y` inclusive, with optional increment.\nIf `x` or `y` start with a leading `0`, all the numbers will be padded\nto have equal length. Negative numbers and backwards iteration work too.\n\n```js\n/^-?\\d+\\.\\.-?\\d+(\\.\\.-?\\d+)?$/\n// {x..y[..incr]}\n```\n\nAn alphabetic sequence from `x` to `y` inclusive, with optional increment.\n`x` and `y` must be exactly one character, and if given, `incr` must be a\nnumber.\n\nFor compatibility reasons, the string `${` is not eligible for brace expansion.\n\n## Installation\n\nWith [npm](https://npmjs.org) do:\n\n```bash\nnpm install brace-expansion\n```\n\n## Contributors\n\n- [Julian Gruber](https://github.com/juliangruber)\n- [Isaac Z. Schlueter](https://github.com/isaacs)\n\n## Sponsors\n\nThis module is proudly supported by my [Sponsors](https://github.com/juliangruber/sponsors)!\n\nDo you want to support modules like this to improve their quality, stability and weigh in on new features? Then please consider donating to my [Patreon](https://www.patreon.com/juliangruber). Not sure how much of my modules you're using? Try [feross/thanks](https://github.com/feross/thanks)!\n\n## License\n\n(MIT)\n\nCopyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\nof the Software, and to permit persons to whom the Software is furnished to do\nso, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n"},858:function(n,e,i){var t=i(15),a=i(45),o=i(286).PageRenderer;o.__esModule&&(o=o.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:i(1015)}},componentWillMount:function(){},render:function(){return t.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,n.exports=s}});
//# sourceMappingURL=73.c8bd4dc5.chunk.js.map