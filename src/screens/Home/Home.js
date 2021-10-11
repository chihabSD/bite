import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { COLORS, dummyData, FONTS, SIZES } from "../../../constants";
import HorizontalFoodCard from "./HorizontalFoodCard";
import SearchHeader from "./SearchHeader";

const Home = ({ menuListS }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // find the menu based on the id
    let selectedMenu = dummyData.menu.find((a) => a.id === menuTypeId);
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData.menu}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 30,
        }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index == dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
            >
              <Text
                style={{
                  ...FONTS.h3,
                  color:
                    selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };
  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SearchHeader />

      <FlatList
        //   ref={flatListRef}
        ListHeaderComponent={renderMenuTypes}
        showsHorizontalScrollIndicator={false}
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.warn("card")}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
