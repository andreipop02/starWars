
import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import FilmDetailsStyles from '../styles/FilmDetailsStyles';
import background from '../styles/BackgroundStyle';

const FilmDetails = ({route, navigation}) => {
    const item = route.params;
    console.log(item);
  return (
    <ImageBackground
    style={background.backgroundImage}
    source={require('../../assets/starBackground.jpg')}>
    <View style={FilmDetailsStyles.mainContainer}>
      <Button style={FilmDetailsStyles.button} title="Go to Characters" onPress = {() => navigation.navigate('characters',{item})}/>
      <Button style={FilmDetailsStyles.button} title="Go to Planets" onPress = {() => navigation.navigate('planets',{item})}/>
      <Button style={FilmDetailsStyles.button} title="Go to Starships" onPress = {() => navigation.navigate('starships',{item})}/>
      <Button style={FilmDetailsStyles.button} title="Go to Vehicles" onPress = {() => navigation.navigate('vehicles',{item})}/>
      <Button style={FilmDetailsStyles.button} title="Go to Species" onPress = {() => navigation.navigate('species',{item})}/>
    </View>
    </ImageBackground>
  );
};

export default FilmDetails;
