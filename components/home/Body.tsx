import { useEffect, useState } from 'react';
import Editor, { OnValidate } from '@monaco-editor/react';
import { useRequest } from '../../context/request';

const Body = () => {
    const { request, dispatchRequest } = useRequest();
    const [state, setState] = useState(JSON.stringify(request.body, null, 4));
    const [markers, setMarkers] = useState<Array<any>>([]);

    const handleValidate: OnValidate = (currentMarkers) => {
        setMarkers(currentMarkers);
    };

    useEffect(() => {
        if (!markers.length) {
            dispatchRequest({
                type: 'update-body',
                payload: state,
            });
        }
    }, [markers]);

    return (
        <div className="grid grid-cols-1 grid-rows-1 h-full overflow-y-scroll overflow-x-hidden">
            <Editor
                className="h-full"
                value={state}
                onValidate={handleValidate}
                onChange={(v) => setState(v || '{}')}
                defaultLanguage="json"
            />
        </div>
    );
};

export default Body;
