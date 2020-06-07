var numeros = []
var res = document.getElementById('dados')
var ja_analisado = false

function adicionar() {
    var f_num = document.getElementById('txtnum')
    var numero = Number(f_num.value)
    var tabela = document.getElementById('seltab')
    if (f_num.value.length == 0 || numero < 1 || numero > 100) {
        window.alert('Preencha os campos corretamente!')
    } else {
        let posicao = numeros.indexOf(numero)
        if (posicao===-1) {
            var item = document.createElement('option')
            item.text = `Valor ${numero} adicionado.`
            tabela.appendChild(item)
            numeros.push(numero)
            if (ja_analisado) {
                res.innerHTML = '';
            }
        } else {
            window.alert('Número já digitado. Por favor escolha outro.')
        }
    }
}

function analisar() {
    ja_analisado = true
    var maior = Math.max(...numeros)
    var menor = Math.min(...numeros)
    var soma = numeros.reduce(function(a, b) { return a + b; }, 0);
    var media = soma / numeros.length    
    res.innerHTML = '';
    res.innerHTML += `Ao todo temos ${numeros.length} números cadastrados. <br>`;
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`;
    res.innerHTML += `O menor valor informado foi ${menor}. <br>`;
    res.innerHTML += `Somando todos os valores temos ${soma}. <br>`;
    res.innerHTML += `A média dos valores é ${media}. <br>`;
}
