import i18next from 'i18next';

class oI18n {
  i18n;

  constructor(componentName, languages) {
    this.i18n = i18next;
    i18next.init({
      fallbackLng: 'en_US',
      debug: true
    }, () => {});
    for(let i in languages) {
      i18next.addResourceBundle(i, componentName, languages[i]);
    }
  }

  t(key: string, interpolations?: object): string {
    return this.i18n.t(key, interpolations);
  }

  // html(key: string, interpolations?: object): string {
  //   return `<span innerHtml=${this.t(key, interpolations)}></span>`;
  // }
}

export default oI18n;
