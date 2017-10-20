// @flow

import { Platform } from 'react-native'

const vodafone = {
  light: {
    fontFamily: Platform.OS === 'ios' ? 'Vodafone Lt' : 'Vodafone Lt Regular'
  },
  extraBold: {
    fontFamily: 'Vodafone ExB'
  },
  regular: {
    fontFamily: 'Vodafone Rg'
  },
  bold: {
    fontFamily: Platform.OS === 'ios' ? 'Vodafone Rg' : 'Vodafone Rg Bold',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal'
  }
}

export default {
  vodafone
}
