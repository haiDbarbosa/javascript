let xp = 0
let name = 'Hai'
let rank = ''

console.log(`O heroi ${name} tem ${String(xp)} pontos de experiencia!! Vamos derrotar alguns monstros`);

while(xp < 10001) {
    let monster = 500
    xp += monster
    
    if(xp <= 1000){
        rank = 'ferro'
    } else if(xp <= 2000) {
        rank = 'bronze'
    } else if(xp <= 3000) {
        rank = 'prata'
    } else if(xp <= 5000) {
        rank = 'ouro'
    } else if(xp <= 6000) {
        rank = 'platina'
    } else if(xp <= 7000) {
        rank = 'diamante'
    } else if(xp <= 8000) {
        rank = 'mestre'
    } else if(xp <= 9000) {
        rank = 'ascendente'
    } else if(xp <= 10000) {
        rank = 'radiante'
    } else {
        xp <= 10500
        rank = 'imortal'
        console.log('estoy cansado jefe!')
    }
    console.log(`${name} é rank ${rank}! com ${String(xp)} pontos de experiencia`)
    console.log('Matando monstros!')
};

console.log(`O heroi ${name} termina sua jornada no rank "${rank}" com uma xp acumulada de "${String(xp)}" pontos de experiencia!! Foi uma aventura memoravel e muito desafiadora :)`);