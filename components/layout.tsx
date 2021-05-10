import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './navigation';
import { useGetNavigate } from '../hook/useNavigation';

const Layout = ({ children, title = 'Daniel Lacerda' }) => {
  const { data } = useGetNavigate();
  return (
    <div className="h-screen ">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex flex-col h-full md:mx-20 ">
        {data && <Navigation listaNavigate={data?.pageCollection.items} />}
        {children}
      </section>
    </div>
  );
};

export default Layout;
