import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ id, title, description }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h2 className="text-xl font-bold capitalize">{title}</h2>
            <h3 className="text-gray-500 text-sm">{description}</h3>
            <button className="bg-red-600 rounded-sm mt-4 px-2 py-1 hover:bg-red-400"
                onClick={() => deleteTask(id)}>
                Eliminar
            </button>
        </div>
    )
}

export default TaskCard