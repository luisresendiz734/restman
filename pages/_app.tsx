import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth';
import Layout from '../components/layout/Layout';
import { RequestProvider } from '../context/request';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <RequestProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RequestProvider>
        </AuthProvider>
    );
}
export default MyApp;
