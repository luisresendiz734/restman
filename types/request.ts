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

type Request = {
    method: string;
    url: string;
    params: Array<IParam>;
    body: any;
    authorization: AuthType;
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

type RequestAction =
    | IRequestBasicAction
    | IRequestParamAction
    | IRequestBodyAction;

export type { Request, RequestAction, IParam };
