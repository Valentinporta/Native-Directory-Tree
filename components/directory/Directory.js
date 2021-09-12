import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Directory = ({ name, children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <View>
            <TouchableOpacity style={styles.directory} onPress={handleOpen} >
                <AntDesign name={isOpen ? 'folderopen' : 'folder1'} size={24} color="black" />
                <Text style={{marginLeft: 5}}>{name}</Text>
                {/* collapsible component with children prop */}
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    directory: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center'
    }
});

export default Directory;
