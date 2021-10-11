/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Platform, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import 'react-native-gesture-handler'
import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';
import FlashMessage from "react-native-flash-message";

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<AppNavigator screenProps={{navigation : this.props.navigation}}/>
				<FlashMessage position="top" /> 
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.PRIMARY_BG_COLOR,
	},
});
