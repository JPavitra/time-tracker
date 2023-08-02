import './App.css';
import { AppProvider } from './contexts/AppContext';
import ListProjects from './pages/Project/ListProjects';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProjectDetailsPage from './pages/Project/ProjectDetails';
import CreateProject from './pages/Project/CreateProject';
import CreateTask from './pages/Tasks/CreateTask';

function App() {
  return (
    <AppProvider>
      <div className="container mt-4">
        <Router>
          <Routes>
            <Route exact path="/" element={<Navigate to={'/projects'} />} />
            <Route path="/projects" element={<ListProjects />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
            <Route path="*" element={<Navigate to={'/projects'} />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>

  );
}

export default App;
