import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style = {styles.numberContainer}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.primary,
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      textAlign: "center",
      width: 100
  },
  numberText: {
      fontSize: 30,
      fontWeight: "bold"
  }
});

export default NumberContainer;
