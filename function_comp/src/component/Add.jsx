import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function Add() {
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tasks/',{title,description})
        .then(() => {setTitle('');
            setDescription('');
            navigate('/')})
        .catch(error => console.log(error));
    }
    return (
        <div>
              <Nav />
            <form action=""onSubmit={handleSubmit}>
                <h1>add task</h1>
                Title <input type="text" name= ""value={title} onChange={(e) => setTitle(e.target.value)} id="" className="form-control" />
                Description <input type="text" name="" value={description} onChange={(e) => setDescription(e.target.value)} id="" className="form-control" />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    );
}