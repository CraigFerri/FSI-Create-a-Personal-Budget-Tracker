let totalAnnualExpenses = annualExpenses + (monthlyExpenses*12) + (weeklyExpenses*(365/7))
let state = { weeklyExpenses, monthlyExpenses, annualExpenses, totalAnnualExpenses }
let elements = document.querySelectorAll('[data-bind]')
elements.forEach( element => element.innerText = state[element.dataset.bind])