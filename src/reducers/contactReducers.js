import {
    CONTACT_ADD_REQUEST,
    CONTACT_ADD_SUCCESS,
    CONTACT_ADD_FAIL
} from '../constants/contactConstants';

export const addContactReducer = (state={},action) => {
    switch (action.type) {
        case CONTACT_ADD_REQUEST:
            return {loading:true}
        case CONTACT_ADD_SUCCESS:
            return {loading:false, success:action.payload}
        case CONTACT_ADD_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}
