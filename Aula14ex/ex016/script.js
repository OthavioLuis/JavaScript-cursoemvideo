function validar() {
    var inicio = document.getElementById('inicio')
    var final = document.getElementById('final')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 ||passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c}, `
            }
        }
        else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += ` Acabou.`
    }
}
