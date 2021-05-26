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

const Planets = ({route, navigation}) => {
  const url = route.params.results.planets;

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getNames(url, setPlanets);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
        <FlatList
          data={planets}
          keyExtractor={planets => planets.url}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  flex: 1,
                }}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() =>
                    navigation.navigate('planetDetails', item.url)
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

export default Planets;
