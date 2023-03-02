const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// array with each glaze option, and glaze price for iteration
const glazeOptions = {
        "Original": {"glazePrice": 0},
        "Sugar Milk": {"glazePrice": 0},
        "Vanilla Milk": {"glazePrice": 0.50},
        "Double Chocolate": {"glazePrice": 1.50}
    }

const packOptions = {
    "1": {"packDiff": 1},
    "3": {"packDiff": 3},
    "6": {"packDiff": 5},
    "12": {"packDiff": 10}
    }

export {rolls}
export {glazeOptions}
export {packOptions}