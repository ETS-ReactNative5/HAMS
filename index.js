/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import configureStore from './redux/store/store';

const store = configureStore();

const HamsApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => HamsApp);
