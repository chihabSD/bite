import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons } from "../../constants";
import FilterModalSections from "../components/FilterModalSections";
import IconButton from "../components/IconButton";
import TwoPointSlider from "../components/TwoPointSlider";
import { useModals } from "../hooks/useModal";

const renderDistance = () => {
  return (
    <FilterModalSections title="Distance">
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TwoPointSlider
          values={[3, 10]}
          min={1}
          max={20}
          postFix="km"
          onValuesChange={(values) => console.warn(values)}
          prefix={0}
        />
      </View>
    </FilterModalSections>
  );
};
const FilterModal = ({ filterModal, toggleFilterModal }) => {
  //   const { toggleFilterModal } = useModals();
  return (
    // <View style={styles.centeredView}>
    <Modal animationType="falde" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
              Filter your search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,

                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{
                tintColor: COLORS.gray2,
              }}
              onPress={toggleFilterModal}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250 }}
          >
            {renderDistance()}
          </ScrollView>
        </View>
      </View>
    </Modal>

    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: COLORS.transparentBlack7,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginTop: 100,
    height: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default FilterModal;
