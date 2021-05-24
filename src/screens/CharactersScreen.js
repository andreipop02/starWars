import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {fetchResults} from '../api/index';
import {BASE_URL} from '../constants/url';

const Characters = ({route, navigation}) => {
  const id = route.params;

  const [results, setResults] = useState([]);
 
  const search = async () => {
    const response = await fetchResults('https://swapi.dev/api/films/1/');
    setResults(response);
  };
  useEffect(() => {
    search();
  }, []);

  /*MAYBE AN IDEA

   const id = results.results.url;
  const[character, setCharacter] = useState([]);
  const getItem = async () => {
    const answer = await fetchResults(`${id}`)
    setCharacter(answer);
  };
  useEffect(() => {
    getItem();
  }, []); 
  
 
  console.log(id);
  */

  return (
    <View>
      <FlatList
        data={results.characters}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={{marginTop:20, marginLeft:20}}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Characters;
