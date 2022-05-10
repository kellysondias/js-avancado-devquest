/* 
Promises possuem 4 estados:
    Pendente = estado inicial
    Realizada/Resolve
    Recusada/Reject
    Estabelecida
*/

//Promise é uma classe, portanto começa com letra maiúscula

//Importante lembrar que os parâmetros da promise são funções

/* new Promise((resolve, reject) => {

}) */

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Começando o processo de fervura. Aguarde.')
            setTimeout(() => {
                console.log('Fazendo o café')
            }, 5000);
            resolve()
        } else {
            console.log('É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água!')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)