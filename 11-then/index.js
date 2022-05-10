let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Começando o processo de fervura. Aguarde.')
            resolve()
        } else {
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água!')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

passarCafe = () => console.log("Passando o café")

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log("Fazendo o café")