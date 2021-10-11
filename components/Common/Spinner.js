import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import {DotIndicator} from 'react-native-indicators';

const Spinner = () => {
    return (
        <View style = {styles.SpinnerStyle}>
            <DotIndicator color={Colors.ACCENT_COLOR} />
        </View>
    );
};

const styles = StyleSheet.create({
    SpinnerStyle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});

export {Spinner};