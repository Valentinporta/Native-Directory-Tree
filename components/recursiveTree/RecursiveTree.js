import React from 'react';
import { FlatList } from 'react-native';
import Directory from '../directory/Directory';
import File from '../file/File';

const RecursiveTree = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
                item.type === 'file'
                ?
                <File name={item.name} />
                :
                <Directory name={item.name}>
                    <RecursiveTree data={item.files} />
                </Directory>
            )}
        />
    )
};

export default RecursiveTree;
