// @flow

import Config from 'react-native-config'
import DebugConfig from '../Config/DebugConfig'

export default function testProps (testId: string) {
  if (Config.ENV === 'sit' || DebugConfig.useTestIds) {
    return { testID: testId, accessibilityLabel: testId }
  }
  return { testID: testId }
}
