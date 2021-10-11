import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

const BigButton = ({ onPress,children }) => {
    const { button, text } = styles;
        return( 
            <View
                style = {styles.container}
            >
                <TouchableOpacity 
                    style = {button}
                    onPress = {onPress}
                >
                    <Text 
                        style = {text}
                    >
                        {children}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

const styles = StyleSheet.create ({
    container: {
        padding: 5,
        flex: 1,
        width: Dimensions.get('window').width - 14
    },
    button: {
        flex: 1,
        alignSelf : 'stretch',
        backgroundColor : Colors.PRIMARY_BG_COLOR,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : Colors.HINT_COLOR,
        marginHorizontal: 20,
        justifyContent: 'center',
        marginLeft:5,
        marginRight:5,

    },
    text: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        color: Colors.ACCENT_COLOR,
        fontSize : 30,
        fontWeight : '600',
        paddingVertical: 10
    }
})

export {BigButton}
