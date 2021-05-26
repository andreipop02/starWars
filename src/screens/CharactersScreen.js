import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getNames} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';

const Characters = ({route, navigation}) => {
  const url = route.params.results.characters;

  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    getNames(url, setPeople);
  }, []);
 console.log(people)
  return (
    <View style={{justifyContent: 'space-between'}, {flex:1}}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={people}
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

export default Characters;
