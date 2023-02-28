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

document.querySelector("#checkout").addEventListener("click", updateCart);

function updateCart() {
    let glazeIndex = chooseGlaze.selectedIndex;
    let glazeChoice = glazeOptions[glazeIndex];

    let packIndex = choosePack.selectedIndex;
    let packChoice = packOptions[packIndex];

    let chosenRoll = new Roll(rollType, glazeChoice.glaze, packChoice.pack, rollPrice);
    cart.push(chosenRoll);
    console.log(cart);


}



