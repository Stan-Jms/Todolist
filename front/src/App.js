import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
