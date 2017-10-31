import React from "react";
import { storiesOf } from "@storybook/react-native";
import Welcome from "../Welcome";

storiesOf("Welcome", module).add("Home", () => (
    <Welcome showApp={linkTo("Button")} />
  ));