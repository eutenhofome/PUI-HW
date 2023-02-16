glazingOptions = [
    {
        glaze: "Original",
        glazePrice: 0
    }

    {
        glaze: "Sugar Milk",
        glazePrice: 0
    }

    {
        glaze: "Vanilla Milk",
        glazePrice: 0.50
    }

    {
        glaze: "Double Chocolate",
        glazePrice: 1.50
    }
]

const glazing = [original, sugar, vanilla, chocolate]

packOptions = [
    {
        pack: "1",
        packDiff: 1
    }

    {
        pack: "3",
        packDiff: 3
    }

    {
        pack: "6",
        packDiff: 5
    }

    {
        pack: "12",
        packDiff: 10
    }
]

const packs = [packof1, packof3, packof6, packof12]

var glaze = document.getElementById("glazing");
for (i=0; i<4; i++) {
    let curr = document.createElement("glazeChoice");
    glazeChoice.text = glazingOptions.glaze;
    glazeChoice.value = glazingOptions.glazePrice;
    glazing.add(curr);
}

var pack = document.getElementById("packing");
for (i=0; i<4; i++) {
    let curr = document.createElement("packChoice");
    packChoice.text = packingOptions.pack;
    packChoice.value = glazingOptions.packDiff;
    packing.add(curr);
}

function glazingChange(element) {
    const priceChange(element.value);
}

function packChange(element) {
    const priceChange(element.value);
}
