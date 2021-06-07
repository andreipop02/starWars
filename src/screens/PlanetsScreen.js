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
import {strings} from '../constants/index';

const Planets = ({route}) => {
  const url = route.params.results.planets;
  const navigator = useNavigation();
  const [planets, setPlanets] = useState([]);
  const navigateToPlanetsDetails = param => {
    navigator.navigate(roots.planetDetails, param);
  };
  const navigateToPrevScreen = () => {
    navigator.goBack();
  };
  useEffect(() => {
    getNames(url, setPlanets);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={ResultsScreenStyles.mainContainer}>
        <Button title={strings.back} onPress={() => navigateToPrevScreen()} />
        <FlatList
          data={planets}
          keyExtractor={planets => planets.url}
          renderItem={({item}) => {
            return (
              <View style={ResultsScreenStyles.flatListContainer}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() => navigateToPlanetsDetails(item.url)}>
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
