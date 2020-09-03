import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/speakers" component={Speakers} />
        <Route path="/sponsors" component={Sponsors} />
      </Switch>
    </Router>
  );
}

export default App;
