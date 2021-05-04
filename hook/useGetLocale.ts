import { gql, useQuery } from '@apollo/client';
import { Locale } from '../model';

const getLocale = gql`
  query getLocale {
    locale @client
  }
`;

interface IGetLocale {
  locale: Locale;
}

export const useGetLocale = () => {
  const { data } = useQuery<IGetLocale>(getLocale);
  return data?.locale;
};
