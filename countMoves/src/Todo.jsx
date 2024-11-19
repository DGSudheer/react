import { useState } from "react";

function Todo(){
    const [Task, setTask] = useState("");
    const [TaskList, setTaskList] = useState([]);

    let finder = () => {
        console.log("here");
    }

    return(
        <div>
            <input type="text" placeholder='type here to add' onChange={finder}/>
            <br />
            <button type='submit' name='add'>Add</button>
            <br />
            &nbsp; 
            <hr />
            <h2>Tasks Todo !</h2>
            &nbsp;
            <ul>
                {
                    TaskList.map((x)=>(
                         <li>{x}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;