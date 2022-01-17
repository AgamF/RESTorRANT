const viewMenuButton = document.getElementById('menu-btn');
const viewOrderButton = document.getElementById('order-btn');
let itemCounter = 0;
let item;

const menuItems = [
    appetizers = {
        pasta: "Pasta",
        pizza: "Pizza",
        salad: "Salad",
        taco: "Taco",
        croissant: "Croissant and Coffee"
    },
    drinks = {
        cola: "Coca-Cola",
        water: "Water bottle",
        lemonade: "Lemonade", 
        sprite: "Sprite",
        fuzetea: "Fuze Tea"
    }
];

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