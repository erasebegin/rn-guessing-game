import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import colors from "../constants/colors";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );
  const [roundsCount, setRoundsCount] = useState(0);
  const currentMin = useRef(1);
  const currentMax = useRef(100);
  const buttonColor = useRef(colors.compliment);

  const handleGuess = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Stoppit", "U forget nummi? I none forget.", [
        { text: "fine, soz", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess;
    }
    setCurrentGuess(
      generateRandomNumber(currentMin.current, currentMax.current, currentGuess)
    );
  };

  if (currentGuess === props.userChoice) {
    buttonColor.current = colors.secondary;
    console.log("victory");
  }

  const handleCompletion = () => {
    if (currentGuess !== props.userChoice) {
      Alert.alert("No'snot", "ye bollocks", [
        { text: "hmmm", style: "cancel" }
      ]);
      return;
    }
    if (currentGuess === props.userChoice) {
      props.victory(roundsCount);
    }
  };

  useEffect(() => {
    setRoundsCount(prevRound => prevRound + 1);
    console.log(roundsCount);
  }, [currentGuess]);

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.text}>I'm gess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Text style={styles.text}>Is yes?</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="no, wrong, less"
            onPress={handleGuess.bind(this, "lower")}
            color={colors.compliment}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="yes, wrong, more"
            onPress={handleGuess.bind(this, "higher")}
            color={colors.compliment}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="snap mi gibs, ass mi numma"
            onPress={handleCompletion}
            color={buttonColor.current}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    alignItems: "center"
  },
  text: {
    fontSize: 25
  },
  buttonContainer: {
    marginVertical: 10,
    width: 250
  }
});

export default GameScreen;
