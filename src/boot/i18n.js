// import Vue from 'vue';
// import VueI18n from 'vue-i18n';
// import messages from 'src/i18n';

// Vue.use(VueI18n);

// const i18n = new VueI18n({
//   locale: 'en-us',
//   fallbackLocale: 'en-us',
//   messages,
// });

// export default ({ app }) => {
//   // Set i18n instance on app
//   app.i18n = i18n;
// };

// export { i18n };

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    '../locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
};

export { i18n };
