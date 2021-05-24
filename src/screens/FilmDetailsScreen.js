
import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import FilmDetailsStyles from '../styles/FilmDetailsStyles';
import background from '../styles/BackgroundStyle';

const FilmDetails = ({route, navigation}) => {
    const url = route.params;
    console.log(url);
  return (
    <ImageBackground
    style={background.backgroundImage}
    source={require('../../assets/starBackground.jpg')}>
    <View style={FilmDetailsStyles.mainContainer}>
      <Button style={FilmDetailsStyles.button} title="Go to Characters" onPress = {() => navigation.navigate('characters',`${url}`)}/>
      <Button style={FilmDetailsStyles.button} title="Go to Planets" onPress = {() => navigation.navigate('planets',`${url}`)}/>
      <Button style={FilmDetailsStyles.button} title="Go to Starships" onPress = {() => navigation.navigate('starships',`${url}`)}/>
      <Button style={FilmDetailsStyles.button} title="Go to Vehicles" onPress = {() => navigation.navigate('vehicles',`${url}`)}/>
      <Button style={FilmDetailsStyles.button} title="Go to Species" onPress = {() => navigation.navigate('species',`${url}`)}/>
    </View>
    </ImageBackground>
  );
};

export default FilmDetails;
