function datahora(){
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let msg = document.getElementById('hora');
    msg.innerHTML = `<b>Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos</b>`;
    msg.style.textAlign = 'center'
    msg.style.fontSize = '3.6rem'
}