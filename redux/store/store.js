/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';
import profileReducer from '../reducers/profileReducer';

const rootReducer = combineReducers({
    profileReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
