import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSucccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/api/user/login", user);
        dispatch(loginSucccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}