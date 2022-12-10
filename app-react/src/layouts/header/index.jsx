import { Link } from "react-router-dom";
import "./style.css"

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>
              Tarefas
            </Link>
          </li>
          <li>
            <Link to={`/users`}>
              Usuários
            </Link>
          </li>
          <li>
            <Link to={`/comments`}>
              Comentários
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}