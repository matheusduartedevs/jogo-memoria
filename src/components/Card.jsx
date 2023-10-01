import classNames from "classnames"
import useJogoMemoria from "../hooks/useJogoMemoria"

const Card = ({ id, idDoPar, imagem }) => {
    const { virarCarta, idsCartasViradas } = useJogoMemoria()
    
    const handleClick = () => {
        virarCarta({ id, idDoPar })
    }

    const cartaVirada = idsCartasViradas.includes(id)

    const cn = classNames("carta", {
        "carta--virada": cartaVirada,
    })

    return (
        <button id={id} className={cn} onClick={handleClick}>
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