import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <div className="navigation">
                <p>Todolist</p>
                <Link to="/">Home</Link>

            </div>
        </>
    );
}

export default Navbar;