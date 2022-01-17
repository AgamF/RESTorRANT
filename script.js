const viewMenuButton = document.getElementById('menu-btn');
const viewOrderButton = document.getElementById('order-btn');

const viewMenu = () => {
    window.scrollTo(0, 1120);
}

const viewOrder = () => {
    window.scrollTo(0, 2500)
}

const about = () => {
    alert('We literally have no history, this is a fictional restaurant.')
}

const submitOrder = () => {
    alert('Order submitted!')
}

viewMenuButton.addEventListener('click', viewMenu)
viewOrderButton.addEventListener('click', viewOrder)
