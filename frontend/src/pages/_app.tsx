import type { AppProps } from 'next/app';

import {Provider} from 'react-redux';
import {store} from '../redux/store'; 

import { globalStyles } from '../styles/global';
import { Container} from '../styles/pages/app';
import { GlobalContentApp } from './_globalContent';

globalStyles();

export default function App({ Component, pageProps }: AppProps) { 

  return (
    <Container>
      <Provider store={store}>
        <GlobalContentApp/>
        <Component {...pageProps} />       
      </Provider>
    </Container>
  )
}
