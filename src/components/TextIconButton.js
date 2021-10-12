import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS } from "../../srca/constants/theme";

const TextIconButton = ({
  icon,
  label,
  labelStyle,
  containerStyle,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
    >
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>

      <Image
        source={icon}
        style={{
          width: 15,
          height: 15,
          marginLeft: 5,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default TextIconButton;
