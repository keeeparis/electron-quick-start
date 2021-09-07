import {TOKEN} from './modules/token.js'
import createSelector from './modules/createSelector.js'
import createData from './modules/createData.js'

window.addEventListener('DOMContentLoaded', async () => { 
    const res = await fetch(`http://data.fixer.io/api/latest?access_key=${TOKEN}`)
    const latestCurrency = await res.json()
    const res1 = await fetch(`http://data.fixer.io/api/symbols?access_key=${TOKEN}`)
    const countrySymbols = await res1.json()
    const res2 = await fetch('http://country.io/currency.json')
    const country2currency = await res2.json()
    const res3 = await fetch('https://flagcdn.com/en/codes.json')
    const countryFullName = await res3.json()
    
    createSelector(countrySymbols)
    createData(latestCurrency, country2currency, countryFullName)
})

