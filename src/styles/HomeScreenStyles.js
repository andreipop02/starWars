import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  mainText: {
    marginTop: 30,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  secondaryText: {
    marginTop: 50,
    color: 'white',
    fontSize: 15,
  },
  touchableOpacity: {
    backgroundColor: 'rgb(30,144,255)',
    height: 30,
    width: 150,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    borderRadius: 15,
  },
  touchableText: {
    color: 'white',
    fontSize: 20,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default homeStyle;
