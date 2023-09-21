import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import './App.css';
import NavBar from './components/NavBar';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-gorli'
  }),
  cache: new InMemoryCache()
});

const { provider, webSocketProvider } = configureChains([chain.goerli], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
});

function App() {
  return (
    <WagmiConfig client={client}>
      <NavBar />
    </WagmiConfig>
  );
}

export default App;
