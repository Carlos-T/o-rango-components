# @o-rango/o-i18n
Provides feedback messages for  user actions with alert messages.

[![npm version](https://badge.fury.io/js/%40o-rango%2Fo-i18n.svg)](https://badge.fury.io/js/%40o-rango%2Fo-i18n)

[![Edit o-i18n codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n7m2y31n44)

## Demo
![](./docs/o-i18n_demo.gif)

## Get Started 
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-i18n --save
```
or
```html
<script src="./node_modules/@o-rango/o-i18n/dist/o-i18n.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-i18n/dist/o-i18n.js"></script>
```

### Usage example 

Default Alert

```html
  // Default Alert
  <o-i18n  align="center" type="default">This is an default alert banner !!!!</o-i18n>
  // Success Alert aligned left
  <o-i18n align="left" type="success">This is an success alert banner</o-i18n>
  // Alert using slots 
  <o-i18n type="error" align="center">
          <div slot="start"> Start</div>
          This is an error alert banner
          <div slot="end">X</div>
  </o-i18n>
```


Alert with Line

```html
  // Success Alert aligned left
  <o-i18n line align="left" type="success">This is an success alert banner</o-i18n>
  // Alert using slots 
  <o-i18n line type="error" align="center">
          <div slot="start"> Start</div>
          This is an error alert banner
          <div slot="end">X</div>
  </o-i18n>
```



Properties

```js
//o-content-alert
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;

```


### Customization 

```css
 /* Generic Colors variables*/
 --o-i18n-default: #FAFBFC;
 --o-i18n-error : #DE350B;
 --o-i18n-warning:#FFC400;
 --o-i18n-info:  #0065FF;
 --o-i18n-success:#36B37E;

 /* Size Style variables  & Font Style variables */
 --o-i18n-height : 3.5em;
 --o-i18n-font-size :14px;
 --o-i18n-font-weight : 600;
 --o-i18n-font-family : 'San Francisco', -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
 --o-i18n-font-color-light : #FFFFFF;
 --o-i18n-font-color-dark : #091E42;

```
