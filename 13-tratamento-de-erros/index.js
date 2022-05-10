const ferverAgua = () => {
    return new Promise ((resolve, reject) => {

        if (typeof chaleiraEstaNoFogao != 'boolean') throw "O valor precisa ser booleano"

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Passo 1 finalizado: A água foi fervida.")
            resolve(true)
        } else {
            /* const mensagemDeErro = console.log("É necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca") */
            reject("É necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca")
        }
    })
}

let passarOCafe = () => {
    return new Promise ((resolve) => {
        console.log("Passo 2 finalizado: Café foi passado")
        resolve(true)
    })
}

let tomarOCafe = () => {
    return new Promise ((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café")
        resolve(true)
    })
}

let lavarXicara = () => {
    return new Promise ((resolve) => {
        console.log("Passo 4 finalizado: Terminei de lavar a xícara")
        resolve(true)
    })
}

const chaleiraEstaNoFogao = 'teste'
const fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe () {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarOCafe(cafePassado)
        const xicaraLimpa = await lavarXicara(cafeTomado)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Hora do café!')
    }
}

iniciarProcessoDeFazerCafe()