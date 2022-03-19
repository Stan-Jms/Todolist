import React from "react";

const Todolist_display = (res) =>{

    let payload = res.value;
    
    return(
        payload.map(x => {
                return(
                    <p>{x.text}</p>
                )
            ;
        })
    )
}

export default Todolist_display;