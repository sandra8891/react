import React,{useState,useEffect} from "react"
import Nav from './Nav'
import axios from 'axios'
export default function Home(){
    const[task,setTask]=useState([])
    console.log(task);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/')
          .then(response => setTask(response.data))
          .catch(error => console.log(error));
      }, []);
      
    return(
        <div>
            <Nav/>
            <h1>Todo</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>status</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}