import { paresDeCarta } from "../constants/cards"
import Card from "./Card"
import Resultado from "./Resultado"
import Score from "./Score"

const MemoryGame = () => {
    return (
        <div className='jogo-da-memoria'>
            <div className="jogo-da-memoria__conteudo">
                <h1>Jogo da Memória</h1>
                <Score />
                <div className="jogo-da-memoria__cartas">
                    {paresDeCarta.map((carta) => (
                        <Card key={carta.id} {...carta} />
                    ))}
                </div>
            </div>
            <Resultado />
        </div>
    )
}

export default MemoryGame