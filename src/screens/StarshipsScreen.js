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

const Starships = ({route}) => {
  const url = route.params.results.starships;
  const navigator = useNavigation();
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getNames(url, setStarships);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={ResultsScreenStyles.mainContainer}>
        <Button title={strings.back} onPress={() => navigator.goBack()} />
        <FlatList
          data={starships}
          keyExtractor={starships => starships.url}
          renderItem={({item}) => {
            return (
              <View style={ResultsScreenStyles.flatListContainer}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() =>
                    navigator.navigate(roots.vehiclesDetails, item.url)
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
