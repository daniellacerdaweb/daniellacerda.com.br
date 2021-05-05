import { gql, useQuery } from '@apollo/client';
import { IPages, Locale } from '../model';
import { useRouter } from 'next/router';
import { pagesVar } from '../lib/apollo/cache';

const getListaPages = gql`
  query getListaPages {
    listaPages @client
  }
`;

interface IGetListaPages {
  listaPages: IPages[];
}

export const useGetIdPage = () => {
  const router = useRouter();
  const getId = pagesVar().find((pages) => pages.path === router.route);
  return getId;
};
