import { gql, useQuery } from '@apollo/client';
import { useGetLocale } from './useGetLocale';

const GET_PAGE = gql`
  query getPage($id: String!, $locale: String!) {
    page(id: $id, locale: $locale) {
      title
      contents {
        json
      }
      image {
        url
      }
    }
  }
`;

export const useGetPage = (id: string) => {
  const locale = useGetLocale();
  return useQuery(GET_PAGE, { variables: { id, locale } });
};
