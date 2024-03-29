import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import AppNavigator from "./app/navigation/AppNavigator";
import store from "./app/components/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
