import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
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
      <TextInput style={styles.input} value={input} onChangeText={(input) => setInput(input)} />
      <View style={styles.buttons}>
        <CustomButton onPress={() => handleRequest()} type='submit' />
        <CustomButton onPress={() => {setInput(''); setApiData([])}} type='refresh' />
      </View>
      <Tree>
        <RecursiveTree data={apiData} />
      </Tree>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    justifyContent: 'space-between'
  }
});
