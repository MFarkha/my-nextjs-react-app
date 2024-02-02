'use client';

import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TaskDispatchContext, TasksContext, ITask, AppState } from './TaskContext';
import { initialTasks } from './TaskContext';

type AppAction =
    | { type: 'added', id: number, text: string }
    | { type: 'changed', task: ITask }
    | { type: 'deleted', id: number }


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );
  return (
    <>
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                <h1>Day off in Kyoto</h1>
                <AddTask/>
                <TaskList />
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>
    </>
  );
}

function tasksReducer(tasks: AppState, action: AppAction) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task!.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ', action);
    }
  }
}

