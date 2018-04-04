import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import ProductListContainer from "./containers/ProductListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exct component={ProductListContainer} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
