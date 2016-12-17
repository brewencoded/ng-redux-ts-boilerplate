import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../constants/authConstants';

class initialState {
    errors: Array<any> = null;
    authenticated: Boolean = false;
    authenticating: Boolean = false;
    loggingOut: Boolean = false;
    registering: Boolean = false;
    authToken: String = null;
    user: any = {};
}
import Action from '../types/Action';

export default function(state=new initialState, action: Action): Object {
    switch (action.type) {
        case LOGIN_PENDING:
            return Object.assign({}, state, {
                authenticating: true
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                authenticating: false,
                authenticated: true,
                errors: null,
                authToken: action.payload.token,
                user: action.payload.user
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                authenticating: false,
                errors: action.payload.errors
            });
        case LOGOUT_PENDING:
            return Object.assign({}, state, {
                authenticated: false,
                loggingOut: true,
                authToken: null,
                user: {}
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                loggingOut: false,
                errors: null
            });
        case LOGOUT_FAILURE:
            return Object.assign({}, state, {
                loggingOut: false,
                errors: action.payload.errors
            });
        default:
            return state;
    }
};
