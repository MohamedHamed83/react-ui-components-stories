import React from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../Components/CenterView";
import Carousel from "../Components/Carousel/Carousel";
import styles from "./storiesStyles";
import serviceOptions from "./CarouselData";
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

const onCarouselChange = (props, total) => {
  console.log(props + total);
};
const carouselItemOnPress = item => {
  console.log(item);
};
const renderCarouselItem = item => {
  return (
    <TouchableWithoutFeedback
      style={cardItemsize}
      key={item.value}
      onPress={() => carouselItemOnPress(item.value)}
    >
      <View>
        <Text style={selectedDataStyle}>{item.value}</Text>
        <Text style={subTextStyle}>DATA</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const renderCarouselsData = dataList.map(function(item) {
  return (
    <TouchableWithoutFeedback
      style={cardItemsize}
      key={item.value}
      onPress={() => carouselItemOnPress(item.value)}
    >
      <View>
        <Text style={selectedDataStyle}>{item.value}</Text>
        <Text style={subTextStyle}>DATA</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});
const renderCarouselsMin = minList.map(function(item) {
  return (
    <TouchableWithoutFeedback
      style={cardItemsize}
      key={item.value}
      onPress={() => carouselItemOnPress(item.value)}
    >
      <View>
        <Text style={selectedMinStyle}>{item.value}</Text>
        <Text style={subTextStyle}>MIN</Text>
      </View>
    </TouchableWithoutFeedback>
  );
});
const renderCarouselsTxt = txtList.map(function(item) {
  return (
    <TouchableWithoutFeedback
      style={cardItemsize}
      key={item.value}
      onPress={() => carouselItemOnPress(item.value)}
    >
      <View>
        <Text style={selectedTxtStyle}>{item.value}</Text>
        <Text style={subTextStyle}>TXT</Text>
      </View>
    </TouchableWithoutFeedback>
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
          onChange={onCarouselChange}
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
