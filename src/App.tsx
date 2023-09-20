import React from 'react';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import './App.css';
import Header from './components/Header';
import SwapCard from './pages/SwapCard';

const { provider, webSocketProvider } = configureChains([chain.goerli], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Header />
      <SwapCard />
    </WagmiConfig>
  );
}

export default App;
