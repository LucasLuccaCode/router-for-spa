import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import "./style.css"

export async function loader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const tasks = await res.json()
  return { tasks }
}


export default function Tasks() {
  const { tasks } = useLoaderData()
  const perPage = 15
  const [page, setPage] = useState(perPage)


  const currentTasks = tasks.slice(0, page)

  const nextPage = () => {
    const newPage = Math.min((page + perPage), tasks.length)
    setPage(newPage)
  }

  return (
    <>
      <h1>Tarefas</h1>

      <section className="tasks">
        <ul>
          {tasks.length ? (
            currentTasks.map(task => (
              <li key={task.id}>
                <input type="checkbox" value={task.completed} id={`completed_${task.id}`} />
                <label htmlFor={`completed_${task.id}`}>{task.title}</label>
              </li>
            ))
          ) : (
            <p>Não há nenhuma tarefa carregada ainda...</p>
          )}
        </ul>

        {
          currentTasks.length < tasks.length && (
            <button className="btn" onClick={nextPage}>
              Mais tarefas
            </button>
          )
        }

      </section>
    </>


  )
}