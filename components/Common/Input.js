import React from 'react';
import {  TextInput,View,Text, Dimensions, StyleSheet} from 'react-native';

const Input=({label,value,onChangeText,placeHolder,isPassword,maxlength,keyboardType})=>{
    const {inputStyle,containerStyle,labelStyle}=styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                autoFocus = {false}
                autoCompleteType = "off"
                clearButtonMode = "while-editing"
                style={inputStyle}
                placeholder={placeHolder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword}
                maxLength={maxlength}
                keyboardType={keyboardType}
                keyboardAppearance = "dark"
                // underlineColorAndroid="transparent"
            >
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle:{
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18, 
        lineHeight:23,
        flex:2,
        borderWidth : 1,
        borderColor : '#000',
        borderRadius: 20, 
        width: Dimensions.get('window').width- 40
    },
    labelStyle:{
        fontSize:18,
        alignItems:'flex-start',
        textAlign:'left',
        borderWidth : 1,
        borderColor : '#000'
    },
    containerStyle:{
        flex:1,
        alignItems:'center', 
    }
})
export {Input};