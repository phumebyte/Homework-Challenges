const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = 'R' + parseInt(leoBalance + sarahBalance)
const leo = `${leoName}  ${leoSurname.trim()} Owed R${sarahBalance}`
const sarah = `${sarahName.trim()}  ${sarahSurname} Owed R${sarahBalance}`
const total = "Total amount owed: "
const result = leo +" "+ sarah + divider + total + owed + divider

console.log(result)
