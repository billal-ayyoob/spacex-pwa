import * as React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
    uri: 'https://spacexdata.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

ReactDom.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);