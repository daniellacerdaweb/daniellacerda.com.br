import { AnimateSharedLayout } from 'framer-motion';
import { ApolloProvider } from '@apollo/client/react';
import client from '../lib/apollo/client';

const Provider = ({ children }) => (
  <>
    <ApolloProvider client={client}>
      <AnimateSharedLayout>{children}</AnimateSharedLayout>
    </ApolloProvider>
  </>
);

export default Provider;
