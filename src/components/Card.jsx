import useJogoMemoria from "../hooks/useJogoMemoria"

const Card = ({ id, idDoPar, imagem }) => {
    const { virarCarta } = useJogoMemoria()
    
    const handleClick = () => {
        virarCarta({ id, idDoPar })
    }

    return (
        <button id={id} className="carta" onClick={handleClick}>
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