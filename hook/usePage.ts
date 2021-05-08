import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { getPage } from './model/getPage';
import { useGetLocale } from './useLocale';

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
  return useQuery<getPage>(GET_PAGE, { variables: { path: router, locale } });
};
