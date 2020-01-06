import React from "react";
import { TextInput, StyleSheet } from "react-native";

import colors from "../constants/colors";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
    width: 100,
    marginVertical: 20
  }
});

export default Input;
