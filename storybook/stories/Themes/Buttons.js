import Metrics from './Metrics'

const Buttons = {
  buttonContainer:
    Metrics.screenWidth >= Metrics.breakpoints.tablet.width
      ? {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
      : {},

  button:
    Metrics.screenWidth >= Metrics.breakpoints.tablet.width
      ? {
        paddingHorizontal: 60,
        marginVertical: 10,
        marginRight: 20
      }
      : { marginVertical: 10 }
}

export default Buttons
