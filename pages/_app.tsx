import React from 'react';
import '../styles/globals.css';
import Provider from '../lib/provider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
      ,
    </>
  );
}

export default MyApp;
