# @o-rango/o-i18n
Provides feedback messages for  user actions with alert messages.


## Install
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-i18n --save
```

```code
lang: html
---
<script src="./node_modules/@o-rango/o-i18n/dist/o-i18n.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-i18n/dist/o-i18n.js"></script>
```

## Usage

Demo with line

```html

					<o-i18n line align="left" type="success">This is an success alert banner</o-i18n>
					<br>
					<o-i18n line type="info">This is an success info alert banner</o-i18n>
					<br>
					<o-i18n line type="warning">This is an warning alert banner</o-i18n>
					<br>
					<o-i18n line type="error" align="center">
             Error
					</o-i18n>
```

Demo simple styles

```html

					<o-i18n  align="left" type="success">This is an success alert banner</o-i18n>
					<br>
					<o-i18n  type="info">This is an success info alert banner</o-i18n>
					<br>
					<o-i18n  type="warning">This is an warning alert banner</o-i18n>
					<br>
					<o-i18n  type="error" align="center">
            Error
					</o-i18n>
```


### Properties

```code
lang: js
---
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;
```


### Customization

```code
lang: css
---
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
