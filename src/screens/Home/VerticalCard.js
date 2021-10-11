import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

const VerticalCard = ({ item, containerStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image source={icons.calories} style={{ width: 30, height: 30 }} />
          <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
            {item.calories}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCard;
