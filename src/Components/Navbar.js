import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <div className="navigation">
                <p>Exercice React</p>
                <Link to="/Todolist">Todolist</Link>
                <Link to="/GradColor">GradColor</Link>
                <Link to="/">Home</Link>

            </div>
        </>
    );
}

export default Navbar;