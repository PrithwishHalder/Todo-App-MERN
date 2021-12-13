import React, { useState, useEffect } from "react";

import "./App.css";

import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskList/TaskList";

import { useDispatch, useSelector } from 'react-redux';
import {getAllTask, newTask, deleteTask, updateTask, completeTask} from "./redux/actions/TaskAction";



const App = () => {
    const dispatch = useDispatch();

    const detail = {
        task: "",
        completed: false,
    };
    const [taskl, setTaskl] = useState(detail);
    const { task, _id } = taskl;

    useEffect(() => {
        dispatch(getAllTask());
    },[]);

    const tasks = useSelector((state) => state.tasks.tasks);

    //set data on form input change
    const onHandleChange = (e) => {
        setTaskl({ ...taskl, [e.target.name]: e.target.value });
    };

    //form submit function call
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(_id){
            dispatch(updateTask(taskl));
        }
        else{
            dispatch(newTask(taskl));
        }
        setTaskl(detail);
    };

    //set form to task update
    const editTask = (e) => {
        setTaskl(e);
    };

    return (
        <div className="Todo">
            <div>
                <NewTask
                    onHandleChange={onHandleChange}
                    onHandleSubmit={onHandleSubmit}
                    task={task}
                    id={_id}
                />
                <TaskList
                    data={tasks}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                />
            </div>
        </div>
    );
};

export default App;
