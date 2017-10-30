import React from "react";
import { View, StyleSheet } from "react-native";
import { primary } from '../../Config/colors'
let sty = {};

export const Divider = ({ style }) => (
  <View style={[sty.container, style && style]} />
);

sty = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: primary
  }
});
