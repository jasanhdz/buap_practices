import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Bank from "../pages/Bank";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bank_expert" component={Bank} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
