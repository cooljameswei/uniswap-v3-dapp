import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.css';
import App, { apolloClient } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

reportWebVitals();
