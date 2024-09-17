const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const regex = new RegExp('^[0-9]{10}$|[^0-9]');

let resultPrimary = regex.test(primaryPhone)
let resultSecondary = regex.test(secondaryPhone) 

console.log('Primary phone is valid numerical string:', resultPrimary);
console.log('Secondary phone is valid numerical string:', resultSecondary);
