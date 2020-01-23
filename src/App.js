import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './App.css';
import Launches from './components/launches'

import logo from './spacex.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} alt='SpaceX' style={{ width: 300, display: 'block', margin: 'auto', marginTop: '50px' }} />
      </div>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
