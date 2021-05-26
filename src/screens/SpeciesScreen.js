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

const Species = ({route, navigation}) => {
  const url = route.params.results.species;

  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getNames(url, setSpecies);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={{justifyContent: 'space-between'}}>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
        <FlatList
          data={species}
          keyExtractor={species => species.url}
          renderItem={({item}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() =>
                    navigation.navigate('speciesDetails', item.url)
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

export default Species;
