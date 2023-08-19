import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
  return (
    <Provider store={store}>
  <div className='app-container'>
 <Navbar />
    <div className='content-container'>
    <Sidebar />
      <Link href='/' passHref>

        <div>
        {router.pathname === '/' ? 'Home' : 'Go to Home'}
        </div>
    </Link>
    <Component {...pageProps} />
    </div>
    </div>
    </Provider>
  );

}

export default MyApp
