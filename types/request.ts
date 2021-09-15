interface INoAuth {
    need: false;
}

interface IBasicAuth {
    need: true;
    type: 'basic';
    user: string;
    password: string;
}

interface IBearerAuth {
    need: true;
    type: 'bearer';
    token: string;
}

type AuthType = INoAuth | IBasicAuth | IBearerAuth;

interface IParam {
    id: string;
    param: string;
    value: string;
}

interface IHeader {
    id: string;
    header: string;
    value: string;
}

type Request = {
    method: string;
    url: string;
    params: Array<IParam>;
    body: any;
    authorization: AuthType;
    headers: Array<IHeader>;
};

interface IRequestBasicAction {
    type: 'update-method' | 'update-url';
    payload: string;
}

interface IRequestParamAction {
    type: 'add-param' | 'remove-param' | 'update-param';
    payload: IParam;
}

interface IRequestBodyAction {
    type: 'update-body';
    payload: string;
}

interface IRequestAuthAction {
    type: 'update-auth';
    payload: AuthType;
}

interface IRequestHeadersAction {
    type: 'add-header' | 'remove-header' | 'update-header';
    payload: IHeader;
}

type RequestAction =
    | IRequestBasicAction
    | IRequestParamAction
    | IRequestBodyAction
    | IRequestAuthAction
    | IRequestHeadersAction;

export type { Request, RequestAction, IParam, IHeader };
