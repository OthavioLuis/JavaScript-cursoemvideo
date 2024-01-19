function criarTabuada() {
    let nmr = document.getElementById('numero');
    let resposta = document.getElementById('res');

    if (nmr.value.length == 0) {
        window.alert('Digite algum número, por favor');
    } else {
        let n = Number(nmr.value);
        let tabuada = '';
        for (var c = 1; c <= 10; c++) {
            tabuada += `${n} X ${c} = ${n * c} <br>`;
            resposta.innerHTML = tabuada;
        }
    }
    
    /* if (nmr.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(nmr.value)
        let c = 1
        resposta.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            resposta.appendChild(item)
            c++
        }
    } */
}