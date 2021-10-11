import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from "../../constants";
import { MainLayout } from "../screens";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor: "blue",
      }}
    >
      <Image
        source={icon}
        style={{ height: 20, width: 20, tintColor: COLORS.white }}
      />
      <Text style={{ color: COLORS.white, marginLeft: 15, ...FONTS.h3 }}>
        {/* {dummyData.myProfile?.name} */}
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const CustomDrawerContnet = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: SIZES.radius,
            }}
            onPress={() => console.warn("profile")}
          >
            <Image
              source={dummyData.myProfile?.profile_image}
              style={{ height: 50, width: 50, borderRadius: SIZES.radius }}
            />
            <View style={{ marginLeft: SIZES.radius }}>
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                {/* {dummyData.myProfile?.name} */}
                Chihabeddine ahmed
              </Text>
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                View your profile
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <CustomDrawerItem
              label={constants.screens.home}
              icon={icons.home}
            />
            <CustomDrawerItem
              label={constants.screens.my_wallet}
              icon={icons.wallet}
            />
            <CustomDrawerItem
              label={constants.screens.notification}
              icon={icons.notification}
            />
            <CustomDrawerItem
              label={constants.screens.favourite}
              icon={icons.favourite}
            />
            <View
              style={{
                height: 1,
                marginVertical: SIZES.radius,
                marginLeft: SIZES.radius,
                backgroundColor: COLORS.lightGray1,
              }}
            ></View>
            <CustomDrawerItem
              label="Track your order items"
              icon={icons.location}
            />
            <CustomDrawerItem label="Coupons" icon={icons.coupon} />
            <CustomDrawerItem label="Settings" icon={icons.setting} />
            <CustomDrawerItem label="Inviate a friend" icon={icons.profile} />
            <CustomDrawerItem label="Help center" icon={icons.help} />

            <View
              style={{
                marginTop: 100,
              }}
            >
              <CustomDrawerItem label="Logout" icon={icons.logout} />
            </View>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const CustomDrawer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.red }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        drawerContent={(props) => {
          return <CustomDrawerContnet navigation={props.navigation} />;
        }}
        initialRouteName="MainLayout"
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
