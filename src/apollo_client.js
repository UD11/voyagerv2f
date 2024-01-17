import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  // uri: 'http://localhost:8000/graphql',
  // uri: 'http://43.204.29.31/graphql',
  uri: 'https://web-production-dabe.up.railway.app/graphql',
  // uri: 'http://3.110.123.32/graphql',

});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  };
});


const link = ApolloLink.from([authLink, httpLink]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
