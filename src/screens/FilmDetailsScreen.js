import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import FilmDetailsStyles from '../styles/FilmDetailsStyles';
import background from '../styles/BackgroundStyle';
import {fetchResults} from '../api/index';

const FilmDetails = ({route, navigation}) => {
  const item = route.params;
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetchResults(`${item.id}`);
    setResults(response.characters);
  };
  useEffect(() => {
    search();
  }, []);
  
  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={FilmDetailsStyles.mainContainer}>
        <Button
          style={FilmDetailsStyles.button}
          title="Go to Characters"
          onPress={() => navigation.navigate('characters', {results})}
        />
        <Button
          style={FilmDetailsStyles.button}
          title="Go to Planets"
          onPress={() => navigation.navigate('planets', {results})}
        />
        <Button
          style={FilmDetailsStyles.button}
          title="Go to Starships"
          onPress={() => navigation.navigate('starships', {results})}
        />
        <Button
          style={FilmDetailsStyles.button}
          title="Go to Vehicles"
          onPress={() => navigation.navigate('vehicles', {results})}
        />
        <Button
          style={FilmDetailsStyles.button}
          title="Go to Species"
          onPress={() => navigation.navigate('species', {results})}
        />
      </View>
    </ImageBackground>
  );
};

export default FilmDetails;
