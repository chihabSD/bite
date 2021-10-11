import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

const SearchHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
      }}
    >
      <Image
        source={icons.search}
        style={{ height: 20, width: 20, tintColor: COLORS.black }}
      />

      <TextInput
        placeholder="Search for a bite...."
        style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}
      />
      <TouchableOpacity>
        <Image
          source={icons.filter}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
