import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import Todolist_form from "../Components/Todolist_form"
import Todolist_display from "../Components/Todolist_display"

const Todolist = (res) =>{

    const [tasks,setTasks] = useState([]);

    const addTodo = (task) =>{    
        let allTask = [task,...tasks];
        console.log(allTask);
        setTasks(allTask);
    }
    return (
        <>
            <Navbar/>{/*Navigation bar at header*/}
            <h1>Todolist</h1>
            <Todolist_form onSubmit={addTodo}/>
            <Todolist_display value={tasks}/>
        </>
    )
}

export default Todolist;