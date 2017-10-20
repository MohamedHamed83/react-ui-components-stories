// @flow

import React from 'react'
import { Text, TextInput, Platform } from 'react-native'
type Props = {
  style: ?Object,
  children: ?Object,
  ...Object
}

function VFRegularText (props: Props) {
  return (
    <Text {...props} >
      {props.children}
    </Text>
  )
}

function VFRegularTextInput (props: Props) {
  return (
    <TextInput {...props}   />
  )
}

function VFLightText (props: Props) {
  return (
    <Text {...props} >
      {props.children}
    </Text>
  )
}

function VFBoldText (props: Props) {
  return (
    <Text
      {...props}
    >
      {props.children}
    </Text>
  )
}

function VFExtraBoldText (props: Props) {
  return (
    <Text {...props} >
      {props.children}
    </Text>
  )
}

export { VFRegularText, VFRegularTextInput, VFBoldText, VFLightText, VFExtraBoldText }
