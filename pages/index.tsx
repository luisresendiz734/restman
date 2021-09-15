import type { NextPage } from 'next';
import { useState } from 'react';
import Option from '../components/home/Option';
import Options from '../components/home/Options';
import Url from '../components/home/Url';

const Home: NextPage = () => {
    const [option, setOption] = useState(1);

    return (
        <div className="grid grid-rows-2 grid-flow-col">
            <div className="col-span-3 row-span-1 sm:col-span-2 sm:pr-4">
                <Url />
                <Options option={option} setOption={setOption} />
                <Option option={option} />
            </div>
            <div className="col-span-3 row-span-1 sm:col-span-2">
                <p>Response</p>
            </div>
            <div className="col-span-3 row-span-1 sm:row-span-2 sm:col-span-1 border-l">
                <p>Historial</p>
                <p>Colecciones</p>
            </div>
        </div>
    );
};

export default Home;
