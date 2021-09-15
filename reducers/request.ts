import { Reducer, useReducer } from 'react';
import { Request, RequestAction } from '../types/request';

const initialState: Request = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    params: [],
    body: {},
    authorization: { need: false },
};

const reducer: Reducer<Request, RequestAction> = (state, action) => {
    if (action.type === 'update-method') {
        return { ...state, method: action.payload };
    }

    if (action.type === 'update-url') {
        return { ...state, url: action.payload };
    }

    if (action.type === 'add-param') {
        return { ...state, params: [...state.params, action.payload] };
    }

    if (action.type === 'remove-param') {
        return {
            ...state,
            params: state.params.filter(
                (p) => p.param !== action.payload.param
            ),
        };
    }

    if (action.type === 'update-param') {
        return {
            ...state,
            params: state.params.map((pay) => {
                if (pay.param === action.payload.param) {
                    return action.payload;
                }

                return pay;
            }),
        };
    }

    return state;
};

const useRequestReducer = () => useReducer(reducer, initialState);

export { useRequestReducer, initialState };
