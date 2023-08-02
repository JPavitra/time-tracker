import React, { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext';
import { Link, useNavigate } from 'react-router-dom';

const CreateProject = () => {
    const { dispatch } = useAppContext();
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectName.trim() !== '') {
            dispatch({ type: 'ADD_PROJECT', payload: projectName });
            setProjectName('');
            navigate('/projects');
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Create a Project</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="projectName" className="form-label">
                                Project Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="projectName"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Create Project
                        </button>
                        <Link to="/projects" className="btn btn-secondary ms-2">
                            Back
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProject