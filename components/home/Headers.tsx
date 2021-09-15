import { nanoid } from 'nanoid';
import { RiAddFill } from 'react-icons/ri';
import { useRequest } from '../../context/request';
import Header from './Header';

const Headers = () => {
    const { request, dispatchRequest } = useRequest();
    const handleAddRequest = () => {
        dispatchRequest({
            type: 'add-header',
            payload: {
                id: nanoid(3),
                header: '',
                value: '',
            },
        });
    };
    return (
        <div className="border h-full w-full flex flex-col">
            {request.headers.length > 0 &&
                request.headers.map((header) => (
                    <Header key={header.id} header={header} />
                ))}
            <button
                className="border-b bg-gray-100 hover:bg-gray-200 py-1 flex items-center justify-center text-sm"
                onClick={handleAddRequest}
            >
                <RiAddFill />
                <span className="font-semibold ml-2">
                    Agregar nuevo encabezado
                </span>{' '}
            </button>
        </div>
    );
};

export default Headers;
