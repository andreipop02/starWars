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

const Starships = ({route, navigation}) => {
  const url = route.params.results.starships;

  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getNames(url, setStarships);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={({justifyContent: 'space-between'}, {flex: 1})}>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
        <FlatList
          data={starships}
          keyExtractor={starships => starships.url}
          renderItem={({item}) => {
            return (
              <View style={{alignItems: 'center'}}>
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

export default Starships;
