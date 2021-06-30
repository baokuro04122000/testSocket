import {
    USER_SEND_MESSAGE_REQUEST,
    USER_SEND_MESSAGE_SUCCESS,
    USER_SEND_MESSAGE_FAIL
} from '../constants/userConstants';
export const messageReducer = (state={}, action) => {
    switch (action.type) {
        case USER_SEND_MESSAGE_REQUEST:
            return {loading:true}
        case USER_SEND_MESSAGE_SUCCESS:
            return {loading:false, data:action.payload}
        case USER_SEND_MESSAGE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}