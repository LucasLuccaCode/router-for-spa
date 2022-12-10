import { Outlet, useNavigation } from "react-router-dom";
import "./style.css"

export default function Main() {
  const navigation = useNavigation()

  return (
    <main className={
      navigation.state === "loading" ? "main loading" : "main"
    }>
      <Outlet />
    </main>
  )
}