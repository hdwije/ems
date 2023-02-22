import '../styles/globals.css';
import MainLayout from '@/layouts/MainLayout';
import { Provider } from 'react-redux';

import store from '../store/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
