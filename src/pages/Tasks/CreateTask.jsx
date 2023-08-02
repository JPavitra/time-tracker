import React, { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext';

const CreateTask = ({ projectId }) => {
    const { dispatch } = useAppContext();
    const [taskName, setTaskName] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            const newTask = {
                name: taskName,
                time: parseFloat(timeSpent),
                description,
            };
            dispatch({
                type: 'ADD_TASK',
                payload: newTask,
                projectIndex: parseInt(projectId),
            });
            setTaskName('');
            setTimeSpent('');
            setDescription('');
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Create a Task</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="taskName" className="form-label">
                                Task Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="taskName"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="timeSpent" className="form-label">
                                Time Spent (in hours)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                className="form-control"
                                id="timeSpent"
                                value={timeSpent}
                                onChange={(e) => setTimeSpent(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Create Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateTask