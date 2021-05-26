import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getNames} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';

const Starships = ({route, navigation}) => {
  const url = route.params.results.starships;

  const [starships, setStarships] = useState([]);


  useEffect(() => {
    getNames(url, setStarships);
  }, []);
  
  return (
    <View style={{justifyContent: 'space-between'},{flex:1}}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={starships}
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

export default Starships;
