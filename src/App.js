import React from "react";
import "./App.css";
import Twister from "./components/twister";
import { Route, Switch, withRouter } from "react-router-dom";
// import Home from "./components/home";
import bingo from "./components/bingo";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
function App() {
  return (
    // <div className="App">
    //   <Twister />
    //   <Footer />
    // </div>
    <Container>
      <Switch>
        <Route exact path="/" component={bingo} />
        <Route exact path="/twister" component={Twister} />
        <Route exact path="/bingo" component={bingo} />
      </Switch>
    </Container>
  );
}

export default withRouter(App);
