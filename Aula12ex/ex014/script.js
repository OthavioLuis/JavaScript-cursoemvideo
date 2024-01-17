function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manhã.png'
        document.body.style.background = '#87C8F4'
    } else if (hora>= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#D38E55'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#1E2424'
    }
}
