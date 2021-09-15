import { FormEventHandler, ChangeEventHandler } from 'react';
import { useRequest } from '../../context/request';

const Url = () => {
    const { request, dispatchRequest } = useRequest();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(request);
    };

    const handleMethodChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        dispatchRequest({
            type: 'update-method',
            payload: e.currentTarget.value,
        });
    };

    const handleUrlChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchRequest({
            type: 'update-url',
            payload: e.currentTarget.value,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center mt-6 w-full"
        >
            <select
                className="rounded border py-1 px-2 font-semibold text-gray-800 h-8 outline-none"
                value={request.method}
                onChange={handleMethodChange}
            >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input
                className="outline-none w-full sm:flex-1 sm:mx-2 rounded border py-1 px-3 text-gray-800 text-sm tracking-wide font-semibold my-2 sm:m-none"
                type="text"
                placeholder="URL"
                value={request.url}
                onChange={handleUrlChange}
            />
            <button
                className="border border-blue-500 bg-blue-500 text-white font-bold text-sm py-1 px-3 rounded"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
};

export default Url;
