import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
      }, [])

    const addTask = (task) => {
        const id = tasks.length
        task = { ...task, id }
        setTasks([...tasks, task])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
