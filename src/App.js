import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Blog from "./pages/blog/blog";
import PageNotFound from "./pages/404";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
