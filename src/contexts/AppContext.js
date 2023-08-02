// AppContext.js
import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  projects: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, { name: action.payload, tasks: [] }],
      };
    case 'ADD_TASK':
      debugger
      console.log(action.payload)
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.projectIndex
            ? {
              ...project,
              tasks: [...project.tasks, action.payload],
            }
            : project
        ),
      };
    case 'UPDATE_TASK_TIME':
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.payload.taskId
            ? {
              ...project,
              tasks: project.tasks.map((task, taskIndex) =>
                taskIndex === action.payload.taskId
                  ? { ...task, time: task.time + action.payload.timeSpent }
                  : task
              ),
            }
            : project
        ),
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
