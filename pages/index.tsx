import type { NextPage } from 'next';
import { useState } from 'react';
import Option from '../components/home/Option';
import Options from '../components/home/Options';
import Url from '../components/home/Url';

const Home: NextPage = () => {
    const [option, setOption] = useState(1);

    return (
        <div>
            <Url />
            <Options option={option} setOption={setOption} />
            <Option option={option} />
        </div>
    );
};

export default Home;
