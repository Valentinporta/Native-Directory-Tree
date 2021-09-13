import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from './components/customButton/CustomButton';
import RecursiveTree from './components/recursiveTree/RecursiveTree';
import Tree from './components/tree/Tree';
import axios from 'axios';

export default function App() {
  const [apiData, setApiData] = useState([])
  const [input, setInput] = useState('')

  const handleRequest = async () => {
      const request = await axios.get(input)
      setApiData(request.data)
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.container__header}>

        <TextInput style={styles.input} value={input} onChangeText={(input) => setInput(input)} />
        <View style={styles.buttons}>
          <CustomButton onPress={() => handleRequest()} type='submit' />
          <CustomButton onPress={() => {setInput(''); setApiData([])}} type='refresh' />
        </View>

      </View>

      <View style={styles.container__content}>
        <Text style={styles.title}>Directory Tree Visualizer</Text>

        <Tree>
          <RecursiveTree data={apiData} />
        </Tree>
      </View>

    </SafeAreaView>
  );
}

const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container__header: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    width: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  container__content: {
    minHeight: height,
    backgroundColor: 'wheat'
  }
});
