import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Dice from '../components/Dice';
import { colors } from '../styles/colors';

export default function HomeScreen() {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setNumber(random);
  };

  return (
    <View style={styles.container}>
      <Dice number={number} />
      <Button title="Lanzar Dado" onPress={rollDice} color={colors.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
