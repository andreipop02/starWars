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
import {useNavigation} from '@react-navigation/native';
import roots from '../navigation/roots';
import ResultsScreenStyles from '../styles/ResultsScreensStyles';

const Planets = ({route}) => {
  const url = route.params.results.planets;
  const navigator = useNavigation();

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getNames(url, setPlanets);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={ResultsScreenStyles.mainContainer}>
        <Button title="GO BACK" onPress={() => navigator.goBack()} />
        <FlatList
          data={planets}
          keyExtractor={planets => planets.url}
          renderItem={({item}) => {
            return (
              <View
              style={ResultsScreenStyles.flatListContainer}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() => navigator.navigate(roots.planetDetails, item.url)}>
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
