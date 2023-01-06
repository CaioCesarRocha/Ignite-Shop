import type { AppProps } from 'next/app';

import {Provider} from 'react-redux';
import {store} from '../redux/store'; 

import { globalStyles } from '../styles/global';
import { Container} from '../styles/pages/app';
import { Header } from '../components/header';


globalStyles();

export default function App({ Component, pageProps }: AppProps) { 

  return (
    <Container>
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}
