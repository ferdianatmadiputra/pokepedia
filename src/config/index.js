import { ApolloClient, InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache
});
export default client
