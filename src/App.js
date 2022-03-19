import React from "react";
import Home from "./pages/Home";
import Todolist from "./Components/Todolist_form";
import GradColor from "./pages/Gradcolor";
import {BrowserRouter,Route,Routes as Switch} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home/>}/>
        <Route path="/Todolist" element={<Todolist/>}/>
        <Route path="/GradColor" element={<GradColor/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
