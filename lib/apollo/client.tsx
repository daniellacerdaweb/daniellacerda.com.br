import { ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { cache } from './cache';

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACES_CONTENTFUL}`,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_CONTENTFUL}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
