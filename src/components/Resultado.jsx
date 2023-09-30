import classNames from "classnames"

const Resultado = () => {
    const cn = classNames("resultado", {
        "resultado--aberto": false
    })

    return (
        <div className={cn}>
            <div className="resultado__box">
                <p>Seu nível de memória é:</p>
                <h1>Bom</h1>
                <img 
                    src="/kitekat-3.png" 
                    alt="img nível de memória"
                    height={150} 
                />
                <p>
                    <strong>Taxa de acertos: </strong>
                    <span>50%</span>
                </p>
                <button className="button">
                    Nova Partida
                </button>
                <p>
                    <small>
                        * meramente ilustrativa
                    </small>
                </p>
            </div>
        </div>
    )
}

export default Resultado