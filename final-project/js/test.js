// timer
let test = true;
let time = 00;
if (test) {
    var x = setInterval(() => {
        time += 1;
        $("#timer").text(time);
    }, 1000);
}

// establish tile class
class Tile {
    constructor(phrase, audio, translation, language) {
        this.phrase = phrase;
        this.audio = audio;
        this.translation = translation;
        this.language = language;
    }
}

// Array of All pairs with audios
let tileValues = [
    ["Mi nombre es", "My name is", "audio/minombrees.mp3", "audio/mynameis.mp3"],
    ["Yo soy", "I am", "audio/yosoy.mp3", "audio/iam.mp3"],
    ["Yo me llamo", "I am called", "audio/yomellamo.mp3", "audio/iamcalled.mp3"],
    ["Que te llamas", "What is your name", "audio/quetellamas.mp3", "audio/whatisyourname.mp3"],
    ["Buenos días", "Good morning", "audio/buenosdias.mp3", "audio/goodmorning.mp3"],
    ["Buenas tardes", "Good afternoon", "audio/buenastardes.mp3", "audio/goodafternoon.mp3"],
    ["Buenas noches", "Goodnight", "audio/buenasnoches.mp3", "audio/goodnight.mp3"],
    ["Adiós", "Goodbye", "audio/adios.mp3", "audio/goodbye.mp3"],
    ["Bienvenido", "Welcome", "audio/bienvenido.mp3", "audio/welcome.mp3"],
    ["Cómo estás", "How are you", "audio/comoestas.mp3", "audio/howareyou.mp3"],
    ["Hasta Luego", "See you later", "audio/hastaluego.mp3", "audio/seeyoulater.mp3"],
    ["Cuidate", "Take Care", "audio/cuidate.mp3", "audio/takecare.mp3"]
]

// init tile classes into tileinputs

// random index array generator for tile randomization
function random(max) {
    let num = Math.floor((Math.random() * max));
    return Number(num);
    }

let inputsIndexes = []
function randomArray(max) {
    let numberx = random(max);
    while (inputsIndexes.length < max) {
        if (inputsIndexes.includes(numberx)) {
            randomArray(max);
        } else {
            inputsIndexes.push(numberx);
        }
    }
}

let tileInputs = []
function createTiles() {
    let values = tileValues;
    randomArray(8);

    for (let i = 0; i < 8; i++) {
        let inputsIndex = inputsIndexes[i];
        tileInputs.push(new Tile(values[inputsIndex][0],values[inputsIndex][2],values[inputsIndex][1], "sp"));
        tileInputs.push(new Tile(values[inputsIndex][1],values[inputsIndex][3],values[inputsIndex][0], "eng"))

    }

}
createTiles();

// shuffled tile array function
let tileIndexes = []
function shuffledArray(max) {
    let numberx = random(max);
    while (tileIndexes.length < max) {
        if (tileIndexes.includes(numberx)) {
            shuffledArray(max);
        } else {
            tileIndexes.push(numberx);
        }
    }
}

// fill the tiles onto board
function fillTiles() {
    let inputs = tileInputs;
    shuffledArray(16);
    for (let i = 0; i < 16; i++) {
        index = tileIndexes[i];
        let tile = inputs[i];
        $(`#phrase${index}`).text(tile.phrase);

        if (tile.language == "sp") {
            $(`#box${index}`).attr("id", "sp");
            $('input[name=box'+ index + ']').attr("name","sp");
            // $('input[name=eng]').val() = "t";
            // $('input[name=box'+ index + ']').attr("id","sp");
        } else {
            $(`#box${index}`).attr("id", "eng");
            $('input[name=box'+ index + ']').attr("name","eng");
            // $('input[name=box'+ index + ']').attr("id","eng");
        }

    }
}

$(`.box`).on("click", "input[name=sp]", function() {
    console.log("k")
    console.log($('input[name=eng]').val)
    if ($('input[name=eng]:checked').val() == null) {
        return
    }
    console.log("other one is clicked")
});

$(`.box`).on("click", "input[name=eng]", function() {
    if ($('input[name=eng]:checked').val() == null) {
        return
    }
});

const audio = new Audio("audio/buenosdias.mp3");

const audiobutton = document.querySelectorAll("#audio");

// audiobutton.forEach( => {
//     audiobutton.addEventListener("click", () => {
//         audio.play();
//     });
// });

