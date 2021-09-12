import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from './components/customButton/CustomButton';
import RecursiveTree from './components/recursiveTree/RecursiveTree';
import Tree from './components/tree/Tree';

const data = [
  {
    "type": "directory",
    "name": "JARqrzM",
    "files": [
      {
        "type": "directory",
        "name": "3BmXB",
        "files": [
          {
            "type": "directory",
            "name": "WZdo3TG6A",
            "files": [
              
            ]
          },
          {
            "type": "file",
            "name": "QcNX0tqh.eCW"
          },
          {
            "type": "file",
            "name": "W3zFbYBrIV.QMA"
          }
        ]
      },
      {
        "type": "directory",
        "name": "W0ViZx5cJr",
        "files": [
          {
            "type": "directory",
            "name": "LrN1Fbxpfh",
            "files": [
              
            ]
          },
          {
            "type": "directory",
            "name": "gKao1",
            "files": [
              
            ]
          },
          {
            "type": "file",
            "name": "SslGTIi.JO3"
          }
        ]
      },
      {
        "type": "file",
        "name": "URTpta.p8T"
      }
    ]
  },
  {
    "type": "directory",
    "name": "RM7yqbChd",
    "files": [
      {
        "type": "file",
        "name": "UfDuec.h8I"
      },
      {
        "type": "file",
        "name": "phn5dTNjx.vwJ"
      },
      {
        "type": "file",
        "name": "ZzgYzTi2.7hc"
      }
    ]
  }
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.buttons}>
        <CustomButton type='submit' />
        <CustomButton type='refresh' />
      </View>
      <Tree>
        <RecursiveTree data={data} />
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
