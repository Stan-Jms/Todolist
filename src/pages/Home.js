import React from "react";
import Navbar from "../Components/Navbar"
import Todolist from "../Components/Todolist"

const Home = () =>{

    return (
        <>
            <Navbar/>{/*Navigation bar at header*/}
            <Todolist/>
        </>
    )
}

export default Home;