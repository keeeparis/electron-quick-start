export default function createData(latestCurrency, country2currency, countryFullName) {
    const divInfo = document.querySelector('#info')
    const selectValue = document.querySelector('#currency')

    selectValue.addEventListener('change', (event) => {
        let out = `<div class='col'>`

        out += `EUR/${event.target.value} ------- `
        for (let el of Object.entries(latestCurrency.rates)) {
        if (el[0] == event.target.value) {
            out += `${el[1]}`
            out += `<br>`
            out += `<br>`
            out += `as of <i>${new Date(Date.now()).toLocaleString()}</i>`
        }
        }

        out += `</div><div class='col'>`

        for (let el of Object.entries(country2currency)) {
        if (el[1] == event.target.value) {

            for (let i of Object.entries(countryFullName)) {
            if (el[0].toLowerCase() == i[0]) {
                out += `<img src='https://flagcdn.com/40x30/${el[0].toLowerCase()}.png' alt='${i[1]}'>`
                out += `<p style='display:inline; padding: 10px'>${i[1]}</p>`
                out += `<br>`
            }
            }
        } else if (event.target.value === 'BYN') { // case for new belarusian currency
            out += `<img src='https://flagcdn.com/40x30/by.png' alt='Belarus'>`
            out += `<p style='display:inline; padding: 10px'>Belarus</p>`
            out += `<br>`
            break
        }
        }
        
        out += `</div>`
        divInfo.innerHTML = out
    })
}