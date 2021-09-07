export default function createSelector(countrySymbols) {
    const divCur = document.querySelector('#cur')

    let out = `<div class='container'><select id='currency'>`
    for (let element of Object.entries(countrySymbols.symbols)) {
        out += `<option value='${element[0]}'>${element[1]}</option>`
    }
    out += `</select></div>`

    divCur.innerHTML = out
}