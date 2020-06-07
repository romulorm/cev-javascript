/* Variáveis compostas */

numeros = [2, 8, 4, 7, 1]
for (let pos in numeros) {
   console.log(`Na posição ${pos} tem o valor ${numeros[pos]}`)
   }
let numero = 3
let posicao = numeros.indexOf(numero)
if (posicao == -1) {
    console.log(`Numero ${numero} nao encontrado na lista!`)
}
else {
    console.log(`O numero ${numero} foi encontrado na posicao ${posicao}.`)
}

/* Funções */

function parimp(num) {
    if (num%2===0) {
        return `O número ${num} é par.`
    } else {
        return `O número ${num} é ímpar.`
    }
}

let res = parimp(112)
console.log(res)