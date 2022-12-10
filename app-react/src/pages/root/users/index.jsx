import { useLoaderData } from "react-router-dom"
import "./style.css"

export async function loader({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const users = await res.json()
  return { users }
}

export default function Dashboard(){
  const { users } = useLoaderData()

  return(
    <>
      <h1>Usuários</h1>

      <section className="users">
        <ul>
          {users.length ? (
            users.map(user => (
              <li key={user.id}>
                <p><strong>Nome: </strong>{user.name}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Tell: </strong>{user.phone}</p>
              </li>
            ))
          ) : (
            <p>Não há nenhum user carregado ainda...</p>
          )}
        </ul>
      </section>
    </>
  )
}