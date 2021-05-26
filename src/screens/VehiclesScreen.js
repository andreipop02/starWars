import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import {getNames} from '../api/index';

const Vehicles = ({route, navigation}) => {
  const url = route.params.results.vehicles;

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getNames(url, setVehicles);
  }, []);

  return (
    <View style={{justifyContent: 'space-between'}}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
      <FlatList
        data={vehicles}
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

export default Vehicles;
