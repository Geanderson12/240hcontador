const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')
const faltahora = window.document.getElementById('horasfinal');

const lancamento = "28 may 2023 18:00:0"

function countDown (){
    const dataLanc = new Date(lancamento) 
    const hoje = new Date() 
    const segTotal = (dataLanc - hoje)/1000; 

    const finalDias = Math.floor (segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal/60/60)%24;
    const finalMinutos = Math.floor(segTotal/60)%60;
    const finalSegundos = Math.floor(segTotal)%60;
    const horafinal = Math.floor(segTotal/60/60);

    dia.innerHTML = formatoTempo(finalDias)+'d';
    hora.innerHTML = formatoTempo (finalHoras)+'h';
    minuto.innerHTML = formatoTempo (finalMinutos)+'m';
    segundo.innerHTML= formatoTempo (finalSegundos)+'s';
    faltahora.innerHTML = 'Um pouco mais de ' + formatoTempo(horafinal)+' Horas';
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000) 




/*
let interval = null;
document.querySelector('button').addEventListener('click', () => {
    let to = document.querySelector('input').value;
    if (!to) {
        alert('Defina uma data no formato m-d-aaaa hh:m:s')
        return false
    }
    interval = setInterval(update, 1000, to)
})

function update(to) {
    to = new Date(to);
    let from = new Date();
    diff = to - from;
    if (diff > 0) {
        let days = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24)),
            hours = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24),
            min = setTwoDigit(Math.floor(diff / 1000 / 60) % 60),
            sec = setTwoDigit(Math.floor(diff / 1000) % 60)
        document.querySelector('#days').innerText = days
        document.querySelector('#hours').innerText = hours
        document.querySelector('#min').innerText = min
        document.querySelector('#sec').innerText = sec
    } else {
        clearInterval(interval);
        document.querySelector('body').classList.add('alert')
    }

}

*/