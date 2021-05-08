import { makeVar, ReactiveVar, InMemoryCache } from '@apollo/client';
import { Locale } from '../../model';

export const localeVar: ReactiveVar<Locale> = makeVar<Locale>(Locale.ptBr);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        locale: {
          read() {
            return localeVar();
          }
        }
      }
    }
  }
});
