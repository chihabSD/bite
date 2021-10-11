import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { dummyData, SIZES } from "../../../constants";
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
