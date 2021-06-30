import axios from 'axios';
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
} from '../constants/userConstants';

export const signin = (username,password) =>async (dispatch) => {
    dispatch({type:USER_SIGNIN_REQUEST});
    try{
        const {data} = await axios.post('/api/signin',{username,password});
        dispatch({type:USER_SIGNIN_SUCCESS, payload:data});
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch(err){
        const message = err.response && err.response.data.message
        ? err.response.data.message
        :err.message;
        dispatch({type:USER_SIGNIN_FAIL,payload:message})
    }
};


export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type:USER_SIGNOUT});
    document.location.href = '/';
}
