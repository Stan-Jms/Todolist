import React from "react";
import Navbar from "../Components/Navbar"
import Todolist_form from "../Components/Todolist_form"

const Todolist = () =>{

    return (
        <>
            <Navbar/>{/*Navigation bar at header*/}
            <Todolist_form/>
        </>
    )
}

export default Todolist;