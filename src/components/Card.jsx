import classNames from "classnames"
import useJogoMemoria from "../hooks/useJogoMemoria"

const Card = ({ id, idDoPar, imagem }) => {
    const { virarCarta, idsCartasViradas, idsPares } = useJogoMemoria()
    
    const handleClick = () => {
        virarCarta({ id, idDoPar })
    }

    const cartaEncontrada = idsPares.includes(idDoPar)
    const cartaVirada = cartaEncontrada || idsCartasViradas.includes(id) 
    const bloqueado = cartaVirada

    const cn = classNames("carta", {
        "carta--virada": cartaVirada,
    })

    return (
        <button id={id} className={cn} onClick={handleClick} disabled={bloqueado}>
            <div className="carta__conteudo">
                <div className="carta__frente"></div>
                <div className="costas">
                    <img src={imagem} alt={`Carta ${id}`} width={300} />
                </div>
            </div>
        </button>
    )
}

export default Card