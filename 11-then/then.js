const ferverAgua = () => {
    return new Promise ((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Passo 1 finalizado: A água foi fervida.")
            resolve()
        } else {
            console.log("É necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca")
            reject()
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

const chaleiraEstaNoFogao = true
const fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
.then(() => passarOCafe())
.then(() => tomarOCafe())
.then(() => lavarXicara())
.then(() => console.log("Finalizado o ritual do café. Bora trabalhar!"))

