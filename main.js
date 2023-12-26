
// Get references to the buttons and audio elements
let henButton = document.getElementById('hen');
let dogButton = document.getElementById('dog');
let duckButton = document.getElementById('duck');
let goatButton = document.getElementById('goat');
let cowButton = document.getElementById('cow');
let pigButton = document.getElementById('pig');
let roosterButton = document.getElementById('rooster');
let sheepButton = document.getElementById('sheep');
let horseButton = document.getElementById('horse');


let henSound = document.getElementById('sound1');
let dogSound = document.getElementById('sound3');
let duckSound = document.getElementById('sound4');
let goatSound = document.getElementById('sound5');
let cowSound = document.getElementById('sound2');
let pigSound = document.getElementById('sound7');
let roosterSound = document.getElementById('sound8');
let sheepSound = document.getElementById('sound9');
let horseSound = document.getElementById('sound6');

let textsEn = ['Animal Sound Game', 'Click on animal pictures to hear the sounds. Feel free to use the keyboard as well. The map for keyboard is provided.', 'Animal Sound Key', 'Hen','Dog','Duck','Goat','Cow', 'Pig', 'Rooster', 'Sheep', 'Horse', 'Where is the','Thanks for stopping by! Created by Zenaida Adame'];
let textsEs = ['Juego de Sonidos de Animales', 'Haz clic en las imágenes de los animales para escuchar los sonidos. No dudes en usar el teclado. Se proporciona una guía para el teclado.','Tecla de sonido de animal', 'Gallina', 'Perro', 'Pato', 'Cabra', 'Vaca', 'Cerdo', 'Gallo', 'Oveja', 'Caballo', '¿Dónde está','¡Gracias por pasar! Creado por Zenaida Adame'];
let question = document.getElementsByTagName('h2')[0];

let score = 0;

let currentAnimal = "";
let currentLanguage ="en";

// Update the text elements based on the current language
function updateQuestion() {
    if (currentLanguage == 'en') {
        question.textContent = textsEn[12];
    
    } else {
        question.textContent = textsEs[12];
    }
    }
    // Update the text elements initially
    updateQuestion();
    
let animalsEn = ["Hen", "Dog", "Duck", "Goat", "Cow", "Pig", "Rooster", "Sheep", "Horse"];
let animalsEs = ["Gallina", "Perro", "Pato", "Cabra", "Vaca", "Cerdo", "Gallo", "Oveja", "Caballo"];

currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
document.getElementById('question').innerText = question + currentAnimal + "?";

// Attach event listeners to the buttons
henButton.addEventListener('click', function() {
playSound(henSound);
if (currentAnimal === 'Hen') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
dogButton.addEventListener('click', function() {
playSound(dogSound);
if (currentAnimal === 'Dog') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
duckButton.addEventListener('click', function() {
playSound(duckSound);
if (currentAnimal === 'Duck') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question+ currentAnimal + "?";
    }, 1000);
}
});
goatButton.addEventListener('click', function() {
playSound(goatSound);
if (currentAnimal === 'Goat') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
cowButton.addEventListener('click', function() {
playSound(cowSound);
if (currentAnimal === 'Cow') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
pigButton.addEventListener('click', function() {
playSound(pigSound);
if (currentAnimal === 'Pig') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
roosterButton.addEventListener('click', function() {
playSound(roosterSound);
if (currentAnimal === 'Rooster') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
sheepButton.addEventListener('click', function() {
playSound(sheepSound);
if (currentAnimal === 'Sheep') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
}
});
horseButton.addEventListener('click', function() {
playSound(horseSound);
if (currentAnimal === 'Horse') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "../images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "../images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        currentAnimal = currentLanguage === 'en' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];

        document.getElementById('question').innerText = question + currentAnimal + "?";  

    }, 1000);
}
});

// Function to play a sound
function playSound(sound) {
    sound.currentTime = 0; // Resetsw the sound to the beginning
    sound.play();
}

// Attach event listener for keyboard input
document.addEventListener('keydown', function(event) {
let key = event.key;
    switch(key) {
        case 'w': 
        playSound(henSound);
        break;
        case 'a': 
        playSound(dogSound);
        break;
        case 's': 
        playSound(duckSound);
        break;
        case 'd': 
        playSound(goatSound);
        break;
        case 'q': 
        playSound(cowSound);
        break;
        case 'e': 
        playSound(pigSound);
        break;
        case 'z': 
        playSound(roosterSound);
        break;
        case 'x': 
        playSound(sheepSound);
        break;
        case 'c': 
        playSound(horseSound);
        break;
}
});

// Get a reference to the text elements
let title = document.getElementsByTagName('h1')[0];
let description = document.getElementsByTagName('p')[0];
let map = document.getElementsByTagName('h1')[1];
let chicken = document.getElementsByTagName('h3')[0];
let dog = document.getElementsByTagName('h3')[1];
let duck = document.getElementsByTagName('h3')[2];
let goat = document.getElementsByTagName('h3')[3];
let cow = document.getElementsByTagName('h3')[4];
let pig = document.getElementsByTagName('h3')[5];
let rooster = document.getElementsByTagName('h3')[6];
let sheep = document.getElementsByTagName('h3')[7];
let horse = document.getElementsByTagName('h3')[8];
let footer = document.getElementsByTagName('p')[1];



// Update the text elements based on the current language
function updateTexts() {
if (currentLanguage == 'en') {
    title.textContent = textsEn[0];
    description.textContent = textsEn[1];
    map.textContent = textsEn[2];
    chicken.textContent = textsEn[3];
    dog.textContent = textsEn[4];
    duck.textContent = textsEn[5];
    goat.textContent = textsEn[6];
    cow.textContent = textsEn[7];
    pig.textContent = textsEn[8];
    rooster.textContent = textsEn[9];
    sheep.textContent = textsEn[10];
    horse.textContent = textsEn[11];
    footer.textContent = textsEn[13];
} else {
    title.textContent = textsEs[0];
    description.textContent = textsEs[1];
    map.textContent = textsEs[2];
    chicken.textContent = textsEs[3];
    dog.textContent = textsEs[4];
    duck.textContent = textsEs[5];
    goat.textContent = textsEs[6];
    cow.textContent = textsEs[7];
    pig.textContent = textsEs[8];
    rooster.textContent = textsEs[9];
    sheep.textContent = textsEs[10];
    horse.textContent = textsEs[11];
    footer.textContent =textsEs[13];
}
}

// Update the text elements initially
updateTexts();

// Get a reference to the language buttons
let buttonEn = document.getElementsByTagName('button')[0];
let buttonEs = document.getElementsByTagName('button')[1];

// Add event listeners to the language buttons
buttonEn.addEventListener('click', function() {
currentLanguage = 'en';
updateTexts();
});
buttonEs.addEventListener('click', function() {
currentLanguage = 'es';
updateTexts();
});

