import React from "react";
import { Text, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../Components/CenterView";
import DesignYourPlan from "./designYourPlan";

storiesOf("carousel", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("default Carousel", () => <DesignYourPlan />)
  .add("carousel  without timeout", () => <DesignYourPlan />)
  .add("carousel  With timeout loop 1 time", () => <DesignYourPlan />)
  .add("carousel  With controls", () => <DesignYourPlan />);
