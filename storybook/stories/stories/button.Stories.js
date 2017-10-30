import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Button from "../Components/Button";
import CenterView from "../Components/CenterView";
import styles from "./storiesStyles";

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Disabled Button", () => (
    <View>
      <Button
        style={styles.containerStyle}
        text="Disabled Hero"
        type="Disabled"
        on="Hero"
      />
    </View>
  ))
  .add("Primary Overlay Button", () => (
    <View>
      <Button
        style={styles.containerStyle}
        text="Primary Overlay"
        type="Primary"
        on="Overlay"
      />
    </View>
  ))
  .add("Loading Overlay Button", () => (
    <View>
      <Button
        style={styles.containerStyle}
        text="Loading Overlay"
        type="Loading"
        on="Overlay"
      />
    </View>
  ))
  .add("Tertiary Overlay Button", () => (
    <View>
      <Button
        style={styles.containerStyle}
        text="Tertiary Overlay"
        type="Tertiary"
        on="PageNudge"
      />
    </View>
  ))
  .add("Secondary Card Button", () => (
    <View>
      <Button
        style={styles.containerStyle}
        text="Secondary Card"
        type="Secondary"
        on="Card"
      />
    </View>
  ));
