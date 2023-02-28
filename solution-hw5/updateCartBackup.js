// import rolls and make constructor class
import {rolls} from "./rollsData.js"
import {glazeOptions} from "./rollsData.js"
import {packOptions} from "./rollsData.js"

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.finalPrice = ((basePrice + glazeOptions[rollGlazing].glazePrice) * (packOptions[packSize].packDiff)).toFixed(2);
    }
}

const cart = new Set()

// add a roll into the stored template
function addToTemplate(rollType, rollGlazing, packSize, basePrice) {
    const addRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.add(addRoll);
    return addRoll;
}

// make template show all the accurate rolls
function alterTemplate(roll) {
    const template = document.querySelector("#cartTemplate");
    const clone = template.content.cloneNode(true);
    //makes roll element the whole cart div to add to
    roll.element =clone.querySelector(".bunUnit")

    // if remove button click -> call removeRoll with clicked Roll
    const removeButton = roll.element.querySelector("#remove");
    if (removeButton) {
        removeButton.addEventListener('click',removeRoll(roll));
    }
    // prepend to the wholeCart, to visually add
    const wholeCart = document.querySelector(".wholeCart");
    wholeCart.prepend(roll.element);
    updateVisuals(roll);
}

// action for remove button
function removeRoll(roll) {
    // remove roll from whole cart DOM & cart set
    roll.element.remove();
    cart.set.delete(roll);
}

//update visuals after each roll is added, so proper info is shown
function updateVisuals(roll) {
    
    const bunPic = roll.element.querySelector(".bunpic");
    bunPic.src = "./products/" + rolls[roll.type].imageFile;

    const bunName = roll.element.querySelector(".itemName");
    bunName.innerHTML = roll.type;

    const bunDiff = roll.element.querySelector(".itemDiff");
    bunDiff.innerHTML = "Glazing: " + roll.glazing;

    const bunSize = roll.element.querySelector(".itemSize");
    bunSize.innerHTML = "Pack Size: " + roll.size; 

    const bunPrice = roll.element.querySelector(".price");
    bunPrice.innerHTML = roll.finalPrice;
}

// add the rolls provided on canvas
addToTemplate("Original", "Sugar Milk", "1", 2.49);
addToTemplate("Walnut", "Vanilla Milk", "12", 3.49);
addToTemplate("Raisin", "Sugar Milk", "3", 2.99);
addToTemplate("Apple", "Original", "3", 3.49);

// alter template to reflect the canvas rolls
for (const bun of cart) {
    alterTemplate(bun);