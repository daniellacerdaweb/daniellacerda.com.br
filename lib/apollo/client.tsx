import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { cache } from './cache';

const httpLink = createHttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/ysanazl5ule2'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: `Bearer Ek2cj8esfFx6or1JeKpZVxcI22w0sGOsk46-x9xuHY4`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

export default client;
