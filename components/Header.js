import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 50,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    marginBottom: 30
  },
  headerTitle: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "700"
  }
});

export default Header;
