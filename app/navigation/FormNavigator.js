import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppForm from "../components/form/AppForm";
import SummaryScreen from "../screens/SummaryScreen";

function FormNavigator(props) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="Profiles" component={SummaryScreen} />
      <Stack.Screen name="addProfile" component={AppForm} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormNavigator;
