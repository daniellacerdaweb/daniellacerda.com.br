import React from 'react';
import '../styles/globals.css';
import Provider from '../lib/provider';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }:any) {
  return (
    <>
      <Provider>
        <Layout>

          <Component {...pageProps} />
        </Layout>
      </Provider>
      ,
    </>
  );
}

export default MyApp;
