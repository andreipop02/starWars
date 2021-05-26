import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getNames} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';

const Planets = ({route, navigation}) => {
  const url = route.params.results.planets;

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getNames(url, setPlanets);
  }, []);
  
  return (
    <View>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={planets}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center', justifyContent:'space-evenly', flex:1}}>
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

export default Planets;
