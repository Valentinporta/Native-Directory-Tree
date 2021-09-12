import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
    <SafeAreaView>
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
    justifyContent: 'center',
  },
});
