import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const File = ({ name }) => {
    return (
        <View style={styles.file}>
            <AntDesign name="file1" size={24} color="black" />
            <Text>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    file: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center'
    }
})

export default File;
