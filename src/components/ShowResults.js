import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ShowResults = ({result}) => {
  return (
    <View>
      <FlatList 
      data={result}
      keyExtractor={(result) => result.episode_id}
      renderItem={({item}) => {
          return <Text style={{textAlign:'center'}}>{item.title}</Text>
        }}
      />
    </View>
  );
};


export default ShowResults;