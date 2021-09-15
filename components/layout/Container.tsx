import { FC } from 'react';

const Container: FC = ({ children }) => {
    return <div className="w-screen px-4">{children}</div>;
};

export default Container;
