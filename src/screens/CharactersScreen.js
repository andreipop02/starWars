import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {fetchResults} from '../api/index';
import {BASE_URL} from '../constants/url';
import homeStyle from '../styles/HomeScreenStyles';

const Characters = ({route, navigation}) => {
  const url = route.params.results;

  const [people, setPeople] = useState([]);

   const getNames = async () => {
      const name = await fetchResults(`${url[1]}`);
      setPeople(name);
    };
  
  useEffect(() => {
    getNames();
  }, []);
  console.log(people);
  return (
    <View style={{justifyContent: 'space-between'}}>
      <FlatList
        data={people.name}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 20, marginLeft: 20}}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Characters;
