import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { addProfile,editProfile } from "../redux/action";
import ErrorMessage from "./ErrorMessage";
import store from "../redux/store";

const initialValues = {
  userName: "",
  email: "",
  contact: "",
  address: "",
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required(),
  email: Yup.string().required(),
  contact: Yup.string(),
  address: Yup.string(),
});

function AppForm({ navigation, initialFormValues = initialValues, route }) {
  const dispatch = useDispatch();
  const profileData = route.params;
  const profileStoreData = store.getState().profileReducer;
  let submitVariable = "Submit";

  if (profileData) {
    submitVariable = "Save";
  }
  
  const handleSubmit = (values) => {
    if (profileData) {
      dispatch(editProfile(values));
    } else {
      dispatch(addProfile(values));
    }
    navigation.navigate("Profiles");
  };
  return (
    <Formik
      initialValues={profileData || initialFormValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        setFieldTouched,
        errors,
        touched,
      }) => (
        <View>
          <View style={styles.input}>
            <MaterialCommunityIcons name="account" size={30} />
            <TextInput
              name="userName"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="User Name"
              value={values.userName}
              onChangeText={handleChange("userName")}
              onBlur={() => setFieldTouched("userName")}
            />
          </View>
          <ErrorMessage
            error={errors["userName"]}
            visible={touched["userName"]}
          ></ErrorMessage>
          <View style={styles.input}>
            <MaterialCommunityIcons name="email" size={30} />
            <TextInput
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="User Email"
              value={values.email}
              onChangeText={handleChange("email")}
            />
          </View>
          <ErrorMessage
            error={errors["email"]}
            visible={touched["email"]}
          ></ErrorMessage>
          <View style={styles.input}>
            <MaterialCommunityIcons name="phone" size={30} />
            <TextInput
              name="contact"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="User Contact"
              value={values.contact}
              onChangeText={handleChange("contact")}
            />
          </View>
          <ErrorMessage
            error={errors["contact"]}
            visible={touched["contact"]}
          ></ErrorMessage>
          <View style={styles.input}>
            <MaterialCommunityIcons name="post" size={30} />
            <TextInput
              name="address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="User Address"
              value={values.address}
              onChangeText={handleChange("address")}
            />
          </View>
          <ErrorMessage
            error={errors["address"]}
            visible={touched["address"]}
          ></ErrorMessage>

          <TouchableOpacity style={[styles.button]} onPress={handleSubmit}>
            <Text style={styles.text}>{submitVariable}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

export default AppForm;

const styles = StyleSheet.create({
  input: {
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#eff",
    padding: 10,
    gap: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "steelblue",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
