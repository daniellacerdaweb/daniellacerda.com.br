import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
