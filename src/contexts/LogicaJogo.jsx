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
        
        const cartaVirada = idsCartasViradas.includes(id) || idsPares.includes(idDoPar)
        if (cartaVirada) return

        if (idsCartasViradas.length >= 2) {
            return
        }

        if (idsCartasViradas.length == 0) {
            return setIdsCartasViradas([id])
        }

        setIdsCartasViradas((ids) => [ids[0], id])

        setTimeout(() => {
            setIdsCartasViradas([])
        }, 2000)
    }

    const valor = {
        cartas,
        qtdCartasViradas,
        qtdPontos, 
        virarCarta,
        idsCartasViradas,
        idsPares
    }

    return (
        <LogicaJogoContext.Provider value={valor}>
            {children}
        </LogicaJogoContext.Provider>
    )
}