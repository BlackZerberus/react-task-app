import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm() {

    const { addTask } = useContext(TaskContext)

    const saveTask = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const task = {}
        data.forEach((value, key) => {
            task[key] = value
        })
        addTask(task)
        e.target.reset()
    }

    return (
        <div className="max-w-md mx-auto">
            <form
                className="bg-slate-500 p-10 bm-4 rounded-md"
                onSubmit={saveTask}>
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input className="bg-slate-400 w-full p-3 mb-2 placeholder:text-white" type="text" placeholder='Escribe tu titulo' name="title" />
                <textarea className="bg-slate-400 w-full p-3 mb-2 placeholder:text-white" name="description" cols="30" rows="3" placeholder="escribe una descripcion..."></textarea>
                <button className="bg-green-600 text-white p-2 hover:bg-green-400">
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm