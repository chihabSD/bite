import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../../constants";
import { useModals } from "../../hooks/useModal";
import FilterModal from "../../Modals/FilterModal";
import HorizontalFoodCard from "./HorizontalFoodCard";
import SearchHeader from "./SearchHeader";
import Section from "./Section";
import VerticalCard from "./VerticalCard";

const Home = ({ menuListS }) => {
  const { toggleFilterModal, filterModal } = useModals();
  const [recommends, setRecommend] = useState([]);
  const [popular, setPopular] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // get the recommended menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");
    // get popular meneus
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");
    // find the menu based on the id
    let selectedMenu = dummyData.menu.find((a) => a.id === menuTypeId);

    // set recommended
    setRecommend(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
    // poular
    setMenuList(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  const renderPopularSection = () => {
    return (
      <Section title="Popular" onPress={() => console.warn("show all popular")}>
        <FlatList
          //   ref={flatListRef}

          horizontal
          showsHorizontalScrollIndicator={false}
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <VerticalCard
                containerStyle={{
                  height: 180,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                }}
                imageStyle={{
                  marginTop: 35,
                  height: 150,
                  width: 150,
                }}
                // item={item}
                item={item}
                onPress={() => console.warn("vertical foot card")}
              />
            );
          }}
        />
      </Section>
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
  const renderDelviery = () => {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
      >
        <Text style={{ color: COLORS.red, ...FONTS.body3 }}>DELIVERY TO</Text>
        <TouchableOpacity
          onPress={toggleFilterModal}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.base,
          }}
        >
          <Text style={{ ...FONTS.body3 }}>
            {dummyData?.myProfile?.address}
          </Text>
          <Image
            source={icons.down_arrow}
            style={{ width: 20, height: 20, marginLeft: SIZES.base }}
          />
        </TouchableOpacity>
      </View>
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
      <SearchHeader toggleFilterModal={toggleFilterModal} />

      <FlatList
        //   ref={flatListRef}
        ListHeaderComponent={
          <View>
            {renderDelviery()}
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
        ListFooterComponent={<View style={{ height: 200 }} />}
      />
      <FilterModal
        filterModal={filterModal}
        toggleFilterModal={toggleFilterModal}
      />
    </View>
  );
};

export default Home;
