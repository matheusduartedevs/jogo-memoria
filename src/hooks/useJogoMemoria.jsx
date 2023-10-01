import { useContext } from "react"
import { LogicaJogoContext } from "../contexts/LogicaJogo"

const useJogoMemoria = () => {
  const context = useContext(LogicaJogoContext)
  return context
}

export default useJogoMemoria