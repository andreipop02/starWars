import {StyleSheet} from 'react-native';
import {colors, metrics} from '../constants/index';

const homeStyle = StyleSheet.create({
  mainText: {
    marginTop: metrics.size30,
    fontSize: metrics.size30,
    color: colors.white,
    fontWeight: 'bold',
  },
  secondaryText: {
    marginTop: metrics.size50,
    color: colors.white,
    fontSize: metrics.size15,
  },
  touchableOpacity: {
    backgroundColor: colors.dodgerBlue,
    padding: metrics.size5,
    alignItems: 'center',
    marginTop: metrics.size50,
    justifyContent: 'center',
    borderRadius: metrics.size12,
  },
  touchableText: {
    color: colors.white,
    fontSize: metrics.size20,
  },
  mainContainer: {
    alignItems: 'center',
    flex: metrics.size1,
  },
});

export default homeStyle;
