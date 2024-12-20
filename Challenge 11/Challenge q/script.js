// Do not edit HTML

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line only
const books = [
    {
        status: document.querySelector('#book1 .status').innerText,
        html: {
            status: document.querySelector('#book1 .status'),
            reserve: document.querySelector('#book1 .reserve'),
            checkout: document.querySelector('#book1 .checkout'),
            checkin: document.querySelector('#book1 .checkin')
        }
    },
    {
        status: document.querySelector('#book2 .status').innerText,
        html: {
            status: document.querySelector('#book2 .status'),
            reserve: document.querySelector('#book2 .reserve'),
            checkout: document.querySelector('#book2 .checkout'),
            checkin: document.querySelector('#book2 .checkin')
        }
    },
    {
        status: document.querySelector('#book3 .status').innerText,
        html: {
            status: document.querySelector('#book3 .status'),
            reserve: document.querySelector('#book3 .reserve'),
            checkout: document.querySelector('#book3 .checkout'),
            checkin: document.querySelector('#book3 .checkin')
        }
    }
];

const items = [0, 1, 2];

items.forEach((i) => {
    const book = books[i]; // Get the current book object
    const status = STATUS_MAP[book.status]; // Get the status properties based on the book's status

    // Update the color of the status element
    book.html.status.style.color = status.color;

    // Update the reserve, checkout, and checkin actions
    book.html.reserve.disabled = !status.canReserve; // Enable/disable reserve button
    book.html.checkout.disabled = !status.canCheckout; // Enable/disable checkout button
    book.html.checkin.disabled = !status.canCheckIn; // Enable/disable checkin button
});