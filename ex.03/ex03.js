function contar() {
    var f_inicio = document.getElementById('inicio')
    var ini = f_inicio.value
    var f_fim = document.getElementById('fim')
    var fim = f_fim.value
    var f_passo = document.getElementById('passo')
    var passo = f_passo.value
    var res = document.getElementById('dados')
    if (ini.length == 0 || fim.length == 0 || passo.length == 0 || passo == '0') {
        window.alert('Preencha os campos corretamente!')
    } else {
        res.innerHTML = 'Resultado: <br>'
        if (ini < fim) {
            for (var c = Number(ini); c <= Number(fim); c += Number(passo)) {
                res.innerHTML += `\u{1f449} ${c}` }
        } else {
            for (var c = Number(ini); c >= Number(fim); c -= Number(passo)) {
                res.innerHTML += `\u{1f449} ${c}` }
        }
        res.innerHTML += `\u{1F6D1}`
    }
}