import React,{useState} from "react";

const Todolist = (value) => {

    const [todo,setTodo] = useState("");

    const Change = (res) =>{
        setTodo(res.value);
    }
    const Submit = (res) =>{
        res.preventDefault();
        // value.onSubmit({
        //     id: 1,
        //     value: todo
        // });

        setTodo("");
    }


    return(
        <>
            <div className="list">
                <form onSubmit={Submit}>
                    <input 
                        type="text"
                        name="input" 
                        placeholder="input here" 
                        onChange= {Change} /*Function call for each input */
                    />
                    <button>Submit</button>
                </form>
                    
  
            </div>
        </>
    )
}

export default Todolist;