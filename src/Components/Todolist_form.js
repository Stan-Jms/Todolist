import React,{useState,useRef} from "react";

const Todolist = (props) => {

    const [todo,setTodo] = useState("");
    const clear = useRef(null);

    const Change = (res) =>{
        setTodo(res.target.value);
    }
    const Submit = (res) =>{
        res.preventDefault();
        props.onSubmit(
            {
                text: todo
            }
        )
        clear.current.value = "";
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
                        onChange= {Change}
                        ref={clear}
                    /> 
                    <button type="submit">Submit</button>
                </form>
                    
  
            </div>
        </>
    )
}

export default Todolist;