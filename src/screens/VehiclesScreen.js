import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getNames} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';

const Vehicles = ({route, navigation}) => {
  const url = route.params.results.vehicles;

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getNames(url, setVehicles);
  }, []);

  return (
    <View style={{flex:1}}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={vehicles}
        keyExtractor={() => Math.random() * 9999}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center', justifyContent:'space-evenly'}}>
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

export default Vehicles;
