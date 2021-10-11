import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      <Image source={item.image} style={imageStyle} />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 17, ...FONTS.h5 }}>{item.name}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
          {item.description}
        </Text>

        <Text
          style={{ fontSize: SIZES.base, marginTop: SIZES.base, ...FONTS.h2 }}
        >
          ${item.price}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
