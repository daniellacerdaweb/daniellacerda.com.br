import { gql, useQuery } from '@apollo/client';
import { Location } from '../model';

const getLocation = gql`
  query getLocation {
    location @client
  }
`;

interface IGetLocation {
  location: Location;
}

export const useGetLocation = () => {
  const { data } = useQuery<IGetLocation>(getLocation);
  return data?.location;
};
