function gerarTabuada() {
    var f_numero = document.getElementById('txtNum')
    var num = Number(f_numero.value)
    var tabela = document.getElementById('seltab')
    tabela.innerHTML = ''
    if (f_numero.value.length == 0) {
        window.alert('Por favor digite um número.')
    } else {
        for (var c = 1; c <= 10; c++) {
            var res = num * c
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${res}`
            tabela.appendChild(item);
            }
    }
}