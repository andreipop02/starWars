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

const Characters = ({route, navigation}) => {
  const url = route.params.results.characters;

  const [people, setPeople] = useState([]);

  useEffect(() => {
    getNames(url, setPeople);
  }, []);

  return (
    <ImageBackground
      style={background.backgroundImage}
      source={require('../../assets/starBackground.jpg')}>
      <View style={({justifyContent: 'space-between'}, {flex: 1})}>
        <Button title="GO BACK" onPress={() => navigation.goBack()} />
        <FlatList
          data={people}
          keyExtractor={people => people.url}
          renderItem={({item}) => {
            return (
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={SecondaryScreensStyles.touchableOpacity}
                  onPress={() =>
                    navigation.navigate('characterDetails', item.url)
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

export default Characters;
