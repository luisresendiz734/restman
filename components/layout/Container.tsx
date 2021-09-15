import { FC } from 'react';

const Container: FC = ({ children }) => {
    return <div className="w-screen px-4 sm:px-8">{children}</div>;
};

export default Container;
