import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

const Contact = () => (
  <Layout>
    <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse" id="contact">
      <div className="w-full md:w-3/6 flex items-center">
        <div className="w-full md:w-4/5 m-auto">
          <div className="mx-3 mt-5 ">
            <motion.h1
              className="text-5xl font-semibold mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
              Contact
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
              Imagine if you never had to write another Todo App example ever again. Now you don't
              have to imagine.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
