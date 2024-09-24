const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if ((hourOfDay !== null) && (minuteOfDay !== null) && (hourOfDay == 0) && (minuteOfDay == 0)) {
	const taxAsDecimal = parseInt(tax) / 100;
  	const startingAfterTax = salary - (salary * taxAsDecimal);
	const balance = startingAfterTax - transport - food - rent
	console.log(balance.toFixed(2))
} else {
	console.log("Balance could not be calculated");

}
	

