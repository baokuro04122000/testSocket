import axios from 'axios';
import {
    CONTACT_ADD_REQUEST,
    CONTACT_ADD_SUCCESS,
    CONTACT_ADD_FAIL
} from '../constants/contactConstants';

export const addContact = ({adminId,name,phones}) =>async (dispatch, getState) => {
    dispatch({type:CONTACT_ADD_REQUEST,paylaod:adminId});
    const {
        userSignIn:{userInfo}
    } = getState();
    try {
        const {data} = await axios.post('/api/addContact',{adminId,name,phones},{
            headers:{
                authorization:`BEARER ${userInfo.token}`
            }
        });
        console.log(data);
        dispatch({type:CONTACT_ADD_SUCCESS,payload:data.message})
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({ type: CONTACT_ADD_FAIL, payload: message });
    }
}