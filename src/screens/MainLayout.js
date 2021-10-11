import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

const MainLayout = ({ drawerAnimatedStyle }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...drawerAnimatedStyle,
        backgroundColor: "white",
      }}
    >
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
