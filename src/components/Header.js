import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../../constants";

const Header = ({ containerStyle, title, left, right }) => {
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {left}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h3 }}>{title}</Text>
      </View>
      {right}
    </View>
  );
};

export default Header;
