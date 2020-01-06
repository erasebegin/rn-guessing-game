import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartScreen from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import EndGame from "./screens/EndGame";

export default function App() {
  const [chosenNumber, setChosenNumber] = useState("");
  const [roundsCount, setRoundsCount] = useState(0);

  const handleStart = num => {
    setChosenNumber(num);
  };

  const handleVictory = numRounds => {
    setRoundsCount(numRounds);
    console.log(numRounds)
  };

  const handleRestart = () => {
    setChosenNumber("")
    setRoundsCount(0)
    content = <StartScreen onStart={handleStart} />;
    console.log("restart");
  }

  let content = <StartScreen onStart={handleStart} />;

  if (chosenNumber) {
    content = <GameScreen userChoice={chosenNumber} victory={handleVictory} />;
  } 
  
  if (roundsCount > 0) {
    content = <EndGame roundsCount={roundsCount} chosenNumber={chosenNumber} restart={handleRestart}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Lemme Gess" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
