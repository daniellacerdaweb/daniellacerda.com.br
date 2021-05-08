import { gql, useQuery } from '@apollo/client';
import { getStacks } from './model/getStacks';
import { useGetLocale } from './useLocale';

const GET_STACKS = gql`
  query getStacks($locale: String!) {
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
  return useQuery<getStacks>(GET_STACKS, { variables: { locale } });
};
