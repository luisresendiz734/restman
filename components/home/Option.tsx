import { FC } from 'react';
import Authorization from './Authorization';
import Body from './Body';
import Headers from './Headers';
import Params from './Params';

const Option: FC<{ option: number }> = ({ option }) => {
    return (
        <div className="my-2 h-56 overflow-y-scroll overflow-x-hidden">
            {option === 1 && <Params />}
            {option === 2 && <Body />}
            {option === 3 && <Headers />}
            {option === 4 && <Authorization />}
        </div>
    );
};

export default Option;
