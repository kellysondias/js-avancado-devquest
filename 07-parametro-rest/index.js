function incentivarQuester (mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log (`${mensagem} ${nomeQuester}`))
}

incentivarQuester ('Parabéns por ter chego ao módulo de JavaScript Avançado,', 'Kellyson!', 'Júlia!', 'Pedro!')

//nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))