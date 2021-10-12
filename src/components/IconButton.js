import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../constants";
import { COLORS, FONTS, SIZES } from "../../srca/constants/theme";
const IconButton = ({ icon, onPress, iconStyle, containerStyle }) => {
  return (
    <TouchableOpacity style={{ ...containerStyle }} onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
