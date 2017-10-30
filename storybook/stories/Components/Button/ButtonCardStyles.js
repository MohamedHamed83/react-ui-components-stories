import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Colors.vfRed
  },
  textPrimary: {
    color: Colors.vfWhite
  },

  buttonSecondary: {
    backgroundColor: Colors.vfSteel
  },
  textSecondary: {
    color: Colors.vfWhite
  },

  buttonTertiary: {
    backgroundColor: Colors.vfWhite,
    borderColor: Colors.vfMedGrey,
    borderWidth: 1
  },
  textTertiary: {
    color: Colors.vfMineshaft
  },

  buttonDisabled: {
    backgroundColor: Colors.vfIron
  },
  textDisabled: {
    color: Colors.vfWhite
  }
})
