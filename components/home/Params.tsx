import { nanoid } from 'nanoid';
import { RiAddFill } from 'react-icons/ri';
import { useRequest } from '../../context/request';
import Param from './Param';

const Params = () => {
    const { request, dispatchRequest } = useRequest();

    const handleAddParam = () => {
        dispatchRequest({
            type: 'add-param',
            payload: { id: nanoid(3), param: '', value: '' },
        });
    };

    return (
        <div className="border h-full w-full flex flex-col">
            {request.params.length > 0 &&
                request.params.map((param) => (
                    <Param key={param.id} param={param} />
                ))}
            <button
                className="border-b bg-gray-100 hover:bg-gray-200 py-1 flex items-center justify-center text-sm"
                onClick={handleAddParam}
            >
                <RiAddFill />
                <span className="font-semibold ml-2">
                    Agregar nuevo parametro
                </span>{' '}
            </button>
        </div>
    );
};

export default Params;
