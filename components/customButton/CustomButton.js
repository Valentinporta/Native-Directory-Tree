import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons'; 

const CustomButton = ({ type, onPress }) => {

    return type === 'submit'
        ?
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={onPress}>
            <Foundation style={styles.refresh} name="refresh" size={28} color="green" />
        </TouchableOpacity>
};

const styles = StyleSheet.create({
    submit: {
        width: 100,
        paddingHorizontal: 10,
        paddingTop: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        textAlign: 'center',
        height: 40,
    },
    refresh: {
        width: 50,
        textAlign: 'center',
    }
})

export default CustomButton;