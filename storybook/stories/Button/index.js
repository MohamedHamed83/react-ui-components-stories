// @flow

import React from 'react'
import { TouchableHighlight, StyleSheet, View, ActivityIndicator, Platform } from 'react-native'
import styles from './ButtonStyles'
import heroStyles from './ButtonHeroStyles'
import overlayStyles from './ButtonOverlayStyles'
import cardStyles from './ButtonCardStyles'
import pageNudgeStyles from './ButtonPageNudgeStyles'
import { VFRegularText } from '../VodafoneText/VodafoneText'
import { Colors } from '../Themes/'

export type ButtonType = 'Primary' | 'Secondary' | 'Tertiary' | 'Disabled' | 'Loading'
export type OnPageType = 'Overlay' | 'Hero' | 'Card' | 'PageNudge'

export default function Button ({
  type,
  on,
  text,
  style,
  testId,
  onPress,
  useTabletViewPadding
}: {
  type: ButtonType,
  on: OnPageType,
  text: string,
  style?: StyleSheet.styles,
  testId: string,
  onPress: () => void,
  useTabletViewPadding?: boolean
}) {
  let buttonTypeStyle = null
  let textTypeStyle = null
  let disabled = false
  let onTapColor = null

  if (on === 'Hero') {
    if (type === 'Primary') {
      buttonTypeStyle = heroStyles.buttonPrimary
      textTypeStyle = heroStyles.textPrimary
      onTapColor = Colors.vfRedBerry
    } else if (type === 'Secondary') {
      buttonTypeStyle = heroStyles.buttonSecondary
      textTypeStyle = heroStyles.textSecondary
      onTapColor = Colors.vfIron
    } else if (type === 'Tertiary') {
      buttonTypeStyle = heroStyles.buttonTertiary
      textTypeStyle = heroStyles.textTertiary
      onTapColor = Colors.vfBlack
    } else if (type === 'Disabled') {
      buttonTypeStyle = heroStyles.buttonDisabled
      textTypeStyle = heroStyles.textDisabled
      disabled = true
    } else if (type === 'Loading') {
      buttonTypeStyle = heroStyles.buttonPrimary
      textTypeStyle = heroStyles.textPrimary
      onTapColor = Colors.vfRedBerry
      disabled = true
    }
  } else if (on === 'Overlay') {
    if (type === 'Primary') {
      buttonTypeStyle = overlayStyles.buttonPrimary
      textTypeStyle = overlayStyles.textPrimary
      onTapColor = Colors.vfRedBerry
    } else if (type === 'Secondary') {
      buttonTypeStyle = overlayStyles.buttonSecondary
      textTypeStyle = overlayStyles.textSecondary
      onTapColor = Colors.vfIron
    } else if (type === 'Tertiary') {
      buttonTypeStyle = overlayStyles.buttonTertiary
      textTypeStyle = overlayStyles.textTertiary
      onTapColor = Colors.vfPrimaryGrey
    } else if (type === 'Disabled') {
      buttonTypeStyle = overlayStyles.buttonDisabled
      textTypeStyle = overlayStyles.textDisabled
      disabled = true
    } else if (type === 'Loading') {
      buttonTypeStyle = overlayStyles.buttonPrimary
      textTypeStyle = overlayStyles.textPrimary
      onTapColor = Colors.vfRedBerry
      disabled = true
    }
  } else if (on === 'Card') {
    if (type === 'Primary') {
      buttonTypeStyle = cardStyles.buttonPrimary
      textTypeStyle = cardStyles.textPrimary
      onTapColor = Colors.vfRedBerry
    } else if (type === 'Secondary') {
      buttonTypeStyle = cardStyles.buttonSecondary
      textTypeStyle = cardStyles.textSecondary
      onTapColor = Colors.vfMineshaft
    } else if (type === 'Tertiary') {
      buttonTypeStyle = cardStyles.buttonTertiary
      textTypeStyle = cardStyles.textTertiary
      onTapColor = Colors.vfConcrete
    } else if (type === 'Disabled') {
      buttonTypeStyle = cardStyles.buttonDisabled
      textTypeStyle = cardStyles.textDisabled
      disabled = true
    }
  } else if (on === 'PageNudge') {
    if (type === 'Primary') {
      buttonTypeStyle = pageNudgeStyles.buttonPrimary
      textTypeStyle = pageNudgeStyles.textPrimary
      onTapColor = Colors.vfRedBerry
    } else if (type === 'Secondary') {
      buttonTypeStyle = pageNudgeStyles.buttonSecondary
      textTypeStyle = pageNudgeStyles.textSecondary
      onTapColor = Colors.vfIron
    } else if (type === 'Disabled') {
      buttonTypeStyle = pageNudgeStyles.buttonDisabled
      textTypeStyle = pageNudgeStyles.textDisabled
      disabled = true
    }
  }

  const responsiveStyles = useTabletViewPadding ? styles.textTabletView : {}

  return (
    <TouchableHighlight
      style={[styles.button, buttonTypeStyle, responsiveStyles, style]}
      activeOpacity={1}
      underlayColor={onTapColor}
      disabled={disabled}
      onPress={onPress}
      >
      {type === 'Loading'
        ? <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ActivityIndicator animating style={{ height: 100 }} size={Platform.OS === 'ios' ? 'small' : 30} color={Colors.vfWhite} />
        </View>
        : <View>
          <VFRegularText style={[styles.text, textTypeStyle]}>
            {text}
          </VFRegularText>
        </View>}
    </TouchableHighlight>
  )
}

Button.defaultProps = {
  style: null,
  useTabletViewPadding: false
}
