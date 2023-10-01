import { createContext, useState } from "react";
import { paresDeCarta } from "../constants/cards"

export const LogicaJogoContext = createContext()

export const LogicaJogoProvider = ({ children }) => {
    const [cartas, setCartas] = useState([])
    const [idsPares, setIdsPares] = useState([])
    const [idsCartasViradas, setIdsCartasViradas] = useState([])
    const [qtdCartasViradas, setQtdCartasViradas] = useState(0)
    const [qtdPontos, setQtdPontos] = useState(0)

    const incrementarCartas = () => setQtdCartasViradas((quantidade) => quantidade + 1)

    const incrementarPontos = () => {
        setQtdPontos(pontos => pontos + 5)
    }

    const iniciarJogo = () => {
        setCartas(paresDeCarta)
    }

    const compararCartas = ({ id1, id2 }) => {
        const idPar1 = cartas.find(({ id }) => id === id1)?.idDoPar
        const idPar2 = cartas.find(({ id }) => id === id2)?.idDoPar
        return idPar1 === idPar2
    }

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

        const ids = [idsCartasViradas[0], id]
        setIdsCartasViradas(ids)

        const cartasIguais = compararCartas(ids)

        if (cartasIguais) {
            incrementarPontos()
            setIdsPares((ids) => [...ids, idDoPar])
        }

        const tempo = cartasIguais ? 0 : 2000

        setTimeout(() => {
            setIdsCartasViradas([])
        }, tempo)
    }

    const valor = {
        cartas,
        qtdCartasViradas,
        qtdPontos,
        iniciarJogo,
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