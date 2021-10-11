import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { COLORS, dummyData, FONTS, SIZES } from "../../../constants";
import HorizontalFoodCard from "./HorizontalFoodCard";
import SearchHeader from "./SearchHeader";
import Section from "./Section";

const Home = ({ menuListS }) => {
  const [recommends, setRecommend] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // get the recommended menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");
    // find the menu based on the id
    let selectedMenu = dummyData.menu.find((a) => a.id === menuTypeId);

    // set recommended
    setRecommend(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );
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
                    selectedMenuType == item.id ? COLORS.red : COLORS.black,
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
  const renderRecommendedSection = () => {
    return (
      <Section
        title="Recommened"
        onPress={() => console.warn("show all recommened")}
      >
        <FlatList
          //   ref={flatListRef}

          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  paddingRight: SIZES.radius,
                  alignItems: "center",
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight:
                    index == recommends.length - 1 ? SIZES.padding : 0,
                  marginHorizontal: SIZES.padding,
                  marginBottom: SIZES.radius,
                }}
                imageStyle={{
                  marginTop: 35,
                  height: 150,
                  width: 150,
                }}
                item={item}
                onPress={() => console.warn("Recommended")}
              />
            );
          }}
        />
      </Section>
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
        ListHeaderComponent={
          <View>
            {renderRecommendedSection()}
            {renderMenuTypes()}
          </View>
        }
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
