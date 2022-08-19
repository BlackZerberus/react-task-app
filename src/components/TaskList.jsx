import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import TaskCard from "./TaskCard"

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) return <h2 className="text-4xl text-white text-center mt-6">No hay tareas pendientes</h2>
    return (

        <div className="grid grid-cols-4 gap-2 mt-6">
            {tasks.map(task =>
                <TaskCard key={task.id} {...task} />
            )}
        </div>


    )
}

export default TaskList