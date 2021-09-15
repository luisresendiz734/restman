import { ChangeEventHandler, FC, useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useRequest } from '../../context/request';
import { IParam } from '../../types/request';

const Param: FC<{ param: IParam }> = ({ param }) => {
    const { dispatchRequest } = useRequest();

    const [state, setValue] = useState(param);

    const handleRemoveParam = () => {
        dispatchRequest({ type: 'remove-param', payload: param });
    };

    const handleChangeParam: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.currentTarget;
        setValue({ ...state, [name]: value });
        dispatchRequest({
            type: 'update-param',
            payload: { ...state, [name]: value },
        });
    };

    return (
        <div className="flex">
            <input
                className="py-1 px-3 outline-none border-b border-r border-l text-sm font-semibold w-5/12"
                type="text"
                placeholder="Parametro"
                value={state.param}
                name="param"
                onChange={handleChangeParam}
            />
            <input
                className="py-1 px-3 outline-none border-b border-r text-sm w-6/12"
                type="text"
                placeholder="Valor"
                value={state.value}
                name="value"
                onChange={handleChangeParam}
            />
            <button
                className="py-1 px-2 hover:bg-gray-100 text-gray-800 border-b w-1/12 flex items-center justify-center"
                onClick={handleRemoveParam}
            >
                <RiDeleteBin6Fill />
            </button>
        </div>
    );
};

export default Param;
