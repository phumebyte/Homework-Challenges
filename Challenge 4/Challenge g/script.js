const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;  

let location = 'RSA';  
let currency = null;  
let customers = 1;  
let shipping = 0;  // Declare shipping here

if (location === 'RSA') {
    shipping = 400;
    currency = 'R';
} else if (location === 'NAM') {
    shipping = 600;
    currency = '$';
} else if (location === 'NK') {
    console.log(BANNED_WARNING);
} else {
    shipping = 800;  
    currency = '$';
}

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;  
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

// Calculate total cost excluding shipping
let totalCost = shoes + toys + shirts + batteries + pens;

if (totalCost >= 1000) {
    if ((location === 'NAM' || location === 'RSA') && customers === 1) {
        shipping = 0; 
        console.log(FREE_WARNING);
    } 
}

// Display total cost including shipping
let finalCost = totalCost + shipping;
console.log('Total Price:', currency, finalCost);

// Check for multiple customers and free shipping warning
if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
}

