import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import Card from "../components/Card";
import AddIcon from "../components/AddIcon";

function SummaryScreen({ navigation }) {
  const profileData = useSelector((state) => state.profileReducer);

  return (
    <View>
      <AddIcon />
      <View style={styles.container}>
        {!profileData.length ? (
          <Text>No Profiles to Show...!</Text>
        ) : (
          <FlatList
            data={profileData}
            keyExtractor={(profileData) => profileData.email.toString()}
            renderItem={({ item }) => <Card data={item} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  addCard: {
    width: "100%",
    height: "10%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default SummaryScreen;
