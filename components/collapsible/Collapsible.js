import React from 'react';
import { StyleSheet, View } from 'react-native';

const Collapsible = ({ isOpen, children }) => {
    return <View style={isOpen ? styles.open : styles.closed}>{children}</View>
};

const styles = StyleSheet.create({
    open: {
        height: 'auto',
        overflow: 'hidden',
        paddingLeft: 20
    },
    closed: {
        height: 0,
        overflow: 'hidden'
    }
})

export default Collapsible;
