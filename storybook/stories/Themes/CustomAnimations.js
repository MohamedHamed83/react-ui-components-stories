import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const zoomInFade = {
  from: {
    opacity: 0,
    scale: 0.3
  },
  middle: {
    opacity: 0.4
  },
  to: {
    opacity: 1,
    scale: 1
  }
}

export const zoomOutFade = {
  from: {
    opacity: 1,
    scale: 1
  },
  middle: {
    opacity: 0.4,
    scale: 0.3
  },
  to: {
    opacity: 0,
    scale: 0
  }
}

export const slideInRightMenu = {
  from: {
    translateX: width
  },
  to: {
    translateX: 0
  },
  easing: 'ease-in-out-expo'
}

export const slideOutRightMenu = {
  from: {
    translateX: 0
  },
  to: {
    translateX: width
  },
  easing: 'ease-out-cubic'
}

export const slideInUpPlusAddOn = {
  0: {
    translateX: -50,
    translateY: 50,
    scale: 0.1,
    opacity: 0
  },
  0.25: {
    translateX: -45,
    translateY: 45,
    scale: 0.2,
    opacity: 0
  },
  0.5: {
    translateX: -30,
    translateY: 30,
    scale: 0.3,
    opacity: 0
  },
  0.75: {
    translateX: -15,
    translateY: 15,
    scale: 0.5,
    opacity: 0
  },
  1: {
    translateX: 0,
    translateY: 0,
    scale: 1,
    opacity: 1
  }
}

export const slideInDownPlusAddOn = {
  0: {
    translateX: 0,
    translateY: 0,
    scale: 1,
    opacity: 1
  },
  0.25: {
    translateX: -15,
    translateY: 15,
    scale: 0.5,
    opacity: 0
  },
  0.5: {
    translateX: -30,
    translateY: 30,
    scale: 0.3,
    opacity: 0
  },
  0.75: {
    translateX: -45,
    translateY: 45,
    scale: 0.2,
    opacity: 0
  },
  1: {
    translateX: -50,
    translateY: 50,
    scale: 0.1,
    opacity: 0
  }
}

export const customAnimations = {
  rotate180: {
    from: { rotate: '0deg' },
    to: { rotate: '180deg' },
    easing: 'ease-in'
  },

  rotate180Back: {
    from: { rotate: '180deg' },
    to: { rotate: '0deg' },
    easing: 'ease-in'
  },

  rotate180from90: {
    from: { rotate: '90deg' },
    to: { rotate: '270deg' },
    easing: 'ease-in'
  },

  rotate180Backto90: {
    from: { rotate: '270deg' },
    to: { rotate: '90deg' },
    easing: 'ease-in'
  }
}
