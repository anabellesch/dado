import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../styles/colors';
import { diceStyles } from '../styles/diceStyles';

export default function Dice({ number }) {
 
  const dicePatterns = {
    1: ['🎀'],
    2: ['🎀', '🎀'],
    3: ['🎀', '🎀', '🎀'],
    4: ['🎀', '🎀', '🎀', '🎀'],
    5: ['🎀', '🎀', '🎀', '🎀', '🎀'],
    6: ['🎀', '🎀', '🎀', '🎀', '🎀', '🎀']
  };

  const renderDicePattern = (num) => {
    const bows = dicePatterns[num];
    
    if (num === 1) {
      return <Text style={diceStyles.singleBow}>{bows[0]}</Text>;
    }
    
    if (num === 2) {
      return (
        <View style={diceStyles.twoPattern}>
          <Text style={diceStyles.bow}>{bows[0]}</Text>
          <Text style={diceStyles.bow}>{bows[1]}</Text>
        </View>
      );
    }
    
    if (num === 3) {
      return (
        <View style={diceStyles.threePattern}>
          <Text style={diceStyles.bow}>{bows[0]}</Text>
          <Text style={diceStyles.bow}>{bows[1]}</Text>
          <Text style={diceStyles.bow}>{bows[2]}</Text>
        </View>
      );
    }
    
    if (num === 4) {
      return (
        <View style={diceStyles.fourPattern}>
          <View style={diceStyles.row}>
            <Text style={diceStyles.bow}>{bows[0]}</Text>
            <Text style={diceStyles.bow}>{bows[1]}</Text>
          </View>
          <View style={diceStyles.row}>
            <Text style={diceStyles.bow}>{bows[2]}</Text>
            <Text style={diceStyles.bow}>{bows[3]}</Text>
          </View>
        </View>
      );
    }
    
    if (num === 5) {
      return (
        <View style={diceStyles.fivePattern}>
          <View style={diceStyles.row}>
            <Text style={diceStyles.bow}>{bows[0]}</Text>
            <Text style={diceStyles.bow}>{bows[1]}</Text>
          </View>
          <Text style={diceStyles.centerBow}>{bows[2]}</Text>
          <View style={diceStyles.row}>
            <Text style={diceStyles.bow}>{bows[3]}</Text>
            <Text style={diceStyles.bow}>{bows[4]}</Text>
          </View>
        </View>
      );
    }
    
    if (num === 6) {
      return (
        <View style={diceStyles.sixPattern}>
          <View style={diceStyles.column}>
            <Text style={diceStyles.bow}>{bows[0]}</Text>
            <Text style={diceStyles.bow}>{bows[1]}</Text>
            <Text style={diceStyles.bow}>{bows[2]}</Text>
          </View>
          <View style={diceStyles.column}>
            <Text style={diceStyles.bow}>{bows[3]}</Text>
            <Text style={diceStyles.bow}>{bows[4]}</Text>
            <Text style={diceStyles.bow}>{bows[5]}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={diceStyles.container}>
      <View style={[diceStyles.dice, { 
        backgroundColor: colors.pastelColors[number - 1],
        borderColor: colors.diceBorder 
      }]}>
        {renderDicePattern(number)}
      </View>
      <View style={diceStyles.shadow} />
    </View>
  );
}