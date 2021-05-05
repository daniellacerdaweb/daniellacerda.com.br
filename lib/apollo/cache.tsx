import { makeVar, ReactiveVar, InMemoryCache } from '@apollo/client';
import { IPages, Locale } from '../../model';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        locale: {
          read() {
            return localeVar();
          }
        },
        listaPages: {
          read() {
            return pagesVar();
          }
        }
      }
    }
  }
});

export const localeVar: ReactiveVar<Locale> = makeVar<Locale>(Locale.ptBr);
export const pagesVar: ReactiveVar<IPages[]> = makeVar<IPages[]>([]);