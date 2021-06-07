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
import roots from '../navigation/roots';
import {useNavigation} from '@react-navigation/native';
import ResultsScreenStyles from '../styles/ResultsScreensStyles';
import {strings} from '../constants/index';

const Species = ({route}) => {
  const url = route.params.results.species;
  const navigator = useNavigation();
  const [species, setSpecies] = useState([]);
  const navigateToSpeciesDetails = param => {
    navigator.navigate(roots.speciesDetails, param);
  };
  const navigateToPrevScreen = () => {
    navigator.goBack();
  };
  useEffect(() => {
    getNames(url, setSpecies);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={ResultsScreenStyles.mainContainer}>
        <Button title={strings.back} onPress={() => navigateToPrevScreen()} />
        <FlatList
          data={species}
          keyExtractor={species => species.url}
          renderItem={({item}) => {
            return (
              <View style={ResultsScreenStyles.flatListContainer}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() => navigateToSpeciesDetails(item.url)}>
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

export default Species;
