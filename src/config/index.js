import { ApolloClient, InMemoryCache } from '@apollo/client';
import { favoritesVar } from '../graph/vars';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favorites : {
          read() {
            return favoritesVar()
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  // uri: 'http://54.179.180.114:4000',
  // uri: 'http://localhost:3000',
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache
});
export default client
