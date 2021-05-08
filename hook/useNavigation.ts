import { gql, useQuery } from '@apollo/client';
import { IPages } from '../model';
import { getNavigate } from './model/getNavigate';
import { useGetLocale } from './useLocale';

const GET_NAVIGATE = gql`
  query getNavigate($locale: String!) {
    pageCollection(locale: $locale, order: order_ASC) {
      items {
        path
        title
        order
      }
    }
  }
`;

export const useGetNavigate = () => {
  const locale = useGetLocale();
  return useQuery<getNavigate>(GET_NAVIGATE, { variables: { locale } });
};
