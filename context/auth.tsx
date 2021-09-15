import { createContext, FC, useContext, useEffect, useState } from 'react';
import {
    getAuth,
    User,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import app from '../services/firebase';

interface IAuth {
    user: User | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<IAuth>({
    user: null,
    login: () => {},
    logout: () => {},
});

const auth = getAuth(app);

const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            console.error('Sign in failed', error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Sign out failed', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (next) => {
            setUser(next);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
