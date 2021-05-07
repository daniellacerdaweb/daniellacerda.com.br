import { gql, useQuery } from '@apollo/client';
import { IPages } from '../model';
import { useGetLocale } from './useGetLocale';

const GET_NAVIGATE = gql`
  query getNavigate($locale: String!) {
    pageCollection(locale: $locale) {
      items {
        sys {
          id
        }
        title
        order
      }
    }
  }
`;

export const useGetNavigate = () => {
  const locale = useGetLocale();
  const { data, ...props } = useQuery(GET_NAVIGATE, { variables: { locale } });
  const navigationData = data ? parseNavigation(data) : null;
  return { data: navigationData, ...props };
};

function parseNavigation(data) {
  const navigation = clearNavigation(data);
  const sortNavigationByOrder = sortNavigation(navigation);
  return sortNavigationByOrder;
}

function clearNavigation(data: any): IPages[] {
  return data.pageCollection.items.map(({ title, order, sys }) => ({
    order,
    id: sys.id,
    title,
    path: `/${title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')}`
  }));
}

function sortNavigation(navigation): IPages[] {
  return navigation.sort((a, b) => {
    if (a.order < b.order) return -1;
    if (a.order > b.order) return 1;
    return 0;
  });
}
