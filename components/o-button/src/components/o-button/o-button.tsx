
// Hack For CssClassMap
declare type CssClassMap = { [className: string]: boolean };

import { Component , Prop} from '@stencil/core';
import i18next from 'i18next';

@Component({
  tag: 'o-button',
  styleUrl: 'o-button.scss',
  shadow: true
})


export class OButtonComponent {
  @Prop() size?: string; // lg - md - sm
  @Prop() href?: string;
  @Prop({ reflectToAttr: true }) target?: string = '_blank';
  @Prop() block? : boolean = false;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() rounded?: boolean = false;
  @Prop({ reflectToAttr: true }) disabled = false;
  @Prop({ reflectToAttr: true})  fill?: 'dashed' | 'outline' | 'solid' = 'solid';
  @Prop() test?: string;


  componentDidLoad() {​
    i18next.init({
      fallbackLng: 'en',
      // ns: ['file1', 'file2'],
      // defaultNS: 'file1',
      debug: true,
      resources: {
        en: {
          oButton: {
            'test': 'foo',
            'foo': 'prueba'
          }
        }
      }
    }, (err) => {
      if (err) return console.log('something went wrong loading', err);
      // t('key'); // -> same as i18next.t
    });
  }

  onFocus() {
    console.log('Focus');
  }

  onKeyUp() {
    console.log('KeyUp');
  }

  onBlur() {
    console.log('Blur');
  }

  onClick() {
    console.log('Click');
  }

  render() {

    const TagType = this.href ? 'a' : 'button';
    const attrs = (TagType === 'button') ? { type: this.type } : { href: this.href , target: this.target };

    const cssClassName =  `${this.fill}-${this.type}`;

    const cssClasses : CssClassMap = {
          'block' : this.block,
          'rounded' : this.rounded,
          [cssClassName] : true
    }

    return (
      <TagType
        {...attrs}
        class={cssClasses}
        disabled={this.disabled}
      >
        hola
        {console.log('zxcv', i18next.t('oButton:foo'))}
        {i18next.t('oButton:foo')}
        <slot/>
      </TagType>
    );
  }
}
