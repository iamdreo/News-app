import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";


import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
             
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;