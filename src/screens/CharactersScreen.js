import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {fetchResults} from '../api/index';
import {BASE_URL} from '../constants/url';

const Characters = ({route, navigation}) => {
  const url = route.params.results.characters;

  const [people, setPeople] = useState([]);

  const getNames = () => {
    Promise.all(
      url.map(index => {
        return fetchResults(index);
      }),
    ).then(values => setPeople(values));
  };

  useEffect(() => {
    getNames();
  }, []);
  console.log(people);
  return (
    <View style={{justifyContent: 'space-between'}}>
      <Button title="GO BACK" onPress = {() => navigation.goBack()}/>
      <FlatList
        data={people}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 20, marginLeft: 20}}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Characters;
