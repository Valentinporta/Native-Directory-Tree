import React from 'react';
import { View, StyleSheet } from 'react-native';

const Tree = ({ children }) => {
    return <View style={styles.tree}>{children}</View>
};

const styles = StyleSheet.create({
    tree: {
        paddingLeft: 20
    }
})

export default Tree;
