import {
    ASSIGNMENT_ADD_REQUEST,
    ASSIGNMENT_ADD_SUCCESS,
    ASSIGNMENT_ADD_FAIL
} from '../constants/assignmentConstants';

export const addAssignmentReducer = (state={},action) => {
    switch (action.type) {
        case ASSIGNMENT_ADD_REQUEST:
            return {loading:true}
        case ASSIGNMENT_ADD_SUCCESS:
            return {loading:false, success:action.payload}
        case ASSIGNMENT_ADD_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}