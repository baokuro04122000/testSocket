import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';


import {userSigninReducer} from './reducers/userReducers';
import {addContactReducer} from './reducers/contactReducers';
import {addAssignmentReducer} from './reducers/assignmentReducers';
const initialState = {
    userSignIn:{userInfo:localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null}  
};

const reducer = combineReducers({
    userSignIn:userSigninReducer,
    addContact:addContactReducer,
    addAssignment:addAssignmentReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;