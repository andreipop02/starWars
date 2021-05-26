import {StyleSheet} from 'react-native';

const SecondaryScreensStyles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: 'rgba(255,140,0,1)',
    height: 50,
    width: 200,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },

  nameText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  detailsText: {
    fontSize: 25,
    color: 'rgb(255,215,0)',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },

  detailsContainer: {
  
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
});

export default SecondaryScreensStyles;
