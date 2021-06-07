import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import roots from '../navigation/roots';
import {useNavigation} from '@react-navigation/native';
import ComponentsStyles from '../styles/ComponentsStyles';

const ShowResults = ({result}) => {
  const navigator = useNavigation();
  return (
    <View style={ComponentsStyles.mainContainer}>
      <FlatList
        vertical={true}
        data={result}
        keyExtractor={result => result.episode_id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigator.navigate(roots.filmDetailsScreen, {id: item.url})
              }>
              <Text style={ComponentsStyles.id_text}>
                Episode {item.episode_id}:
              </Text>
              <Text style={ComponentsStyles.title_text}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ShowResults;
