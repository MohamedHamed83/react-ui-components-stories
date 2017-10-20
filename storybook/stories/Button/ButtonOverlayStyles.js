import { StyleSheet } from 'react-native'
import { Colors } from '../Themes/'

export default StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Colors.vfAnotherRed
  },
  textPrimary: {
    color: Colors.vfWhite
  },

  buttonSecondary: {
    backgroundColor: Colors.vfAnotherGrey
  },
  textSecondary: {
    color: Colors.vfMineshaft
  },

  buttonTertiary: {
    backgroundColor: Colors.vfMineshaft,
    borderColor: Colors.vfIron,
    borderWidth: 1
  },
  textTertiary: {
    color: Colors.vfWhite
  },

  buttonDisabled: {
    backgroundColor: Colors.vfSteel
  },
  textDisabled: {
    color: Colors.vfMineshaft
  }
})
