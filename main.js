
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

let textsEn = ['Learn Farm Animals in Spanish', 'Click on animal pictures to hear the sounds. Feel free to use the keyboard as well. The map for keyboard is provided.', 'Animal Sound Key', 'Hen','Dog','Duck','Goat','Cow', 'Pig', 'Rooster', 'Sheep', 'Horse', 'Where is the','Thanks for stopping by! Created by Zenaida Adame'];
let textsEs = ['Aprender animales de granja en español', 'Haz clic en las imágenes de los animales para escuchar los sonidos. No dudes en usar el teclado. Se proporciona una guía para el teclado.','Tecla de sonido de animal', 'Gallina', 'Perro', 'Pato', 'Cabra', 'Vaca', 'Cerdo', 'Gallo', 'Oveja', 'Caballo', '¿Dónde está','¡Gracias por pasar! Creado por Zenaida Adame'];
let question = document.getElementsByTagName('h2')[0];

let animalsEn = ["Hen", "Dog", "Duck", "Goat", "Cow", "Pig", "Rooster", "Sheep", "Horse"];
let animalsEs = ["La Gallina", "El Perro", "El Pato", "La Cabra", "La Vaca", "El Cerdo", "El Gallo", "La Oveja", "El Caballo"];

let score = 0;

let currentAnimal = "";
let currentLanguage ="english";
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
updateQuestion();

// Update the text elements based on the current language

function updateQuestion() {
        // Update the text content of the question element with the question and animal name
        if (currentLanguage == 'english') {
            question.textContent = textsEn[12] + " " + currentAnimal + "?";
        } else {
            question.textContent = textsEs[12] + " " + currentAnimal + "?";
        };
    }
    
// Attach event listeners to the buttons
henButton.addEventListener('click', function() {
playSound(henSound);
if (currentAnimal === 'Hen' || currentAnimal === 'La Gallina') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
});
dogButton.addEventListener('click', function() {
playSound(dogSound);
if (currentAnimal === 'Dog'|| currentAnimal === 'El Perro') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
});
duckButton.addEventListener('click', function() {
playSound(duckSound);
if (currentAnimal === 'Duck'|| currentAnimal === 'El Pato') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';

    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
});
goatButton.addEventListener('click', function() {
playSound(goatSound);
if (currentAnimal === 'Goat'|| currentAnimal === 'La Cabra') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
    updateQuestion();
});
cowButton.addEventListener('click', function() {
playSound(cowSound);
if (currentAnimal === 'Cow'|| currentAnimal === 'La Vaca') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
       
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
    updateQuestion();
});
pigButton.addEventListener('click', function() {
playSound(pigSound);
if (currentAnimal === 'Pig'|| currentAnimal === 'El Cerdo') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
        
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
});
roosterButton.addEventListener('click', function() {
playSound(roosterSound);
if (currentAnimal === 'Rooster'|| currentAnimal === 'El Gallo') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        
    }, 1000);
}
    currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
    question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
});
sheepButton.addEventListener('click', function() {
playSound(sheepSound);
if (currentAnimal === 'Sheep'|| currentAnimal === 'La Oveja') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
        
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
});
horseButton.addEventListener('click', function() {
playSound(horseSound);
if (currentAnimal === 'Horse'|| currentAnimal === 'El Caballo') {
    score++;
    document.getElementById('scoreNumber').innerText = score;
    let star = document.createElement('img');
    star.src = "/images/star.png";
    document.getElementById('symbols').appendChild(star);
    setTimeout(function(){
        star.style.display ='none';
    }, 1000);
} else {
    score--;
    document.getElementById('scoreNumber').innerText = score;
    let x = document.createElement('img');
    x.src = "/images/x.png";
    document.getElementById('symbols').appendChild(x);
    setTimeout(function(){
        x.style.display ='none';
    }, 1000);
}
currentAnimal = currentLanguage == 'english' ? animalsEn[Math.floor(Math.random() * animalsEn.length)] : animalsEs[Math.floor(Math.random() * animalsEs.length)];
question.textContent = question.textContent + " " + currentAnimal + "?";
updateQuestion();
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
let footer = document.getElementById('footer');



// Update the text elements based on the current language
function updateTexts() {
if (currentLanguage == 'english') {
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
    // footer.textContent = textsEn[13];
} else if(currentLanguage =='spanish'){
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
    // footer.textContent =textsEs[13];
}
}

// Update the text elements initially
updateTexts();

// Get a reference to the language buttons
let buttonEn = document.getElementById('buttonen');
let buttonEs = document.getElementById('buttones');

// Add event listeners to the language buttons
buttonEn.addEventListener('click', function() {
currentLanguage = 'english';
updateTexts();
updateQuestion();
});
buttonEs.addEventListener('click', function() {
currentLanguage = 'spanish';
updateTexts();
updateQuestion();
});

