import { gql, useQuery } from '@apollo/client';

const GET_PAGE = gql`
  query getPage($id: String!) {
    page(id: $id) {
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
  console.log(useGetPage);
  const data = useQuery(GET_PAGE, { variables: { id }, fetchPolicy: 'no-cache' });
  return data;
};
