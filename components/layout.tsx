import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Navigation from './navigation';
import { motion } from 'framer-motion';

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navigation />
      </header>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {children}
      </motion.section>
    </div>
  );
}
