import i18next from 'i18next';

const h = function(nodeName, attributes) {
  return {
    vtag: nodeName,
    vchildren: [],
    vattrs: attributes,
    vname: 'test',
    ishost: false
  };
}

export default class OI18n {
  i18n;

  constructor(componentName, languages) {
    this.i18n = i18next;
    i18next.init({
      fallbackLng: 'en_US',
      debug: true
    }, () => { });
    for (let i in languages) {
      i18next.addResourceBundle(i, componentName, languages[i]);
    }
  }

  t(key: string, interpolations?: object): string {
    return this.i18n.t(key, interpolations);
  }

  html(key: string, interpolations?: object): JSX.Element {
    let prop = this.i18n.t(key, interpolations);
    return (<span innerHTML={prop}></span>);
  }
}
