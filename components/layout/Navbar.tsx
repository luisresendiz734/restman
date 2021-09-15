import Container from './Container';
import Link from 'next/link';
import Avatar from './Avatar';
import { RiSettings4Fill, RiContrastFill } from 'react-icons/ri';

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <header className="flex justify-between items-center">
                    <Link href="/">
                        <a>
                            <h1 className="font-bold uppercase text-gray-800">
                                Restman <span className="text-sm">🚀</span>
                            </h1>
                        </a>
                    </Link>
                    <div className="flex justify-end items-center flex-1">
                        <div className="flex my-2 mr-2">
                            <button className="p-2 text-gray-800 mx-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                                <RiContrastFill />
                            </button>
                            <Link href="/settings">
                                <a className="p-2 text-gray-800 mx-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                                    <RiSettings4Fill />
                                </a>
                            </Link>
                        </div>
                        <Avatar />
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Navbar;
