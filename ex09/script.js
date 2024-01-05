function contar(){
    let start = document.getElementById ('inicio');
    let end = document.getElementById ('fim');
    let skip = document.getElementById ('gap');
    let res = document.getElementById ('dois')

    if(start.value.length == 0 || end.value.length == 0 || skip.value.length == 0) {
        window.alert('Preencha os dados corretamente')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(start.value);
        let f = Number(end.value);
        let s = Number(skip.value);

        if (i < f) {
            for(let c = i; c <= f; c += s) {
            res.innerHTML += `${c} `
        }} else {
            for(let c = i; c >= f; c += s) {
            res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`    
    }
}