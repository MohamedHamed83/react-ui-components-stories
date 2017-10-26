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
import serviceOptions from "./stories/CarouselData";
const { width, height } = Dimensions.get("window");
const dataList = serviceOptions[0].values;
const minList = serviceOptions[1].values;
const txtList = serviceOptions[2].values;
const {
  selectedDataStyle,
  subTextStyle,
  selectedMinStyle,
  selectedTxtStyle,
  cardItemsize
} = styles;

const renderCarouselsData = dataList.map(function(item) {
  return (
    <View style={cardItemsize} key={item.value}>
      <Text style={selectedDataStyle} >{item.value}</Text>
      <Text style={subTextStyle}>DATA</Text>
    </View>
  );
});
const renderCarouselsMin = minList.map(function(item) {
  return (
    <View style={cardItemsize} key={item.value}>
      <Text style={selectedMinStyle} >{item.value}</Text>
      <Text style={subTextStyle}>MIN</Text>
    </View>
  );
});
const renderCarouselsTxt = txtList.map(function(item) {
  return (
    <View style={cardItemsize} key={item.value}>
      <Text style={selectedTxtStyle}>{item.value}</Text>
      <Text style={subTextStyle}>TXT</Text>
    </View>
  );
});
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
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsData}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsMin}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsTxt}
        </Carousel>
    </View>
  ))
  .add("carousel  without timeout", () => (
    <View>
      <View style={{ flex: 1 }}>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsData}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsMin}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsTxt}
        </Carousel>
      </View>
    </View>
  ))
  .add("carousel  With timeout loop 1 time", () => (
    <View>
      <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
      <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsData}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsMin}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsTxt}
        </Carousel>
      </View>
    </View>
  ))
  .add("carousel  With controls", () => (
    <View style={{ flex: 1 }}>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
          control={renderControl()}
        >
          {renderCarouselsData}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={0}
        >
          {renderCarouselsMin}
        </Carousel>
        <Carousel
          style={{
            width: width,
            height: 80,
            paddingLeft: 10,
            paddingRight: 10
          }}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {renderCarouselsTxt}
        </Carousel>
    </View>
  ));
