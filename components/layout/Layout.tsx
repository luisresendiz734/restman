import { FC } from 'react';
import Container from './Container';
import Navbar from './Navbar';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container>
                <main>{children}</main>
            </Container>
        </>
    );
};

export default Layout;
