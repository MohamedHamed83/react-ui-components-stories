import Colors from './Colors'

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    cardShadow: {
      width: '100%',
      shadowColor: Colors.vfBlack,
      shadowOpacity: 0.35,
      shadowRadius: 4,
      shadowOffset: {
        height: 2
      },
      elevation: 10
    }
  }
}

export default ApplicationStyles
