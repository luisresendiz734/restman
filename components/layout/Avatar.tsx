import { RiMore2Fill } from 'react-icons/ri';
import { useAuth } from '../../context/auth';

const Avatar = () => {
    const { user, login, logout } = useAuth();

    if (user) {
        return (
            <>
                <figure className="relative w-8" onClick={logout}>
                    <img
                        className="rounded-full"
                        src={user.photoURL || ''}
                        alt={user.displayName || ''}
                    />
                    <div className="absolute top-0 -right-1 h-3 w-3 border-2 border-white rounded-full bg-green-400 z-2"></div>
                </figure>
            </>
        );
    }

    return (
        <button
            className="bg-blue-500 text-white font-bold py-1 px-3 rounded"
            onClick={login}
        >
            Acceder
        </button>
    );
};

export default Avatar;
