import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
    const cancelUpdate = () => {

    }

     // Change task for update
     /////////////////////////
     const changeTask = (e) => {

     }

     // Update task
     ////////////////
     const updateTask = () => {

     }
    
    
    
     return (
        <div className=" container App">
           <br></br>
           <h2>To Do List App</h2>
           <br></br>

            {/* display todo */}
            
            {/* // this code run when tasks absence */}
            { toDo && toDo.length ? '' : 'No Tasks...' }

            { toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1) // when changing object places (1,2obj) do not change their places in page
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className='col taskBg'>
                                <div className={task.status ? 'done' : ''}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.title}</span>
                                </div>

                                <div className='iconsWrap'>
                                    <span title='Completed / Not Completed'>
                                    <FontAwesomeIcon icon = { faCircleCheck } />
                                    </span>
                                    <span title='Edit'>
                                    <FontAwesomeIcon icon = { faPen } /> 
                                    </span>
                                    <span title='Delete'>
                                    <FontAwesomeIcon icon = { faTrashCan } />
                                    </span>
                                </div>

                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default App;