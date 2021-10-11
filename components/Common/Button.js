import React from 'react';
import { Text, TouchableOpacity, StyleSheet,View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const Button = ({ onPress,children, BGcolor, borderColor, iconName }) => {
    const { ButtonStyle, TextStyle } = styles;
    return(
        <TouchableOpacity onPress = {onPress} style = {[ButtonStyle,{backgroundColor: BGcolor, borderColor : borderColor, flexDirection:'row', alignItems:'center' }]}>
            <View style={{flex:1, alignItems: 'flex-start', justifyContent:'center', paddingLeft:10}}>
                <IconIonicons name = {iconName} size = {30} color = {Colors.PRIMARY_BG_COLOR}/>
            </View>
            <View style={{flex:2, alignItems: 'flex-start', justifyContent:'center'}}>
                <Text style = {TextStyle} >
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ButtonStyle : {
        alignSelf : 'stretch',
        borderWidth : 1,
        borderRadius : 50,
        height: 50,
        marginLeft:5,
        marginRight:5
    },
    TextStyle : {
        color : '#fff',
        fontSize : 18,
        fontWeight : '600',
        paddingVertical: 10
    },
});
export {Button};