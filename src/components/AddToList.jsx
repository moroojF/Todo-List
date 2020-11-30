import React, { useState } from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddToList = props => {
    const [myTask, setMyTask] = useState("");
    const [taskState, setTaskState] = useState(false);

    const addmyTask = e => {
        e.preventDefault();
        const newTask = { myTask, taskState };
        props.setTask(newTask);
        setMyTask("");
    }
    return (
        <form onSubmit={addmyTask}>
            <div className="form-grpup">
                <label>Add a new task:</label>
                <input type="text" className="form-control" onChange={e => setMyTask(e.target.value)} value={myTask} />
                <div className="text-right">
                    <input type="submit" className="btn btn-outline-secondary my-4" value="Create" />
                </div>
            </div>
        </form>
    )
}
export default AddToList;
