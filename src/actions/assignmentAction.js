import axios from 'axios';
import {
    ASSIGNMENT_ADD_REQUEST,
    ASSIGNMENT_ADD_SUCCESS,
    ASSIGNMENT_ADD_FAIL
} from '../constants/assignmentConstants';

export const addAssignment = ({adminId,deviceId,actions,contacts,context}) =>async (dispatch, getState) => {
    dispatch({type:ASSIGNMENT_ADD_REQUEST,payload:adminId});
    const {
        userSignIn:{userInfo}
    } = getState();
    try {
        const {data} = await axios.post('/api/addAssignment',{adminId,deviceId,actions,contacts,context},{
            headers:{
                authorization:`BEARER ${userInfo.token}`
            }
        });
        dispatch({type:ASSIGNMENT_ADD_SUCCESS,payload:{message:data.message,assignmented:data.assignmented}})
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch({ type: ASSIGNMENT_ADD_FAIL, payload: message });
    }
}
