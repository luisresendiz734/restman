import { ChangeEventHandler, useState } from 'react';
import { useRequest } from '../../context/request';
import Basic from './Basic';
import Bearer from './Bearer';

const Authorization = () => {
    const { request, dispatchRequest } = useRequest();
    const [type, setType] = useState(
        request.authorization.need ? request.authorization.type : 'none'
    );

    const handleChangeType: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setType(event.currentTarget.value);
        if (type === 'none') {
            dispatchRequest({
                type: 'update-auth',
                payload: {
                    need: false,
                },
            });
        }
    };

    return (
        <div className="h-full w-full flex flex-col">
            <div className="flex items-center mb-2">
                <p className="text-sm font-semibold mr-2">
                    Tipo de autorizacion
                </p>
                <select
                    className="rounded border px-2 text-sm font-semibold text-gray-800 h-6 outline-none"
                    value={type}
                    onChange={handleChangeType}
                >
                    <option value="none">None</option>
                    <option value="basic">Basic</option>
                    <option value="bearer">Bearer</option>
                </select>
            </div>
            <div className="border flex-1">
                {type === 'basic' && <Basic />}
                {type === 'bearer' && <Bearer />}
            </div>
        </div>
    );
};

export default Authorization;
