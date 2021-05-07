import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useGetLocale } from './useGetLocale';

const GET_PAGE = gql`
  query getPage($path: String!, $locale: String!) {
    pageCollection(where: { path: $path }, locale: $locale) {
      items {
        title
        contents {
          json
        }
        image {
          url
        }
      }
    }
  }
`;

export const useGetPage = () => {
  const router = useRouter().route.replace('/', '');
  const locale = useGetLocale();
  return useQuery(GET_PAGE, { variables: { path: router, locale } });
};
