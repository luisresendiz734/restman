import { Reducer, useReducer } from 'react';
import { Request, RequestAction } from '../types/request';

const initialState: Request = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    params: [],
    body: {},
    headers: [],
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
            params: state.params.filter((p) => p.id !== action.payload.id),
        };
    }

    if (action.type === 'update-param') {
        return {
            ...state,
            params: state.params.map((pay) => {
                if (pay.id === action.payload.id) {
                    return action.payload;
                }

                return pay;
            }),
        };
    }

    if (action.type === 'update-body') {
        return { ...state, body: JSON.parse(action.payload) };
    }

    if (action.type === 'update-auth') {
        return { ...state, authorization: action.payload };
    }

    if (action.type === 'add-header') {
        return { ...state, headers: [...state.headers, action.payload] };
    }

    if (action.type === 'remove-header') {
        return {
            ...state,
            headers: state.headers.filter(
                (header) => header.id !== action.payload.id
            ),
        };
    }

    if (action.type === 'update-header') {
        return {
            ...state,
            headers: state.headers.map((header) => {
                if (header.id === action.payload.id) {
                    return action.payload;
                }

                return header;
            }),
        };
    }

    return state;
};

const useRequestReducer = () => useReducer(reducer, initialState);

export { useRequestReducer, initialState };
