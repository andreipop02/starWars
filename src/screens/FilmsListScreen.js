import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import ShowResults from '../components/ShowResults';
import FilmsStyles from '../styles/FilmsListStyles';
import background from '../styles/BackgroundStyle';
import {fetchAllFilms} from '../api/index';

const Films = ({navigation}) => {
  const [results, setResults] = useState([]);

  const search = async () => {
    const response = await fetchAllFilms();
    setResults(response);
  };
  useEffect(() => {
    search();
  }, []);

  console.log(results)
  return (
    <View style={{ justifyContent:'space-between', alignItems:'center'}}>
      <View style={FilmsStyles.button}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <ShowResults result={results} />
    </View>
  );
};

export default Films;
