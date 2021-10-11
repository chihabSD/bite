import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS, constants, dummyData, icons, SIZES } from "../../constants";
import { Header } from "../components";
// import Header from "../components/Header";
import { useRedux } from "../hooks/useRedux";
import { setSelectedTab } from "../redux/reducers/tab";

const MainLayout = ({ drawerAnimatedStyle, navigation }) => {
  const { dispatch, selectedTab } = useRedux();

  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        ...drawerAnimatedStyle,
        backgroundColor: "white",
      }}
    >
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        left={
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        right={
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              // width: 40,
              // height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
            />
          </TouchableOpacity>
        }
      />
      <View style={{ flex: 1 }}>
        <Text>MainLayout</Text>
      </View>
    </Animated.View>
  );
};

export default MainLayout;
