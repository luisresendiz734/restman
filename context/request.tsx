import { createContext, Dispatch, FC, useContext } from 'react';
import { useRequestReducer, initialState } from '../reducers/request';
import { Request, RequestAction } from '../types/request';

interface IRequest {
    request: Request;
    dispatchRequest: Dispatch<RequestAction>;
}

const RequestContext = createContext<IRequest>({
    request: initialState,
    dispatchRequest: () => {},
});

const RequestProvider: FC = ({ children }) => {
    const [request, dispatchRequest] = useRequestReducer();

    return (
        <RequestContext.Provider value={{ request, dispatchRequest }}>
            {children}
        </RequestContext.Provider>
    );
};

const useRequest = () => useContext(RequestContext);

export { RequestProvider, useRequest };
