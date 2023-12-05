function brazilian(){
    let age = document.querySelector('input#age');
    let ageNumber = Number(age.value)
    let result = document.getElementById('res')

    result.innerHTML(`<p>Você tem <strong>${ageNumber}</strong> anos de idade</p>`)

}