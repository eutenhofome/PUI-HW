<script type="module" src="./rollsData.js" defer></script>

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

// +source price and image
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
const rollPrice = rolls[rollType].basePrice
const rollImage = rolls[rollType]['imageFile']

// Initialize roll with whats already in cart

// make template show all the rolls
function expandTemplate() {

}

// remove a Roll with remove button
function removeRoll() {
    
}