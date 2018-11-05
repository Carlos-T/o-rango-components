// Hack For CssClassMap
declare type CssClassMap = { [className: string]: boolean };

import { Component, Prop } from '@stencil/core';
import oI18n from '@o-rango/o-i18n';
// import i18next from 'i18next';
import i18n from './i18n';


import '@o-rango/o-button';

@Component({
  tag: 'o-alert',
  styleUrl: 'o-alert.scss',
  shadow: true
})
export class OAlertComponent {
private i18n;

  constructor () {
    this.i18n = new oI18n('oAlert', i18n);
  }

  @Prop() alertId?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean = false;

  render() {

    let trans = this.i18n.t('oAlert:test2', {tag1: '<i>', tag2: '</i>', text: 'this is a text'});

    const types = ['info', 'success', 'error', 'default', 'warning'];

    const cssClassName = types.includes(this.type) && this.line ? `o-alert-line-${this.type}`
      : `o-alert-${this.type}`;
    const typeClasses: CssClassMap = {
      'o-alert': true,
      'o-alert-text-light': types.slice(0, 4).includes(this.type) && !this.line,
      'o-alert-text-dark': types.slice(4, 5).includes(this.type) || this.line,
      ... { [cssClassName]: true }
    }

    const alignClasses: CssClassMap = {
      'wrap': true,
      'o-alert-align-center': this.align === 'center',
      'o-alert-align-left': this.align === 'left',
    }

    return (
      <div id={this.alertId} class={typeClasses} role="alert">
        <slot name="start"></slot>
        <span class={alignClasses}><slot></slot></span>
        <div innerHTML={trans} />
        <slot name="end"></slot>
        <o-button>{this.i18n.t('oAlert:test')}</o-button>
        {/* {this.i18n.html('oAlert:test')} */}
      </div>
    );
  }
}
