function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = document.getElementById('dataNasc')
    var resultado = document.getElementById('dados')
    if (fano.value.length == 0 || Number(fano.value) > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radSexo')
        var idade = anoatual - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
        } else {
            genero = 'mulher'
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        var foto = window.document.getElementById('imagem')
        if (idade < 5) {
            foto.src = `imagens/01-bebe-${genero}.png`
        } else if (idade < 16) {
            foto.src = `imagens/02-crianca-${genero}.png`
        } else if (idade < 30) {
            foto.src = `imagens/03-jovem-${genero}.png`
        } else if (idade < 49) {
            foto.src = `imagens/04-adulto-${genero}.png`
        } else {
            foto.src = `imagens/05-idoso-${genero}.png`
        }
    }
}