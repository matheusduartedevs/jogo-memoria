import { paresDeCarta } from "../constants/cards"
import Card from "./Card"
import Score from "./Score"

const MemoryGame = () => {
  return (
    <div className='jogo-da-memoria'>
        <div className="jogo-da-memoria__conteudo">
            <h1>Jogo da Memória</h1>
            <Score />
        </div>

        <div className="jogo-da-memoria__cartas">
            {paresDeCarta.map((carta) => (
                <Card key={carta.id} {...carta} />
            ))}
        </div>
    </div>
  )
}

export default MemoryGame