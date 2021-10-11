import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES } from "../../constants";

const BottomTab = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            height: 50,
          }}
        >
          <Image
            source={icon}
            style={{ width: 20, height: 20, tintColor: COLORS.gray }}
          />
          {isFocused ? (
            <Text
              style={{ color: "grey", ...FONTS.h3, marginLeft: SIZES.base }}
              numberOfLines={1}
            >
              {label}
            </Text>
          ) : null}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default BottomTab;
