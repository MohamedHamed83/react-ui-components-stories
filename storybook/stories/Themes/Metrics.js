import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  navBarHeight: 52,

  breakpoints: {
    tablet: {
      width: 625
    }
  }
}

export default metrics
