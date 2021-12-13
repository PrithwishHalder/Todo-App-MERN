import React from "react";

const NewTask = ({ onHandleChange, onHandleSubmit, task,id }) => {
    return (
        <form className="newTaskForm" onSubmit={onHandleSubmit}>
            <input
                type="text"
                name="task"
                id="task"
                value={task}
                className="newTask"
                onChange={onHandleChange}
            />
            {id && <button className="addTask">Update Task</button>}
            {!id && <button className="addTask">Add Task</button>}
        </form>
    );
};

export default NewTask;
