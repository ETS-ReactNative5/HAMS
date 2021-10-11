/* eslint-disable prettier/prettier */
import {
    SET_PROFILE_DETAILS,
    DELETE_PROFILE_DETAILS,
    SET_BMR_DETAILS,
    SET_CHANGE_IN_WEIGHT_DETAILS,
    SET_NEW_BMR,
    CLEAR_NEW_BMR,
} from './types';

export const setProfileDetails = (profileObj) => (
    {
        type: SET_PROFILE_DETAILS,
        profileObj: profileObj,
    }
);

export const removeProfileDetails = () => (
    {
        type: DELETE_PROFILE_DETAILS,
    }
);

export const setBmrDetails = (isMale, BMR) => (
    {
        type: SET_BMR_DETAILS,
        isMale: isMale,
        BMR: BMR,
    }
);

export const setChangeInWeightDetails = (isMale, changeInWeight) => (
    {
        type: SET_CHANGE_IN_WEIGHT_DETAILS,
        isMale: isMale,
        changeInWeight: changeInWeight,
    }
);

export const setNewBMR = (newBMR) => (
    {
        type: SET_NEW_BMR,
        newBMR: newBMR,
    }
);

export const clearNewBMR = () => (
    {
        type: CLEAR_NEW_BMR,
    }
);
