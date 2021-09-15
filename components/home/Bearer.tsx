import { ChangeEventHandler, useState } from 'react';
import { useRequest } from '../../context/request';

const Bearer = () => {
    const { request, dispatchRequest } = useRequest();

    const [token, setToken] = useState(
        request.authorization.need && request.authorization.type === 'bearer'
            ? request.authorization.token
            : ''
    );

    const onchange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setToken(event.currentTarget.value);
        dispatchRequest({
            type: 'update-auth',
            payload: {
                need: true,
                type: 'bearer',
                token,
            },
        });
    };

    return (
        <div className="w-full flex">
            <label
                className="w-6/12 sm:w-2/12 border-b border-r py-1 px-3 outline-none text-sm font-semibold"
                htmlFor="token"
            >
                Bearer Token
            </label>
            <input
                className="w-full border-b py-1 px-3 text-sm outline-none"
                type="text"
                id="token"
                value={token}
                onChange={onchange}
                placeholder="Bearer Token"
            />
        </div>
    );
};

export default Bearer;
