import { createContext } from "react";

const LogicaJogoContext = createContext()

export const LogicaJogoProvider = ({ children }) => {
    const valor = {

    }

    return (
        <LogicaJogoContext.Provider value={valor}>
            {children}
        </LogicaJogoContext.Provider>
    )
}