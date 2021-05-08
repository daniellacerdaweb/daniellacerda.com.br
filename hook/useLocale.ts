import { gql, useQuery } from '@apollo/client';
import { localeVar } from '../lib/apollo/cache';
import { Locale } from '../model';
import { getLocale } from './model/getLocale';

const GET_LOCALE = gql`
  query getLocale {
    locale @client
  }
`;

export const useGetLocale = () => {
  const { data } = useQuery<getLocale>(GET_LOCALE);
  return data?.locale;
};

export const useSetLocale = (locale: Locale) => {
  localeVar(locale);
};
