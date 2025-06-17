import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function Dice({ number }) {
  return (
    <View style={styles.dice}>
      <Text style={styles.diceText}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dice: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: colors.diceBorder,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 5,
  },
  diceText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
