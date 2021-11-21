import { publicRequest, userRequest } from "../requestMethods";
import {
    loginFailure,
    loginStart,
    loginSucccess,
    registerFailure,
    registerStart,
    registerSuccess,
    logoutStart,
    logoutSuccess,
    logoutFailure
} from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/api/user/login", user);
        dispatch(loginSucccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/api/user/register", user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());
    }
};

export const logout = async (dispatch, user) => {
    dispatch(logoutStart());
    try {
        const res = await userRequest.post("/api/user/logout", user);
        dispatch(logoutSuccess(res.data));
    } catch (error) {
        dispatch(logoutFailure());
    }
};