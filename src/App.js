import React from "react";
import Home from "./pages/Home";
import {BrowserRouter,Route,Routes as Switch} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
