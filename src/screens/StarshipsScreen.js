import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {fetchResults} from '../api/index';

const Starships = ({route, navigation}) => {
  const url = route.params.results.starships;

  const [starships, setStarships] = useState([]);

  const getNames = () => {
    Promise.all(
      url.map(index => {
        return fetchResults(index);
      }),
    ).then(values => setStarships(values));
  };

  useEffect(() => {
    getNames();
  }, []);
  
  return (
    <View style={{justifyContent: 'space-between'}}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={starships}
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

export default Starships;
