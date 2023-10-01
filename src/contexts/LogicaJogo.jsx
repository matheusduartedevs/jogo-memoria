import { createContext, useState } from "react";

export const LogicaJogoContext = createContext()

export const LogicaJogoProvider = ({ children }) => {
    const [cartas, setCartas] = useState([])
    const [idsPares, setIdsPares] = useState([])
    const [idsCartasViradas, setIdsCartasViradas] = useState([])
    const [qtdCartasViradas, setQtdCartasViradas] = useState(0)
    const [qtdPontos, setQtdPontos] = useState(0)

    const incrementarCartas = () => setQtdCartasViradas((quantidade) => quantidade + 1)

    const virarCarta = ({ id, idDoPar }) => {
        incrementarCartas()
        setIdsCartasViradas((ids) => [...ids, id])
    }

    const valor = {
        cartas,
        qtdCartasViradas,
        qtdPontos,
        virarCarta,
        idsCartasViradas
    }

    return (
        <LogicaJogoContext.Provider value={valor}>
            {children}
        </LogicaJogoContext.Provider>
    )
}