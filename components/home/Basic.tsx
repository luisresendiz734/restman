import { ChangeEventHandler, useState } from 'react';
import { useRequest } from '../../context/request';

const Basic = () => {
    const { request, dispatchRequest } = useRequest();

    const [user, setUser] = useState(
        request.authorization.need && request.authorization.type === 'basic'
            ? request.authorization.user
            : ''
    );
    const [password, setPassword] = useState(
        request.authorization.need && request.authorization.type === 'basic'
            ? request.authorization.password
            : ''
    );

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        const { name, value } = event.currentTarget;
        if (name === 'user') {
            setUser(value);
            dispatchRequest({
                type: 'update-auth',
                payload: {
                    need: true,
                    type: 'basic',
                    user: value,
                    password,
                },
            });
        }
        if (name === 'password') {
            setPassword(value);
            dispatchRequest({
                type: 'update-auth',
                payload: {
                    need: true,
                    type: 'basic',
                    user,
                    password: value,
                },
            });
        }
    };

    return (
        <div className="w-full">
            <div className="flex">
                <label
                    className=" w-6/12 sm:w-2/12 border-b border-r py-1 px-3 outline-none text-sm font-semibold"
                    htmlFor="user"
                >
                    Usuario
                </label>
                <input
                    className="w-full border-b py-1 px-3 outline-none text-sm"
                    type="text"
                    id="user"
                    placeholder="Usuario"
                    value={user}
                    name="user"
                    onChange={handleChange}
                />
            </div>
            <div className="flex">
                <label
                    className=" w-6/12 sm:w-2/12 border-b border-r py-1 px-3 outline-none text-sm font-semibold"
                    htmlFor="user"
                >
                    Contraseña
                </label>
                <input
                    className="w-full border-b py-1 px-3 outline-none text-sm"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Basic;
