import { FC } from 'react';
import Authorization from './Authorization';
import Body from './Body';
import Headers from './Headers';
import Params from './Params';

const Option: FC<{ option: number }> = ({ option }) => {
    return (
        <div className="border-t border-b my-2">
            {option === 1 && <Params />}
            {option === 2 && <Body />}
            {option === 3 && <Headers />}
            {option === 4 && <Authorization />}
        </div>
    );
};

export default Option;