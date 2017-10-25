import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import Carousel from "./Carousel/Carousel";
import styles from "./stories/storiesStyles";
const {
  selectedDataStyle,
  subTextStyle,
  selectedMinStyle,
  selectedTxtStyle,
  cardItemsize
} = styles;
const width = Dimensions.get('window').width;
const renderControl = () => {
  return (
    <Carousel.Control
      style={{ alignItems: "flex-end" }}
      dot={
        <Text
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "#5bc0de",
            padding: 4
          }}
        >
          □
        </Text>
      }
      activeDot={
        <Text
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "#5bc0de",
            padding: 4
          }}
        >
          ■
        </Text>
      }
    />
  );
};
storiesOf("Welcome", module).add("Home", () => (
  <Welcome showApp={linkTo("Button")} />
));
storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("Button with text", () => (
    <View>
      <Button
        style={styles.containerStyle}
        text="Disabled Hero"
        type="Disabled"
        on="Hero"
      />

      <Button
        style={styles.containerStyle}
        text="Primary Overlay"
        type="Primary"
        on="Overlay"
      />

      <Button
        style={styles.containerStyle}
        text="Loading Overlay"
        type="Loading"
        on="Overlay"
      />

      <Button
        style={styles.containerStyle}
        text="Tertiary Overlay"
        type="Tertiary"
        on="PageNudge"
      />

      <Button
        style={styles.containerStyle}
        text="Secondary Card"
        type="Secondary"
        on="Card"
      />
    </View>
  ));
storiesOf("carousel", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("default Carousel", () => (
    <View style={{ flex: 1 }}>
      <Carousel style={{ height: 238, marginLeft:10, marginRight:10 }}>
        <View style={cardItemsize}>
          <Text style={selectedDataStyle}>100MB</Text>
          <Text style={subTextStyle}>DATA</Text>
        </View>
        <View style={cardItemsize}>
          <Text style={selectedMinStyle}>300 </Text>
          <Text style={subTextStyle}>MIN</Text>
        </View>
        <View style={cardItemsize}>
          <Text style={selectedTxtStyle}>250 </Text>
          <Text style={subTextStyle}>TXT</Text>
        </View>
      </Carousel>
    </View>
  ))
  .add("carousel  without timeout", () => (
    <View>
      <View style={{ flex: 1 }}>
        <Carousel contentContainerStyle={{width}} style={{ height: 238,  marginLeft:10, marginRight:10}} carousel={false}>
          <View style={cardItemsize}>
            <Text style={selectedDataStyle}>100MB</Text>
            <Text style={subTextStyle}>DATA</Text>
          </View>
          <View style={cardItemsize}>
            <Text style={selectedMinStyle}>300 </Text>
            <Text style={subTextStyle}>MIN</Text>
          </View>
          <View style={cardItemsize}>
            <Text style={selectedTxtStyle}>250 </Text>
            <Text style={subTextStyle}>TXT</Text>
          </View>
        </Carousel>
      </View>
    </View>
  ))
  .add("carousel  With timeout loop 1 time", () => (
    <View>
      <View style={{ flex: 1 }}>
        <Carousel contentContainerStyle={{width}} style={{ height: 238, marginLeft:10, marginRight:10 }} cycle={false}>
          <View style={cardItemsize}>
            <Text style={selectedDataStyle}>100MB</Text>
            <Text style={subTextStyle}>DATA</Text>
          </View>
          <View style={cardItemsize}>
            <Text style={selectedMinStyle}>300 </Text>
            <Text style={subTextStyle}>MIN</Text>
          </View>
          <View style={cardItemsize}>
            <Text style={selectedTxtStyle}>250 </Text>
            <Text style={subTextStyle}>TXT</Text>
          </View>
        </Carousel>
      </View>
    </View>
  ))
  .add("carousel  With controls", () => (
    <View style={{ flex: 1 }}>
      <Carousel contentContainerStyle={{width}} style={{ height: 238, width, marginLeft:10, marginRight:10}} control={renderControl()}>
        <View style={{ flexDirection: "row" }}>
          <Text style={selectedDataStyle}>100MB</Text>
          <Text style={subTextStyle}>DATA</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={selectedMinStyle}>300 </Text>
          <Text style={subTextStyle}>MIN</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={selectedTxtStyle}>250 </Text>
          <Text style={subTextStyle}>TXT</Text>
        </View>
      </Carousel>
    </View>
  ));
