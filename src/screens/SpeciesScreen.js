import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getNames} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';

const Species = ({route, navigation}) => {
  const url = route.params.results.species;

  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getNames(url, setSpecies);
  }, []);

  return (
    <View style={{justifyContent: 'space-between'}}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={species}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={SecondaryScreensStyles.touchableOpacity}>
              <Text style={SecondaryScreensStyles.nameText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Species;
