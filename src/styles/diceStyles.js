import { StyleSheet } from 'react-native';

export const diceStyles = StyleSheet.create({
  container: {
    position: 'relative',
    margin: 20,
  },
  dice: {
    width: 130,
    height: 130,
    borderRadius: 25,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  shadow: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 130,
    height: 130,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    zIndex: -1,
  },
  // Patrones para cada número
  singleBow: {
    fontSize: 40,
    textAlign: 'center',
  },
  bow: {
    fontSize: 24,
    margin: 2,
  },
  centerBow: {
    fontSize: 24,
    alignSelf: 'center',
  },
  // Layouts
  twoPattern: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    transform: [{ rotate: '45deg' }],
  },
  threePattern: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    transform: [{ rotate: '45deg' }],
  },
  fourPattern: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70%',
    width: '70%',
  },
  fivePattern: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
    width: '70%',
  },
  sixPattern: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
    width: '60%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    justifyContent: 'space-between',
    height: '100%',
  },
});