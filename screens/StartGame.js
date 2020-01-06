import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert
} from "react-native";

import colors from "../constants/colors";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Input from "../components/Input";

const StartGame = props => {
  const [inputText, setInputText] = useState("");
  const [chosenNumber, setChosenNumber] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInput = input => {
    setInputText(input.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setInputText("");
  };

  const handleSubmit = () => {
    const parsedNumber = parseInt(inputText);
    if (isNaN(parsedNumber) || parsedNumber <= 0 || parsedNumber > 99) {
      Alert.alert("Invalid Number ~", "Number has to be between 1 and 99", [
        { text: "I am derstand", style: "destructive", onPress: resetInput }
      ]);
    }
    setChosenNumber(parsedNumber);
    setIsConfirmed(true);
    setInputText("");
  };

  const handleStart = () => {
    props.onStart(chosenNumber)
  }

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.card}>
        <Text style={styles.confirmedOutputText}>Youm 'as</Text>
        <NumberContainer>{chosenNumber}</NumberContainer>
        <View style={styles.button}>
          <Button title="beggin" color={colors.compliment} onPress={handleStart} />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Card>
          <Text style={{ fontSize: 20 }}>Slect nmbur</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleInput}
            value={inputText}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}></View>
            <View style={styles.button}>
              <Button
                title="slect"
                color={colors.secondary}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: "40%"
  },
  input: { fontSize: 20, textAlign: "center" },
  card: {
    marginVertical: 20
  },
  confirmedOutputText: {
    fontSize: 20
  }
});

export default StartGame;
