let images = [
    'javascript.png',
    'nextjs.png',
    'nodejs.png',
    'reactjs.png',
    'typescript.png',
    'vitejs.png'
]

const cartasUnicas = images.map((imagem, idDoPar) => ({
    idDoPar,
    imagem
})) 

export const paresDeCarta = [...cartasUnicas, ...cartasUnicas].map(
    (carta, id) => ({
        ...carta,
        id
    })
)

