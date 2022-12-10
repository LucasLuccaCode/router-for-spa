import { useRouteError } from "react-router-dom"
import "./style.css"

export default function App (){
  const error = useRouteError()
  console.log(error)
  
  return (
    <div className="error-page">
      <h1>Erro ao acessar pagina</h1>
      <p>{error.statusText || error.status}</p>
    </div>
  )
}