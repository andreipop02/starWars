import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {fetchResults} from '../api/index';
import {BASE_URL} from '../constants/url';

const Characters = ({route, navigation}) => {
  const url = route.params;
  console.log(url.item.id);
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetchResults(`${url.item.id}`);
    setResults(response);
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <View style={{justifyContent: 'space-between'}}>
      <FlatList
        data={results.characters}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={{marginTop: 20, marginLeft: 20}}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Characters;
