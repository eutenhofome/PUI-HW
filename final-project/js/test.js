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

// Array of All pairs, final value is a key that links spanish and english tiles to check for solution
let tileValues = [
    ["Mi nombre es", "My name is", "audio/minombrees.mp3", "audio/mynameis.mp3", "a"],
    ["Yo soy", "I am", "audio/yosoy.mp3", "audio/iam.mp3", "b"],
    ["Yo me llamo", "I am called", "audio/yomellamo.mp3", "audio/iamcalled.mp3", "c"],
    ["Que te llamas", "What's your name", "audio/quetellamas.mp3", "audio/whatisyourname.mp3", "d"],
    ["Buenos días", "Good morning", "audio/buenosdias.mp3", "audio/goodmorning.mp3", "e"],
    ["Buenas tardes", "Good afternoon", "audio/buenastardes.mp3", "audio/goodafternoon.mp3", "f"],
    ["Buenas noches", "Goodnight", "audio/buenasnoches.mp3", "audio/goodnight.mp3", "g"],
    ["Adiós", "Goodbye", "audio/adios.mp3", "audio/goodbye.mp3", "h"],
    ["Bienvenido", "Welcome", "audio/bienvenido.mp3", "audio/welcome.mp3", "i"],
    ["Cómo estás", "How are you", "audio/comoestas.mp3", "audio/howareyou.mp3"], "j",
    ["Hasta Luego", "See you later", "audio/hastaluego.mp3", "audio/seeyoulater.mp3"], "k",
    ["Cuidate", "Take Care", "audio/cuidate.mp3", "audio/takecare.mp3", "l"]
]


// generates random number from a range (max)
function random(max) {
    let num = Math.floor((Math.random() * max));
    return Number(num);
    }

// creates array of shuffled indexes from range of 0 to max
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

// Creates array of the organized tiles, with language markers
let tileInputs = new Array()
function createTiles() {
    let values = tileValues;
    randomArray(8);

    for (let i = 0; i < 8; i++) {
        let inputsIndex = inputsIndexes[i];
        // let key = values[inputsIndex][3]
        tileInputs.push(new Tile(values[inputsIndex][0],values[inputsIndex][2],values[inputsIndex][1], "sp", values[inputsIndex][4]));
        tileInputs.push(new Tile(values[inputsIndex][1],values[inputsIndex][3],values[inputsIndex][0], "eng", values[inputsIndex][4]))
    }

}
// calls createTiles to initialize the available tileInputs
createTiles();

// shuffled tile array function again
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

// fill the tiles onto board with shuffled array, use jquery to group and identify the tiles by changing id's (for key), name (for grouping and avoiding picking multiple of same language)
function fillTiles() {
    let inputs = tileInputs;
    shuffledArray(16);
    for (let i = 0; i < 16; i++) {
        index = tileIndexes[i];
        let tile = inputs[i];
        $(`#phrase${index}`).text(tile.phrase);
        if (tile.language == "sp") {
            $('input[name=box'+ index + ']').attr("id", "sp-" + tile.key);
            $('input[name=box'+ index + ']').attr("name","sp");
            $(`#label${index}`).attr("for", "sp-" + tile.key);
        } 
        else {
            $('input[name=box'+ index + ']').attr("id", "eng-" + tile.key);
            $('input[name=box'+ index + ']').attr("name","eng");
            $(`#label${index}`).attr("for", "eng-" + tile.key);

        }

    }
}

// When hidden reaches 16, game is over as all tiles have been matched
// Tries and Wrong used to calculate accuracy rate
let tries = 0;
let wrong = 0;
let hidden = 0;

// On click of spanish tile, if there is no english tile selected, return
$(`.boxes`).on("click", "input[name=sp]", function() {
    if ($('input[name=eng]:checked').attr("id") == null) {
        return
    }
    // otherwise, checkTiles to see if it is a match
    checkTiles();
});

// vice versa
$(`.boxes`).on("click", "input[name=eng]", function() {
    if ($('input[name=sp]:checked').attr("id") == null) {
        return
    }
    checkTiles();
});

function checkTiles() {
    // uses previously marked id's to gather key of each title
    let sp = $(`input[name=sp]:checked`);
    let eng = $(`input[name=eng]:checked`);
    let spKey = $(`input[name=sp]:checked`).attr("id")[3];
    let engKey = $(`input[name=eng]:checked`).attr("id")[4];
    let engBox = eng.next();
    let spBox = sp.next();

    // If keys do not match, brief red shadow on the tiles
    if (spKey != engKey) {
        wrong +=1;
        tries +=1;
        engBox.css('box-shadow', '0 0 15px rgb(255, 0, 0)');
        spBox.css('box-shadow', '0 0 15px rgb(255, 0, 0)');
        setTimeout(function() {
            engBox.css('box-shadow', 'none');
            spBox.css('box-shadow', 'none');
        }, 700);
    
    // If keys match, tiles slowly fade out and reorganize
    } else {
        engBox.css('box-shadow', '0 0 15px rgb(34, 255, 0)');
        spBox.css('box-shadow', '0 0 15px rgb(34, 255, 0)');
        engBox.fadeOut("slow");
        spBox.fadeOut("slow");
        hidden += 2;
        tries += 1;
    }
    
    // Unchecks all of the currently checked tiles for next turn
    $(`input[type=radio]`).prop("checked", false);
    
    // When 16 tiles are flipped, gameOver is called
    if (hidden == 16) {
        gameOver();
    }
}

// Timer
let time = 00;
var timer = setInterval(() => {
    if (hidden != 16) {
        time += 1;
        $("#timer").text(time);
    }
}, 1000);

// Calculates accuracy, inputs time and accuracy into popup, and displays popup
function gameOver() {
    let accuracy = Math.floor(((tries - wrong)/(tries))*100);
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    $("#message").text("Congratulations! You completed the exam in " + time + " seconds with " + accuracy  + "% accuracy.");
}
