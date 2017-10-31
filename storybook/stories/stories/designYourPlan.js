import React, { Component } from "react";
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
  cardItemsize,
  unselectedItems
} = styles;

class DesignYourPlan extends Component {
  renderCarouselsData() {
    return dataList.map(function(item) {
      this.renderCarouselItem(item.value, "DATA", unselectedItems);
    });
  }
  renderCarouselsMin() {
    return minList.map(function(item) {
      this.renderCarouselItem(item.value, "MIN", unselectedItems);
    });
  }
  renderCarouselsTxt() {
    return txtList.map(function(item) {
      this.renderCarouselItem(item.value, "TXT", unselectedItems);
    });
  }
  onCarouselChange(props, total) {
    console.log(props + total);
  }
  carouselItemOnPress(item) {
    console.log(item);
  }
  renderCarouselItem(item, type, mainStyle) {
    return (
      <TouchableWithoutFeedback
        key={item}
        style={cardItemsize}
        onPress={() => this.carouselItemOnPress(item)}
      >
        <View style={cardItemsize}>
          <Text style={mainStyle}>{item}</Text>
          <Text style={subTextStyle}>{type}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  renderControl() {
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
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Carousel
          style={{ width: width, height: 80 }}
          cardWidth={100}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {dataList.map(item => {
            return this.renderCarouselItem(item.value, "DATA", unselectedItems);
          })}
        </Carousel>

        <Carousel
          style={{ width: width, height: 80 }}
          cardWidth={100}
          carousel={false}
          cycle={false}
          startIndex={1}
        >
          {minList.map(item => {
            return this.renderCarouselItem(item.value, "MIN", unselectedItems);
          })}
        </Carousel>

        <Carousel
          style={{ width: width, height: 80 }}
          cardWidth={100}
          carousel={false}
          cycle={false}
          startIndex={0}
        >
          {txtList.map(item => {
            return this.renderCarouselItem(item.value, "TXT", unselectedItems);
          })}
        </Carousel>
      </View>
    );
  }
}

export default DesignYourPlan;
