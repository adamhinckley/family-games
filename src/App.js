import React from "react";
import "./App.css";
import Twister from "./components/twister";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./components/home";
import bingo from "./components/bingo";

function App() {
  return (
    // <div className="App">
    //   <Twister />
    //   <Footer />
    // </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/twister" component={Twister} />
      <Route exact path="/bingo" component={bingo} />
    </Switch>
  );
}

export default withRouter(App);
