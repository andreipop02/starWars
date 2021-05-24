import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const ShowResults = ({result, navigation}) => {
  return (
    <View style={{justifyContent:'space-between'}}>
      <FlatList
        vertical = {true}
        data={result}
        keyExtractor={result => result.episode_id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('filmDetails',url)}>
              <Text style={{textAlign: 'center', marginTop:50, color:'white', fontWeight:'bold', fontSize:22}}>Episode {item.episode_id}:</Text>
              <Text style={{textAlign: 'center', color:'white', fontWeight:'bold', fontSize:22}}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ShowResults;
