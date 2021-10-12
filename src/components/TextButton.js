import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS } from "../../constants";

const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
    >
      <Text style={{ ...FONTS.body3, color: COLORS.white, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
