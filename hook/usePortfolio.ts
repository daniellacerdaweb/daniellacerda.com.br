import { gql, useQuery } from '@apollo/client';
import { getAllPortfolio } from './model/getAllPortfolio';
import { getPortfolio } from './model/getPortfolio';
import { useGetLocale } from './useLocale';

const GET_PORTFOLIO = gql`
  query getPortfolio($path: String!, $locale: String!) {
    portfolioCollection(where: { path: $path }, locale: $locale) {
      items {
        title
        image {
          url
        }
        stacks
        order
        git
        site
        path
        contents {
          json
        }
      }
    }
  }
`;

export const useGetPortfolio = (path: string) => {
  const locale = useGetLocale();
  return useQuery<getPortfolio>(GET_PORTFOLIO, { variables: { path, locale } });
};

const GET_ALL_PORTFOLIO = gql`
  query getAllPortfolio {
    portfolioCollection(order: order_ASC) {
      items {
        title
        image {
          url
        }
        stacks
        order
        git
        site
        path
        contents {
          json
        }
      }
    }
  }
`;

export const useGetAllPortfolio = () => {
  return useQuery<getAllPortfolio>(GET_ALL_PORTFOLIO);
};
