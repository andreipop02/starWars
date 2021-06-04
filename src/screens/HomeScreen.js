import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import homeStyle from '../styles/HomeScreenStyles';
import background from '../styles/BackgroundStyle';
import roots from '../navigation/roots';
import {useNavigation} from '@react-navigation/native';
import {strings} from '../constants/index';

const Home = () => {
  const navigator = useNavigation();
  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={homeStyle.mainContainer}>
        <Text style={homeStyle.mainText}>{strings.welcome}</Text>
        <TouchableOpacity
          style={homeStyle.touchableOpacity}
          onPress={() => navigator.navigate(roots.filmListScreen)}>
          <Text style={homeStyle.touchableText}>{strings.gotoFilms}</Text>
        </TouchableOpacity>
        <Text style={homeStyle.secondaryText}>{strings.credits}</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;
