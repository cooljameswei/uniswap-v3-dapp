import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider as ReactApolloProvider } from 'react-apollo';

import './index.css';
import App, { apolloClient } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactApolloProvider client={apolloClient}>
    <App />
  </ReactApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
