import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS, SIZES } from "../../constants";
import { FONTS } from "../../srca/constants/theme";
const TwoPointSlider = ({
  values,
  min,
  max,
  postFix,
  prefix,
  onValuesChange,
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.red,
      }}
      trackStyle={{
        height: 10,
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 60,
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30 / 2,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.red,
                ...styles.shadow,
              }}
            />
            <Text
              style={{ ...FONTS.body3, color: COLORS.darkGray, marginTop: 5 }}
            >
              {prefix}
              {e.currentValue}
              {postFix}
            </Text>
          </View>
        );
      }}
    >
      <Text></Text>
    </MultiSlider>
  );
};

export default TwoPointSlider;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
});
