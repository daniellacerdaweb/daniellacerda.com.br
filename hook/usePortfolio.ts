import { gql, useQuery } from '@apollo/client';
import { getPortfolio } from './model/getPortfolio';

const GET_PORTFOLIO = gql`
  query getPortfolio {
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
        contents {
          json
        }
      }
    }
  }
`;

export const usegetPortfolio = () => {
  return useQuery<getPortfolio>(GET_PORTFOLIO);
};
