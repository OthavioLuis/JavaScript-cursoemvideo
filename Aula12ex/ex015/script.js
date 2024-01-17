function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] tente novamernte')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/criança-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/criança-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}