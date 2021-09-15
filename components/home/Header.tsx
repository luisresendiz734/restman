import { ChangeEventHandler, FC, useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useRequest } from '../../context/request';
import { IHeader } from '../../types/request';

const Header: FC<{ header: IHeader }> = ({ header }) => {
    const { dispatchRequest } = useRequest();
    const [state, setState] = useState(header);

    const handleChangeParam: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.currentTarget;
        setState({ ...state, [name]: value });
        dispatchRequest({
            type: 'update-header',
            payload: { ...state, [name]: value },
        });
    };

    const handleRemoveHeader = () => {
        dispatchRequest({ type: 'remove-header', payload: header });
    };

    return (
        <div className="flex">
            <input
                className="py-1 px-3 outline-none border-b border-r border-l text-sm font-semibold w-5/12"
                type="text"
                placeholder="Encabezado"
                value={state.header}
                name="header"
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
                onClick={handleRemoveHeader}
            >
                <RiDeleteBin6Fill />
            </button>
        </div>
    );
};

export default Header;
