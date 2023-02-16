//  initializing addedPrice and finalPrice, using addedPrice to interact with a glazing change when computing a multiplication price
let addedPrice = 0;
let finalPrice = 0;

// array with each glaze option, and glaze price for iteration
const glazeOptions = [
    {
        glaze: "Original",
        glazePrice: 0
    },

    {
        glaze: "Sugar Milk",
        glazePrice: 0
    },

    {
        glaze: "Vanilla Milk",
        glazePrice: 0.50
    },

    {
        glaze: "Double Chocolate",
        glazePrice: 1.50
    }
]

const packOptions = [
    {
        pack: "1",
        packDiff: 1
    },

    {
        pack: "3",
        packDiff: 3
    },

    {
        pack: "6",
        packDiff: 5
    },

    {
        pack: "12",
        packDiff: 10
    }
]

let chooseGlaze = document.querySelector('#glazing');
let choosePack = document.querySelector('#packing');

// looping for glaze & pack size to add the options
for (let i=0; i<4; i++) {
    let option = document.createElement('option');
    option.text = glazeOptions[i].glaze;
    option.value = glazeOptions[i].glazePrice;
    chooseGlaze.add(option);
}

for (let i=0; i<4; i++) {
    let option = document.createElement('option');
    option.text = packOptions[i].pack;
    option.value = packOptions[i].packDiff;
    choosePack.add(option);
}

// changes the glaze price by init the added value, then limiting to 2 decimals
function glazingChange(element) {
    const glazeChange = Number(element.value);
    console.log(element.value);
    addedPrice = Number(2.49 + glazeChange).toFixed(2);
    console.log(addedPrice);
    finalPrice = "$" + (addedPrice);
    updatePrice(finalPrice);
}

// multiplies the added price by the pack size value w/ 2 decimals
function packingChange(element) {
   const packChange = Number(element.value);
   multPrice = Number(addedPrice * packChange).toFixed(2);
   finalPrice = "$" + (multPrice);
   updatePrice(finalPrice);
}

// stores new price in final price value w/ the "price" id
function updatePrice(price) {
    let thePrice = document.getElementById('price')
    thePrice.innerHTML = finalPrice;
}