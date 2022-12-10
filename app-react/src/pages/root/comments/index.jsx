import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import "./style.css"

export async function loader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const comments = await res.json()
  return { comments }
}

export default function contact(){
  const { comments } = useLoaderData()
  const perPage = 15
  const [page, setPage] = useState(perPage)


  const currentComments = comments.slice(0, page)

  const nextPage = () => {
    const newPage = Math.min((page + perPage), comments.length)
    setPage(newPage)
  }

  return(
    <>
      <h1>Comentários</h1>

      <section className="comments">
        <ul>
          {comments.length ? (
            currentComments.map(comment => (
              <li key={comment.id}>
                <div className="comments__photo"></div>
                <div className="comments__content">
                  <h2>@{comment.email.split("@")[1]}</h2>
                  <p>{comment.body}</p>
                </div>
              </li>
            ))
          ) : (
            <p>Não há nenhum user carregado ainda...</p>
          )}
        </ul>

        {
          currentComments.length < comments.length && (
            <button className="btn" onClick={nextPage}>
              Mais comentários
            </button>
          )
        }
      </section>
    </>
  )
}