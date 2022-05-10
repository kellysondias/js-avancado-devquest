/* setTimeout(() => {
    alert('Hello, world!')    
}, 3000); */

/* setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000); */

const idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundos')
                    }, 2000);

console.log(idDoIntervalo)

clearInterval(idDoIntervalo)
clearTimeout(idDoIntervalo)