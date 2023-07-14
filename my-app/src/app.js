import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fontAwesomeicon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashcan } from '@fortawesome/free-solid-svg-icons';
import './app.css';

function App() {
    
    // Tasks todo list state
    //////////////////////////////
    const [toDo, setToDo] = useState([
        {'id': 1, 'title': 'task 1', 'status' : false},
        {'id': 2, 'title': 'task 2', 'status' : false}
    ]);




    // Temp state
    ////////////////////////
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');
    
    // Add task
    ////////////////////////
    const addTask = () => {

    }
    
    // Delete task
    //////////////////////
    const deleteTask = (id) => {

    }

    // Mark task as done or completed
    /////////////////
    const markDone = (id) => {

    }
    
    
    // Cancel update
    ///////////////////
    const cancelUpdate = (id) => {

    }

     // Change task for update
     /////////////////////////
     const changeTask = (e) => {

     }

     // Update task
     ////////////////
     const updateTask = (e) => {

     }
    
    
    
     return (
        <div className=" container App">
           <br></br>
           <h2>To Do List App</h2>
        </div>
    )
}

export default App;