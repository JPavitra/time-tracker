import React from 'react'
import { useAppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';

const ListProjects = () => {
    const { state } = useAppContext();

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2>List of Projects</h2>
                    <Link to="/projects/create" className="btn btn-primary mb-3">
                        Create Project
                    </Link>
                    <ul className="list-group">
                        {state.projects.map((project, index) => {
                            // Calculate Total Tasks count and Total Time spent for each project
                            const totalTasksCount = project.tasks.length;
                            const totalTimeSpent = project.tasks.reduce((total, task) => total + task.time, 0);
                            return (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <Link to={`/project/${index}`}>{project.name}</Link>
                                    <span>
                                        <strong>Total Tasks ({totalTasksCount}):</strong> {totalTasksCount}
                                    </span>
                                    <span>
                                        <strong>Total Time Spent:</strong> {totalTimeSpent.toFixed(2)} hours
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListProjects