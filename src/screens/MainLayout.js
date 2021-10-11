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
import LG from "react-native-linear-gradient";
import BottomTab from "../components/BottomTab";
const MainLayout = ({ drawerAnimatedStyle, navigation }) => {
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue("white");

  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue("white");

  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue("white");

  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue("white");

  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue("white");

  const { dispatch, selectedTab } = useRedux();

  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        // alignItems: "center",
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
              //   borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
          >
            <Image source={icons.menu} style={{ tintColor: COLORS.primary }} />
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
              //   borderWidth: 1,
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
      <View style={{ height: 100, justifyContent: "flex-end" }}>
        <LG
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "white",
          }}
        >
          <BottomTab
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => dispatch(setSelectedTab(constants.screens.home))}
          />
          <BottomTab
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            onPress={() => dispatch(setSelectedTab(constants.screens.search))}
          />
          <BottomTab
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === constants.screens.cart}
            onPress={() => dispatch(setSelectedTab(constants.screens.cart))}
            // onPress={() => setSelectedTab(constants.screens.cart)}
          />
          <BottomTab
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.favourite))
            }
            // onPress={() => setSelectedTab(constants.screens.favourite)}
          />
          <BottomTab
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={setSelectedTab === constants.screens.notification}
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.notification))
            }
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default MainLayout;
