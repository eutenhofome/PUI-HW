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

function glazingChange(element) {
    const glazePriceChange = (element.value);
    updatedPrice = (2.49 + glazePriceChange);
    price = "$" + updatedPrice.toFixed(2);
}

function packChange(element) {
    const packPriceChange = (element.value);
}