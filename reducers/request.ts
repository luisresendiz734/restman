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

    return state;
};

const useRequestReducer = () => useReducer(reducer, initialState);

export { useRequestReducer, initialState };
