import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import {getNames} from '../api/index';
import SecondaryScreensStyles from '../styles/SecondaryScreensStyles';
import background from '../styles/BackgroundStyle';

const Vehicles = ({route, navigation}) => {
  const url = route.params.results.vehicles;

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getNames(url, setVehicles);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={{flex: 1}}>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
        <FlatList
          data={vehicles}
          keyExtractor={vehicles => vehicles.url}
          renderItem={({item}) => {
            return (
              <View
                style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() =>
                    navigation.navigate('vehiclesDetails', item.url)
                  }>
                  <Text style={SecondaryScreensStyles.nameText}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Vehicles;
