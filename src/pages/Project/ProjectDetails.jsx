// ProjectDetailsPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TaskList from '../Tasks/ListTasks';
import { useAppContext } from '../../contexts/AppContext';
import CreateTask from '../Tasks/CreateTask';

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const { state } = useAppContext();

    // Find the selected project by ID
    const selectedProject = state.projects.find(
        (project, index) => index === parseInt(projectId, 10)
    );

    if (!selectedProject) {
        return <div>Project not found.
            <Link to="/projects" className="btn btn-secondary">
                Back
            </Link>
        </div>;
    }

    const totalTasksCount = selectedProject.tasks.length;
    const totalTimeSpent = selectedProject.tasks.reduce((total, task) => total + task.time, 0);


    return (
        <div className="container container-fluid mt-4">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Project Details</h2>
                        <Link to="/projects" className="btn btn-secondary">
                            Back
                        </Link>
                    </div>
                    <div className="mt-4">
                        <p>
                            <strong>Project Name:</strong> {selectedProject.name}
                        </p>
                        <p>
                            <strong>Total Tasks ({totalTasksCount}):</strong> {totalTasksCount}
                        </p>
                        <p>
                            <strong>Total Time Spent:</strong> {totalTimeSpent.toFixed(2)} hours
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <TaskList projectId={projectId} />
                </div>
                <div className="col-md-6">
                    <CreateTask projectId={projectId} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
