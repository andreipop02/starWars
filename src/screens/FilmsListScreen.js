import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import ShowResults from '../components/ShowResults';
import background from '../styles/BackgroundStyle';
import {fetchResults} from '../api/index';
import {BASE_URL} from '../constants/url';

const FilmsList = ({navigation}) => {
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetchResults(`${BASE_URL}/films/`);
    setResults(response.results);
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <ShowResults result={results} navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default FilmsList;
