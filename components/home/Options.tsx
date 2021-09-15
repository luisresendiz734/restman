import { Dispatch, FC, SetStateAction } from 'react';

const Options: FC<{
    option: number;
    setOption: Dispatch<SetStateAction<number>>;
}> = ({ option, setOption }) => {
    return (
        <div className="mt-6">
            <button
                className={`mr-2 ${
                    option === 1 ? 'border-blue-500 border-b-4 bg-gray-100' : ''
                } py-0.5 px-2 text-gray-800 font-bold rounded-t`}
                onClick={() => setOption(1)}
            >
                Parametros
            </button>
            <button
                className={`mr-2 ${
                    option === 2 ? 'border-blue-500 border-b-4 bg-gray-100' : ''
                } py-0.5 px-2 text-gray-800 font-bold rounded-t`}
                onClick={() => setOption(2)}
            >
                Cuerpo
            </button>
            <button
                className={`mr-2 ${
                    option === 3 ? 'border-blue-500 border-b-4 bg-gray-100' : ''
                } py-0.5 px-2 text-gray-800 font-bold rounded-t`}
                onClick={() => setOption(3)}
            >
                Encabezados
            </button>
            <button
                className={`mr-2 ${
                    option === 4 ? 'border-blue-500 border-b-4 bg-gray-100' : ''
                } py-0.5 px-2 text-gray-800 font-bold rounded-t`}
                onClick={() => setOption(4)}
            >
                Autorizacion
            </button>
        </div>
    );
};

export default Options;
