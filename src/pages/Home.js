import React from "react";
import Navbar from "../Components/Navbar"
import Foobar from "../Components/Foobar";

const Home = () =>{

    return (
        <>
            <Navbar/>{/*Navigation bar at header*/}
            <div className="swapi">
                <h1>SWAPI INDEXOR</h1>
                <h4>The Indexor for Swapi's database</h4>
            </div>
            <div className="void">
                <p>All the data from the database now simplified with this engine !</p>
            </div>
            <Foobar/>{/*Footerbar at the footer*/}
        </>
    )
}

export default Home;