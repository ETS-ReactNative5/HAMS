import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

const NoTransactionsView = ({ children,onPress,retryText }) => {
    const { ContainerStyle, TextStyle } = styles;
    return(
        <View style = {ContainerStyle}>
            <Text style = {TextStyle} >
                {children}
            </Text>
            <TouchableOpacity
                style = {{ alignItems: 'center',paddingHorizontal: 5, backgroundColor: '#F9F9F9', borderRadius: 10, borderColor: '#EEE',borderWidth: 1, flexDirection:'row',width: 150, height:50}}
                onPress = {onPress}
            >
                <IconFontAwesome name = 'refresh' size = {26} color = '#4a4d4e'
                    style = {{marginHorizontal: 5,}}
                />
                <Text style = {{color: '#4a4d4e',fontWeight: '700', textAlign: 'right', fontSize: 15}}>{retryText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerStyle : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#F1F1F1',
    },
    TextStyle : {
        alignSelf : 'center',
        color : '#707070',
        fontSize : 20,
        fontWeight : '600',
        paddingVertical: 10,
        flexWrap: 'wrap',
    },
});

export {NoTransactionsView}
