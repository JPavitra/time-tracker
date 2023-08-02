import React from 'react'
import { useAppContext } from '../../contexts/AppContext';

const ListTasks = ({ projectId }) => {
    const { state } = useAppContext();

 


    const selectedProject = state.projects[projectId];
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12 offset-md-2">
                    <h2>List of Tasks</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Description</th>
                                <th>Time Spent (hours)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedProject?.tasks?.map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    <td>{task.time}</td>
                                </tr>
                            ))}
                            {selectedProject?.tasks?.length === 0 ? (<tr>
                                <td colSpan={4}>
                                    <h4>No Tasks Exists, Create One!</h4>
                                </td>
                            </tr>) : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListTasks