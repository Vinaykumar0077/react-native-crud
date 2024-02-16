import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function AddIcon() {
  const navigation = useNavigation();
  return (
    <View style={styles.addCard}>
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        onPress={() => navigation.navigate("addProfile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addCard: {
    width: "100%",
    height: "10%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default AddIcon;
