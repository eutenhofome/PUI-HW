// import rolls and make constructor class
import {rolls} from "./rollsData.js"

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const cart = []

// +source price and image
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
const rollPrice = rolls[rollType].basePrice
const rollImage = rolls[rollType]['imageFile']

// Update the header text
const headerElement = document.querySelector('.currentroll');
headerElement.innerText = rollType + " Cinnamon Roll"

// Update the image
const bunImage = document.querySelector('.bunpic');
bunImage.src = "./products/" + rollImage

// updates cart array by calling updatecart when checkout button clicked
document.querySelector("#checkout").addEventListener("click", updateCart);

// roll instance from item/index/choice which is then pushed into cart aray
function updateCart() {
    let glazeIndex = chooseGlaze.selectedIndex;
    let glazeChoice = glazeOptions[glazeIndex];

    let packIndex = choosePack.selectedIndex;
    let packChoice = packOptions[packIndex];

    let chosenRoll = new Roll(rollType, glazeChoice.glaze, packChoice.pack, rollPrice);
    cart.push(chosenRoll);

    let cartArrayString = JSON.stringify(cart);
    localStorage.setItem("storedBuns", cartArrayString);
    console.log(localStorage.getItem("storedBuns"));

}

if (localStorage.getItem("storedBuns") != null) {
    let parsedBuns = JSON.parse(localStorage.getItem("storedBuns"));
    console.log(parsedBuns)

    var bun;
    for (bun in parsedBuns) {
        const currBun = parsedBuns[bun];
        cart.push(currBun);
    }
}




