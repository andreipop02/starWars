import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import homeStyle from '../styles/HomeScreenStyles';
import background from '../styles/BackgroundStyle';

const home = ({navigation}) => {
  return (
    <View style={({alignItems: 'center'}, {flex: 1})}>
      <ImageBackground
        style={background.backgroundImage}
        source={require('../../assets/starBackground.jpg')}>
        <Text style={homeStyle.mainText}>This is the HomeScreen</Text>
        <TouchableOpacity
          style={homeStyle.touchableOpacity}
          onPress={() => navigation.navigate('films')}>
          <Text style={{color: 'white', fontSize: 20}}>GO TO FILMS</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default home;
