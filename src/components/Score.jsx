import useJogoMemoria from "../hooks/useJogoMemoria"

const Score = () => {
  const { qtdCartasViradas, qtdPontos} = useJogoMemoria()

  return (
    <div className="placar">
      <Pontos titulo='Pontos' valor={qtdPontos} />
      <Pontos titulo='Cartas viradas' valor={qtdCartasViradas} />
    </div>
  )
}

const Pontos = ({ titulo, valor }) => {
  return (
    <div className="pontos">
      <strong className="pontos__titulo">{titulo}</strong>
      <strong className="pontos__valor">{valor}</strong>
    </div>
  )
}
export default Score