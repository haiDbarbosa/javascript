function brazilian() {
    let age = document.querySelector('input#age');
    let ageNumber = Number(age.value)
    let result = document.querySelector('div#res')
    let brazilian = 'Brazil'

    if (ageNumber >= 30 && document.getElementById('country').value == brazilian) {
        result.innerHTML += (`<p><strong>${ageNumber}</strong> anos? Você não é mais tão jovem, mas é brasileiro!</p>`)
    }
    else if (ageNumber <= 30 && document.getElementById('country').value == brazilian) {
        result.innerHTML = (`<p>Você tem <strong>${ageNumber}</strong> anos de idade e é brasileiro.. Um jovem brasileiro! :D`)
    }
    else if (ageNumber >= 30 && document.getElementById('country').value != brazilian) {
        result.innerHTML += (`<p>Vish, <strong>${ageNumber}</strong> anos? você alem de não ser jovem, nem brasileiro é!</p>`)
    }
    else (result.innerHTML += (`<p><p><strong>${ageNumber}</strong> anos? Tá novão po, só faltou ser brasileiro :/</p>`))
    }