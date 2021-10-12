import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const FilterModalSections = ({ containerStyle, title, children }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        ...containerStyle,
      }}
    >
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {children}
    </View>
  );
};

export default FilterModalSections;
