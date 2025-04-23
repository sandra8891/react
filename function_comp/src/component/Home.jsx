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

    const updateTask=(id,updateTask)=>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/tasks/${id}/`,updateTask)
        .then(response=>{
            setTask(task.map(task=>(task.id == id ? response.data :task)))
        })
        .catch(error=>console.log(error))
    }
    const deleteTask=(id)=>{
        axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`)
        .then(response=>{
            setTask(task.filter(task=>task.id!==id))
        })
        .catch(error=>console.log(error))
    }

    return (
        <div>
            <Nav />
            <h1>Todo</h1>
          {editing ? <EditTASKForm currentTask={currentTask}updateTask={updateTask} /> : null}
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
                            <td><button onClick={()=>editTask(todo)}>Edit</button></td>
                            <td><button onClick={()=>deleteTask(todo.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
const EditTASKForm = ({currentTask,updateTask})=> {
    const [task,setTask] = useState(currentTask);
    console.log(task);

const handleChange=(e)=>{
    const{name,value}=e.target;
    setTask({...task,[name]:value})
}


const handleSubmit=(e)=>{
    e.preventDefault();
    updateTask(task.id,task)
}



     return(
        <div>
            <h1>Edit Task</h1>
            <form action="" onSubmit={handleSubmit}>
            Title <input type="text"   value={task.title} name='title' onChange={handleChange} id="" className="form-control" />
                Description <input type="text" id=""  value={task.description} onChange={handleChange} name='description' className="form-control" />
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    )
}