import {StyleSheet} from 'react-native';
import {colors, metrics} from '../constants/index';

const ComponentsStyles = StyleSheet.create({
  id_text: {
    textAlign: 'center',
    marginTop: metrics.size50,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: metrics.size22,
  },
  title_text: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: metrics.size22,
  },
  mainContainer: {
    justifyContent: 'space-between'
  }
});

export default ComponentsStyles;
