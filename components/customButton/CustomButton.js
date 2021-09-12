import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons'; 

const CustomButton = ({ type }) => {

    return type === 'submit'
        ?
        <TouchableOpacity>
            <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity>
            <Foundation style={styles.refresh} name="refresh" size={17} color="green" />
        </TouchableOpacity>
};

const styles = StyleSheet.create({
    submit: {
        width: 100,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        textAlign: 'center'
    },
    refresh: {
        width: 50,
        textAlign: 'center',
    }
})

export default CustomButton;