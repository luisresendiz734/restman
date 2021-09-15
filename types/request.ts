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

type RequestAction = IRequestBasicAction | IRequestParamAction;

export type { Request, RequestAction, IParam };
