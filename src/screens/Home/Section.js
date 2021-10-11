import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const Section = ({ onPress, title, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h2 }}>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{ flex: 1, color: COLORS.red, ...FONTS.body3 }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default Section;
