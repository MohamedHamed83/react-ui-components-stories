import { StyleSheet } from "react-native";

const commonStyle = {
  selectedItem: {
    fontSize: 32
  }
};
export default StyleSheet.create({
  cardItemsize: {
    flex: 2,
    height: 50,
    flexDirection: "column",
    alignItems: "center"
  },
  unselectedItems: {
    fontSize: 28,
    color: "#333333"
  },
  selectedDataStyle: {
    ...commonStyle.selectedItem,
    color: "#e60000"
  },
  subTextStyle: {
    fontSize: 14
  },
  selectedMinStyle: {
    ...commonStyle.selectedItem,
    color: "#fecb00"
  },
  selectedTxtStyle: {
    ...commonStyle.selectedItem,
    color: "#00b0ca"
  }
});
