'use client';

import { createContext, Dispatch } from "react";
import { AppAction } from "../messengerReducer";

export interface ITask {
    id: number,
    text: string,
    done: boolean
}
export type AppState = Array <ITask>;

export const initialTasks: AppState = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

export const TasksContext = createContext(initialTasks);
export const TaskDispatchContext = createContext<Dispatch<any>>(() => null);