import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import homeStyle from '../styles/HomeScreenStyles';
import background from '../styles/BackgroundStyle';
import roots from '../navigation/roots';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigator = useNavigation();
  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={homeStyle.mainContainer}>
        <Text style={homeStyle.mainText}>Welcome to Star Wars</Text>
        <TouchableOpacity
          style={homeStyle.touchableOpacity}
          onPress={() => navigator.navigate(roots.filmListScreen)}>
          <Text style={homeStyle.touchableText}>GO TO FILMS</Text>
        </TouchableOpacity>
        <Text style={homeStyle.secondaryText}>ALL CREDITS GOES TO NMCP</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;
