var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)

if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Boa Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora <= 23 && minuto < 60) {
    console.log('Boa noite!')
} else {
    console.log('Vive em qual mundo??')
}