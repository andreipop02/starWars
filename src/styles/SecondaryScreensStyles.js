import {StyleSheet} from 'react-native';
import {colors, metrics} from '../constants/index';

const SecondaryScreensStyles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: 'rgba(255,140,0,1)',
    padding: metrics.size10,
    marginTop: metrics.size30,
    marginBottom: metrics.size30,
    borderRadius: metrics.size10,
  },

  nameText: {
    fontSize: metrics.size20,
    color: 'white',
    fontWeight: 'bold',
  },

  detailsText: {
    fontSize: metrics.size25,
    color: colors.gold,
    fontWeight: 'bold',
    backgroundColor: colors.demiBlack,
    borderRadius: metrics.size5,
  },

  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: metrics.size1,
  },
});

export default SecondaryScreensStyles;
