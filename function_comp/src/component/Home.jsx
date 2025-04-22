import React,{ useState,useEffect} from "react";
import Nav from "./Nav";
import axios from "axios";

export default function Home() {
    const [task,setTask]=useState([])
    const [editing, setEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({id:null,title:'',description:'',completed:false});
   
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/')
         .then(response => setTask(response.data))
         .catch(error => console.log(error));
    }, []);
    


    const editTask = (task) => {
        setEditing(true);
        setCurrentTask(task);
    }

    return (
        <div>
            <Nav />
            <h1>Todo</h1>
          {editing ? <EditTASKForm currentTask={currentTask} /> : null}
            <table className="table">
                <thead>
                    <tr> 
                 <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>status</th>
                </tr>
                </thead>
                <tbody>
                    {task.map((todo)=>(
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Completed' : 'Not completed'}</td> 
                            <td><button onClick={()=>editTask(task)}>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const EditTASKForm = (currentTask) => {
    const [task,setTask] = useState(currentTask);
    console.log(task);

    return(
        <div>
            <h1>Edit Task</h1>
            <form action="">
            Title <input type="text"  id="" className="form-control" />
                Description <input type="text" id="" className="form-control" />
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    )
}