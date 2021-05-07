import { gql, useQuery } from '@apollo/client';
import { useGetLocale } from './useGetLocale';

const GET_STACKS = gql`
  query getPage($locale: String!) {
    stacksCollection(locale: $locale, order: order_DESC) {
      items {
        order
        title
        stacks
      }
    }
  }
`;

export const useGetStacks = () => {
  const locale = useGetLocale();
  return useQuery(GET_STACKS, { variables: { locale } });
};
