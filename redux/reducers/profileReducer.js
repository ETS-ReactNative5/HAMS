/* eslint-disable prettier/prettier */
import {
    SET_PROFILE_DETAILS,
    DELETE_PROFILE_DETAILS,
    SET_BMR_DETAILS,
    SET_CHANGE_IN_WEIGHT_DETAILS,
    SET_NEW_BMR,
    CLEAR_NEW_BMR,
} from '../actions/types';

const initialState = {
    profileObj : null,
    isMale: null,
    BMR: null,
    newBMR: null,
    changeInWeight: null,
};

const profileReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DETAILS:
            return {
                ...prevState,
                profileObj : action.profileObj,
            };
        case DELETE_PROFILE_DETAILS:
            return {
                ...prevState,
                profileObj : null,
            };
        case SET_BMR_DETAILS:
            return {
                ...prevState,
                isMale : action.isMale,
                BMR : action.BMR,
            };
        case SET_CHANGE_IN_WEIGHT_DETAILS:
            return {
                ...prevState,
                isMale : action.isMale,
                changeInWeight : action.changeInWeight,
            };
        case SET_NEW_BMR:
            return {
                ...prevState,
                newBMR : prevState.newBMR + action.newBMR,
            };
        case CLEAR_NEW_BMR:
            return {
                ...prevState,
                newBMR : null,
            };
        default:
            return prevState;
    }
};

export default profileReducer;


