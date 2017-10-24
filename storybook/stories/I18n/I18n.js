// @flow

import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/english.json'),
  mi: require('./languages/mi.json'),
  zhHans: require('./languages/zh-hans.json'),
  ko: require('./languages/ko.json'),
  hi: require('./languages/hi.json'),
  nl: require('./languages/nl.json')
}
