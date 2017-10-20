import Colors from './Colors'
import Metrics from './Metrics'

const Cards = {
  container: {
    flex: 1,
    backgroundColor: Colors.vfLilyWhite,
    width: '100%',
    paddingHorizontal: 15
  },
  contentContainer: {
    alignItems: 'stretch',
    alignSelf: 'center',
    maxWidth: Metrics.breakpoints.tablet.width,
    backgroundColor: Colors.vfWhite,
    marginTop: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,

    width: '100%',
    shadowColor: Colors.vfBlack,
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: {
      height: 2
    },
    elevation: 10
  },
  contentContainerCollar: {
    maxWidth: Metrics.breakpoints.tablet.width,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.vfWhite,
    marginTop: 15,
    height: 97,
    paddingVertical: 25,
    paddingHorizontal: 21,
    borderColor: Colors.vfSteel,
    borderLeftWidth: 6
  },
  cardInner: {
    maxWidth: Metrics.breakpoints.tablet.width,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.vfWhite,
    marginTop: 15,
    height: 97,
    paddingVertical: 25,
    paddingHorizontal: 21,
    width: '100%'
  },
  cardCollar: {
    borderColor: Colors.vfSteel,
    borderLeftWidth: 6
  },
  cardShadow: {
    shadowColor: Colors.vfBlack,
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: {
      height: 2
    },
    elevation: 10
  },
  simpleText: {
    color: Colors.vfMineshaft,
    fontSize: 16,
    lineHeight: 21
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.vfIron
  },
  chevronContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  chevronIcon: {
    height: 24,
    width: 12
  }
}

export default Cards
