import React from "react";
import { useDispatch } from 'react-redux';

const TaskList = ({ data, editTask, deleteTask, completeTask }) => {
    const dispatch = useDispatch();
    return (
        <div>
            {data?.map((task, index) => (
                <div className="task" key={index} >
                    <div id={task._id} onClick={() => dispatch(completeTask(task._id))}>
                        {task.completed ? <strike>{task.task}</strike> : <span>{task.task}</span>}
                    </div>
                    <div className="task-option">
                        <div onClick={() => editTask(task)}>Edit</div>
                        <div onClick={() => dispatch(deleteTask(task._id))}>-</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
