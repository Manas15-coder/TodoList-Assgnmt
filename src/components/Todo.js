import React, { useState } from 'react'
import '../App.css'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            const task = {
                name: newTask,
                complete: false,
            };
            setTasks([...tasks, task])
            setNewTask('');
        }
    }

    const complete = (id) => {
        const updateTasks = (id) = [...tasks]
        updateTasks[id].complete = !updateTasks[id].complete;
        setTasks(updateTasks);
    }
    const deleteTask = (id) => {
        const updateTasks = [...tasks];
        updateTasks.splice(id, 1)
        setTasks(updateTasks);
    }
    const filterTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='todolist'>
                        <h2>To Do List</h2>
                        <div>
                            <span>
                                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className='input' placeholder='Add a To Do' />
                                <button className='add' onClick={addTask}>Add Task</button>
                            </span>
                            <span>
                                <input type="text" placeholder="Search a Task" value={search} onChange={(e) => setSearch(e.target.value)} className='search' />
                                <button className='search-btn' onClick={addTask}><i class="fa fa-search" aria-hidden="true"></i></button>
                            </span>
                            <div className='to'>
                                {
                                    filterTasks.map((task, id) => (
                                        <div className='todo' key={id}>
                                            <span className='btn'>
                                                <button className='complete-btn' onClick={complete}><i class="fa fa-check" aria-hidden="true"></i></button>
                                                <button className='delete-btn' onClick={deleteTask}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                            </span>
                                            <h6 className='todo' key={id}>{task.name}</h6>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
