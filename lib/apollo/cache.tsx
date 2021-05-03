import { makeVar, FieldPolicy, ReactiveVar, InMemoryCache } from '@apollo/client';
import { Location } from '../../model';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        location: {
          read() {
            return location();
          }
        }
      }
    }
  }
});

export const location: ReactiveVar<Location> = makeVar<Location>(Location.ptBr);
