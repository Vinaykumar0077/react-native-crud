import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { deleteProfile } from "./redux/action";

function Card({ data }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Name : {data.userName}</Text>
      <Text style={styles.text}>Email : {data.email}</Text>
      <Text style={styles.text}>Contact : {data.contact}</Text>
      <Text style={styles.text}>address : {data.address}</Text>
      <Text style={styles.text}>
        <MaterialCommunityIcons
          name="pencil"
          size={25}
          color="dodgerblue"
          onPress={() => navigation.navigate("addProfile", data)}
        />
      </Text>
      <Text style={styles.text}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={25}
          color="red"
          onPress={() => dispatch(deleteProfile(data))}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: 10,
  },
  text: {
    width: "45%",
    height: "30%",
  },
});

export default Card;
