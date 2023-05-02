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
    constructor(phrase, audio, translation, language, key) {
        this.phrase = phrase;
        this.audio = audio;
        this.translation = translation;
        this.language = language;
        this.key = key;
    }
}

// Array of All pairs with audios
let tileValues = [
    ["Mi nombre es", "My name is", "audio/minombrees.mp3", "audio/mynameis.mp3", "a"],
    ["Yo soy", "I am", "audio/yosoy.mp3", "audio/iam.mp3", "b"],
    ["Yo me llamo", "I am called", "audio/yomellamo.mp3", "audio/iamcalled.mp3", "c"],
    ["Que te llamas", "What is your name", "audio/quetellamas.mp3", "audio/whatisyourname.mp3", "d"],
    ["Buenos días", "Good morning", "audio/buenosdias.mp3", "audio/goodmorning.mp3", "e"],
    ["Buenas tardes", "Good afternoon", "audio/buenastardes.mp3", "audio/goodafternoon.mp3", "f"],
    ["Buenas noches", "Goodnight", "audio/buenasnoches.mp3", "audio/goodnight.mp3", "g"],
    ["Adiós", "Goodbye", "audio/adios.mp3", "audio/goodbye.mp3", "h"],
    ["Bienvenido", "Welcome", "audio/bienvenido.mp3", "audio/welcome.mp3", "i"],
    ["Cómo estás", "How are you", "audio/comoestas.mp3", "audio/howareyou.mp3"], "j",
    ["Hasta Luego", "See you later", "audio/hastaluego.mp3", "audio/seeyoulater.mp3"], "k",
    ["Cuidate", "Take Care", "audio/cuidate.mp3", "audio/takecare.mp3", "l"]
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

let tileInputs = new Array()
function createTiles() {
    let values = tileValues;
    randomArray(8);

    for (let i = 0; i < 8; i++) {
        let inputsIndex = inputsIndexes[i];
        tileInputs.push(new Tile(values[inputsIndex][0],values[inputsIndex][2],values[inputsIndex][1], "sp"));
        tileInputs.push(new Tile(values[inputsIndex][1],values[inputsIndex][3],values[inputsIndex][0], "eng"))
        console.log(tileInputs)
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
    console.log(inputs)
    shuffledArray(16);
    for (let i = 0; i < 16; i++) {
        index = tileIndexes[i];
        let tile = inputs[i];
        $(`#phrase${index}`).text(tile.phrase);
        console.log("KEY", tile.key)
        $(`.boxinput${index}`).val(tile.key);
        if (tile.language == "sp") {
            $(`#box${index}`).attr("id", "sp");
            $('input[name=box'+ index + ']').attr("name","sp");
        } 
        if (tile.language == "eng") {
            $(`#box${index}`).attr("id", "eng");
            $('input[name=box'+ index + ']').attr("name","eng");
        }

    }
}

$(`.boxes`).on("click", "input[name=sp]", function() {
    if ($('input[name=eng]:checked').val() == null) {
        return
    }
    checkTiles();
});

$(`.boxes`).on("click", "input[name=eng]", function() {
    if ($('input[name=eng]:checked').val() == null) {
        return
    }
    checkTiles();
});

function checkTiles() {
    let sp = $(`input[name=sp]:checked`);
    let eng = $(`input[name=eng]#checked`);;
    console.log($(`input[name=sp]:checked`))
    console.log(sp.val);
    console.log(eng.val)
}

const audio = new Audio("audio/buenosdias.mp3");

const audiobutton = document.querySelectorAll("#audio");

// audiobutton.forEach( => {
//     audiobutton.addEventListener("click", () => {
//         audio.play();
//     });
// });

