declare const Buffer;

import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../constants/authConstants';
import {
    NAVIGATE
} from '../constants/navigationContants';
import axios from 'axios';

export const login = function ({ email, password }): Function {
    const encodedCredentials: String = new Buffer(`${email}:${password}`).toString('base64');
    return function(dispatch: Function): void {
        dispatch({
            type: LOGIN_PENDING
        });
        try {
            const loginResponse = {
                success: true,
                token: 'token_123',
                user: {
                    name: 'test',
                    email: 'test@test.com'
                }
            };
            if (loginResponse.success) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        token: loginResponse.token,
                        user: loginResponse.user
                    }
                });
                dispatch({
                    type: NAVIGATE,
                    payload: {
                        to: 'profile',
                        params: null
                    }
                })
            }
        } catch (e) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: {
                    errors: [e]
                }
            });
        }
    }
}

export const logout = function (): Function {
    return function(dispatch: Function): void {
        dispatch({
            type: LOGOUT_PENDING
        });
        try {
            const loginResponse = {
                success: true
            };
            if (loginResponse.success) {
                dispatch({
                    type: LOGOUT_SUCCESS
                });
                dispatch({
                    type: NAVIGATE,
                    payload: {
                        to: 'root',
                        params: null
                    }
                })
            }
        } catch (e) {
            dispatch({
                type: LOGOUT_FAILURE,
                payload: {
                    errors: [e]
                }
            });
        }
    }
}
