import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Homepage from './components/Pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Route path="/" exct component={Homepage}></Route>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
