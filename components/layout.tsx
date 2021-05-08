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
      {data && <Navigation listaNavigate={data?.pageCollection.items} />}
      <section className="flex flex-col w-12/12 mx-20">{children}</section>
    </div>
  );
};

export default Layout;
