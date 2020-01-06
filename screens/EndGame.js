import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import NumberContainer from "../components/NumberContainer";

const EndGame = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game is end. Ur brain sed:</Text>
      <NumberContainer>{props.chosenNumber}</NumberContainer>
      <Text style={styles.text}>Iam dunnit in {props.roundsCount} bits</Text>
      <View style={styles.buttonContainer}><Button title="Go 'gen" onPress={props.restart}/></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  },
  buttonContainer: {
      marginVertical:20
  }
});

export default EndGame;
