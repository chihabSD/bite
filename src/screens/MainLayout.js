import React, { useEffect, useRef, useState } from "react";
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
import { CartTab, Favourite, Home, Search, Notification } from ".";
const MainLayout = ({ drawerAnimatedStyle, navigation }) => {
  const { dispatch, selectedTab } = useRedux();

  const flatListRef = useRef();
  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  //   useEffect(() => {
  //     if (selectedTab == constants.screens.search) {
  //       flatListRef?.current?.scrollToIndex({
  //         index: 1,
  //         animated: false,
  //       });
  //     }
  //     if (selectedTab == constants.screens.cart) {
  //       flatListRef?.current?.scrollToIndex({
  //         index: 2,
  //         animated: false,
  //       });
  //     }
  //     if (selectedTab == constants.screens.favourite) {
  //       flatListRef?.current?.scrollToIndex({
  //         index: 3,
  //         animated: false,
  //       });
  //     }
  //     if (selectedTab == constants.screens.notification) {
  //       flatListRef?.current?.scrollToIndex({
  //         index: 4,
  //         animated: false,
  //       });
  //     }

  //     setSelectedTab(constants.screens.home);
  //   }, [selectedTab]);

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

      {/* {selectedTab == constants.screens.home ? <Home /> : null} */}
      <View style={{ flex: 1 }}>
        <FlatList
          //   ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ height: SIZES.height, width: SIZES.width }}>
                {selectedTab == constants.screens.home && <Home />}
                {selectedTab == constants.screens.search && <Search />}
                {selectedTab == constants.screens.cart && <CartTab />}
                {selectedTab == constants.screens.favourite && <Favourite />}
                {selectedTab == constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
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
          />
          <BottomTab
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() =>
              dispatch(setSelectedTab(constants.screens.favourite))
            }
          />

          <BottomTab
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
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
