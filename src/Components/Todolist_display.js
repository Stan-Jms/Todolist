import React from "react";

const Todolist_display = (res) =>{

    let payload = res.value;
    
    return(
        payload.map((x,index) => {
                return(
                    <>
                        <div key={index}>
                            <p>{x.text}</p>
                            <button>Delete</button>
                            <button>Done</button>
                        </div>
                    </> 
                );
        })
    )
}

export default Todolist_display;