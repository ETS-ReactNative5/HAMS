import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const IconButton = ({ onPress,children }) => {
    const { ButtonStyle, TextStyle } = styles;
    return(
        <View style = {{marginLeft: 10}}>
            <TouchableOpacity onPress = {onPress} style = {ButtonStyle}>
                {children}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonStyle : {
        flex : 1,
        height: 80, 
        width: 150,
        marginHorizontal: 10, 
        borderWidth: 1, 
        borderRadius: 20,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderColor : '#D93A2F',
    },
    TextStyle : {
        flex:1,
        alignSelf : 'center',
        color : '#ddd',
        fontSize : 18,
        fontWeight : '600',
    },
});
export {IconButton};