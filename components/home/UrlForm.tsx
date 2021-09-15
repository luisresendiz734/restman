import { FormEventHandler, ChangeEventHandler } from 'react';
import { useRequest } from '../../context/request';

const UrlForm = () => {
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
        <form onSubmit={handleSubmit}>
            <select value={request.method} onChange={handleMethodChange}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input
                className="border w-1/2"
                type="text"
                placeholder="URL"
                value={request.url}
                onChange={handleUrlChange}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default UrlForm;
