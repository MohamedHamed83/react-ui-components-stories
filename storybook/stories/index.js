import React from "react";
import { View, Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";

storiesOf("Welcome", module).add("Home", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add(" Button with text", () => (
    <View >
      <Button style={styles.containerStyle} text="Disabled Hero" type="Disabled" on="Hero" />

      <Button style={styles.containerStyle} text="Primary Overlay" type="Primary" on="Overlay" />

      <Button style={styles.containerStyle} text="Loading Overlay" type="Loading" on="Overlay" />

      <Button style={styles.containerStyle} text="Tertiary Overlay" type="Tertiary" on="PageNudge" />

      <Button style={styles.containerStyle}text="Secondary Card" type="Secondary" on="Card" />
    </View>
  ));

  const styles={
    containerStyle:{
      marginBottom: 20
    }
  }