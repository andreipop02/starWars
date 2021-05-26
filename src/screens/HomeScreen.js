import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import homeStyle from '../styles/HomeScreenStyles';
import background from '../styles/BackgroundStyle';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={({alignItems: 'center', flex: 1})}>
        <Text style={homeStyle.mainText}>This is the HomeScreen</Text>
        <TouchableOpacity
          style={homeStyle.touchableOpacity}
          onPress={() => navigation.navigate('films')}>
          <Text style={{color: 'white', fontSize: 20}}>GO TO FILMS</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
