// Game File //

// Player Classes //

let player;

class Player {
    constructor(name, health, attack, speed) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.speed = speed;
    };
};

let knight = new Player(
    'Knight',
    1750,
    250,
    150
);

let monk = new Player(
    'Monk',
    1300,
    300,
    250
);

let rogue = new Player(
    'Rogue',
    1000,
    400,
    400
);

let scrub = new Player(
    'Scrub',
    500,
    100,
    100
);

// Enemy Classes //

let enemy;

class Enemy {
    constructor(name, health, attack, speed, speech) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.speed = speed;
        this.speech = speech;
    };
};

let rat = new Enemy(
    'Large Rat', 
    200, 
    50, 
    200,
    "'Squeak Squeak Squeak!'"
);

let zombie = new Enemy(
    'Zombie', 
    300, 
    100, 
    100,
    "'Uuuuuuuhhhhhhh.'"
);

let wolf = new Enemy(
    'Wolf',
    400, 
    200, 
    300,
    "'Arroooooooo!'"
);

let manAtArms = new Enemy(
    'Berserker', 
    500, 
    250, 
    250,
    "'You made it this far... but this is the end of the line!'"
);

let bear = new Enemy(
    'Bear', 
    750, 
    500, 
    300,
    "'GRRRRRRRR!!!'"
);

let priestess = new Enemy(
    'Priestess', 
    1000, 
    100, 
    200,
    "'...'"
);

let squire = new Enemy(
    'Squire', 
    850, 
    400, 
    350,
    "'I have trained my entire life for this!'"
);

let darkKnight = new Enemy(
    'Dark Knight', 
    1000, 
    500, 
    500,
    "'Step into the darkness...'"
);

let lion = new Enemy(
    'Lion', 
    1200, 
    750, 
    500,
    "'*snarls*'"
);

let paladin = new Enemy(
    'Paladin', 
    1500, 
    750, 
    750,
    "'Step into the light!'"
);

let emperor = new Enemy(
    'The Emperor', 
    2000, 
    1000, 
    750,
    "'I command thee kneel!'"
);

let princess = new Enemy(
    'The Princess',
    100,
    100,
    100
);

// Random Number Generator //

let randomNumber = Math.floor(Math.random() * 11);

// HTML Elements //

let enemyImage = document.getElementById('enemy-image');
let enemyNameText = document.getElementById('enemy-text1');
let enemyNameValue = document.getElementById('enemy-output1');
let enemyHealthText = document.getElementById('enemy-text2');
let enemyHealthValue = document.getElementById('enemy-output2');
let enemyAttackText = document.getElementById('enemy-text3');
let enemyAttackValue = document.getElementById('enemy-output3');
let enemySpeedText = document.getElementById('enemy-text4');
let enemySpeedValue = document.getElementById('enemy-output4');
let enemyAction = document.getElementById('enemy-actions');
let playerAction = document.getElementById('player-actions');
let playerText = document.getElementById('player-text');
let buttonOne = document.getElementById('button1');
let buttonTwo = document.getElementById('button2');
let buttonThree = document.getElementById('button3');
let buttonFour = document.getElementById('button4');
let playerImage = document.getElementById('player-image');

let showKnight = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/knight.png" class="player-image">';
    playerImage.setAttribute("style", "animation: fadeIn ease 150ms");
};

let hideKnight = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.setAttribute("style", "animation: fadeOut ease 100ms;");
    playerImage.innerHTML = '';
};

let showMonk = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/monk.png" class="player-image">';
    playerImage.setAttribute("style", "animation: fadeIn ease 150ms");
};

let hideMonk = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.setAttribute("style", "animation: fadeOut ease 100ms;");
    playerImage.innerHTML = '';
};

let showRogue = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/rogue.png" class="player-image">';
    playerImage.setAttribute("style", "animation: fadeIn ease 150ms");
};

let hideRogue = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.setAttribute("style", "animation: fadeOut ease 100ms;");
    playerImage.innerHTML = '';   
};

let showScrub = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/scrub.png" class="player-image">';
    playerImage.setAttribute("style", "animation: fadeIn ease 150ms");
};

let hideScrub = () => {
    let playerImage = document.getElementById('player-image');
    playerImage.setAttribute("style", "animation: fadeOut ease 100ms;");
    playerImage.innerHTML = ''; 
};

// Player Class Select //

let pickClassKnight = () => {
    player = knight;
    let playerText = document.getElementById('player-text');
    playerText.innerHTML = 'Health: ' + player.health;
    let buttonOne = document.getElementById('button1');
    let buttonTwo = document.getElementById('button2');
    let buttonThree = document.getElementById('button3');
    let buttonFour = document.getElementById('button4');
    buttonOne.innerHTML = 'Attack';
    buttonTwo.innerHTML = 'Defend';
    buttonThree.innerHTML = 'Concentrate';
    buttonFour.innerHTML = 'Do Nothing';
    let playerAttackValue = document.getElementById('player-attack');
    let playerSpeedValue = document.getElementById('player-speed');
    playerAttackValue.innerHTML = 'Attack: ' + player.attack;
    playerSpeedValue.innerHTML = 'Speed: ' + player.speed;
    document.getElementById('button1').setAttribute( "onClick", "attack();");
    document.getElementById('button1').setAttribute( "onmouseover", "");
    document.getElementById('button1').setAttribute( "onmouseout", "");
    document.getElementById('button2').setAttribute( "onClick", "defend();");
    document.getElementById('button2').setAttribute( "onmouseover", "");
    document.getElementById('button2').setAttribute( "onmouseout", "");
    document.getElementById('button3').setAttribute( "onClick", "concentrate();");
    document.getElementById('button3').setAttribute( "onmouseover", "");
    document.getElementById('button3').setAttribute( "onmouseout", "");
    document.getElementById('button4').setAttribute( "onClick", "doNothing();");
    document.getElementById('button4').setAttribute( "onmouseover", "");
    document.getElementById('button4').setAttribute( "onmouseout", "");
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/knight.png" class="player-image">';
    let playerActions = document.getElementById('player-actions');
    let enemyActions = document.getElementById('enemy-actions');
    playerActions.setAttribute("style", "visibility: visible");
    enemyActions.setAttribute("style", "visibility: visible");
    pickEnemyRat();
};

let pickClassMonk = () => {
    player = monk;
    let playerText = document.getElementById('player-text');
    playerText.innerHTML = 'Health: ' + player.health;
    let buttonOne = document.getElementById('button1');
    let buttonTwo = document.getElementById('button2');
    let buttonThree = document.getElementById('button3');
    let buttonFour = document.getElementById('button4');
    buttonOne.innerHTML = 'Attack';
    buttonTwo.innerHTML = 'Defend';
    buttonThree.innerHTML = 'Concentrate';
    buttonFour.innerHTML = 'Do Nothing';
    let playerAttackValue = document.getElementById('player-attack');
    let playerSpeedValue = document.getElementById('player-speed');
    playerAttackValue.innerHTML = 'Attack: ' + player.attack;
    playerSpeedValue.innerHTML = 'Speed: ' + player.speed;
    document.getElementById('button1').setAttribute( "onClick", "attack();");
    document.getElementById('button1').setAttribute( "onmouseover", "");
    document.getElementById('button1').setAttribute( "onmouseout", "");
    document.getElementById('button2').setAttribute( "onClick", "defend();");
    document.getElementById('button2').setAttribute( "onmouseover", "");
    document.getElementById('button2').setAttribute( "onmouseout", "");
    document.getElementById('button3').setAttribute( "onClick", "concentrate();");
    document.getElementById('button3').setAttribute( "onmouseover", "");
    document.getElementById('button3').setAttribute( "onmouseout", "");
    document.getElementById('button4').setAttribute( "onClick", "doNothing();");
    document.getElementById('button4').setAttribute( "onmouseover", "");
    document.getElementById('button4').setAttribute( "onmouseout", "");
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/monk.png" class="player-image">';
    let playerActions = document.getElementById('player-actions');
    let enemyActions = document.getElementById('enemy-actions');
    playerActions.setAttribute("style", "visibility: visible");
    enemyActions.setAttribute("style", "visibility: visible");
    pickEnemyRat();
};

let pickClassRogue = () => {
    player = rogue;
    let playerText = document.getElementById('player-text');
    playerText.innerHTML = 'Health: ' + player.health;
    let buttonOne = document.getElementById('button1');
    let buttonTwo = document.getElementById('button2');
    let buttonThree = document.getElementById('button3');
    let buttonFour = document.getElementById('button4');
    buttonOne.innerHTML = 'Attack';
    buttonTwo.innerHTML = 'Defend';
    buttonThree.innerHTML = 'Concentrate';
    buttonFour.innerHTML = 'Do Nothing';
    let playerAttackValue = document.getElementById('player-attack');
    let playerSpeedValue = document.getElementById('player-speed');
    playerAttackValue.innerHTML = 'Attack: ' + player.attack;
    playerSpeedValue.innerHTML = 'Speed: ' + player.speed;
    document.getElementById('button1').setAttribute( "onClick", "attack();");
    document.getElementById('button1').setAttribute( "onmouseover", "");
    document.getElementById('button1').setAttribute( "onmouseout", "");
    document.getElementById('button2').setAttribute( "onClick", "defend();");
    document.getElementById('button2').setAttribute( "onmouseover", "");
    document.getElementById('button2').setAttribute( "onmouseout", "");
    document.getElementById('button3').setAttribute( "onClick", "concentrate();");
    document.getElementById('button3').setAttribute( "onmouseover", "");
    document.getElementById('button3').setAttribute( "onmouseout", "");
    document.getElementById('button4').setAttribute( "onClick", "doNothing();");
    document.getElementById('button4').setAttribute( "onmouseover", "");
    document.getElementById('button4').setAttribute( "onmouseout", "");
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/rogue.png" class="player-image">';
    let playerActions = document.getElementById('player-actions');
    let enemyActions = document.getElementById('enemy-actions');
    playerActions.setAttribute("style", "visibility: visible");
    enemyActions.setAttribute("style", "visibility: visible");
    pickEnemyRat();
};

let pickClassScrub = () => {
    player = scrub;
    let playerText = document.getElementById('player-text');
    playerText.innerHTML = 'Health: ' + player.health;
    let buttonOne = document.getElementById('button1');
    let buttonTwo = document.getElementById('button2');
    let buttonThree = document.getElementById('button3');
    let buttonFour = document.getElementById('button4');
    buttonOne.innerHTML = 'Attack';
    buttonTwo.innerHTML = 'Defend';
    buttonThree.innerHTML = 'Concentrate';
    buttonFour.innerHTML = 'Do Nothing';
    let playerAttackValue = document.getElementById('player-attack');
    let playerSpeedValue = document.getElementById('player-speed');
    playerAttackValue.innerHTML = 'Attack: ' + player.attack;
    playerSpeedValue.innerHTML = 'Speed: ' + player.speed;
    document.getElementById('button1').setAttribute( "onClick", "attack();");
    document.getElementById('button1').setAttribute( "onmouseover", "");
    document.getElementById('button1').setAttribute( "onmouseout", "");
    document.getElementById('button2').setAttribute( "onClick", "defend();");
    document.getElementById('button2').setAttribute( "onmouseover", "");
    document.getElementById('button2').setAttribute( "onmouseout", "");
    document.getElementById('button3').setAttribute( "onClick", "concentrate();");
    document.getElementById('button3').setAttribute( "onmouseover", "");
    document.getElementById('button3').setAttribute( "onmouseout", "");
    document.getElementById('button4').setAttribute( "onClick", "doNothing();");
    document.getElementById('button4').setAttribute( "onmouseover", "");
    document.getElementById('button4').setAttribute( "onmouseout", "");
    let playerImage = document.getElementById('player-image');
    playerImage.innerHTML = '<img src="images/player/scrub.png" class="player-image">';
    let playerActions = document.getElementById('player-actions');
    let enemyActions = document.getElementById('enemy-actions');
    playerActions.setAttribute("style", "visibility: visible");
    enemyActions.setAttribute("style", "visibility: visible");
    pickEnemyRat();   
};

// Enemy Class Select //

let pickEnemyRat = () => {
    enemy = rat;
    let enemyAction = document.getElementById('enemy-actions');
    enemyAction.innerHTML = enemy.name + ' approaches!';
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/rat.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
    battle();
};

let pickEnemyZombie = () => {
    enemy = zombie;    
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/zombie.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyWolf = () => {
    enemy = wolf;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/wolf.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyManAtArms = () => {
    enemy = manAtArms;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/man-at-arms.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyBear = () => {
    enemy = bear;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/bear.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyPriestess = () => {
    enemy = priestess;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/priestess.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemySquire = () => {
    enemy = squire;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/squire.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyDarkKnight = () => {
    enemy = darkKnight;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/dark-knight.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyLion = () => {
    enemy = lion;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/lion.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyPaladin = () => {
    enemy = paladin;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/paladin.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyEmperor = () => {
    enemy = emperor;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = enemy.name;
    enemyHealthValue.innerHTML = enemy.health;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
    enemyNameText.innerHTML = 'Enemy Name:';
    enemyHealthText.innerHTML = 'Health:';
    enemyAttackText.innerHTML = 'Attack:';
    enemySpeedText.innerHTML = 'Speed:';
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/emperor.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
};

let pickEnemyPrincess = () => {
    enemy = princess;
    let enemyNameText = document.getElementById('enemy-text1');
    let enemyHealthText = document.getElementById('enemy-text2');
    let enemyAttackText = document.getElementById('enemy-text3');
    let enemySpeedText = document.getElementById('enemy-text4');
    let enemyNameValue = document.getElementById('enemy-output1');
    let enemyHealthValue = document.getElementById('enemy-output2');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyNameValue.innerHTML = '';
    enemyHealthValue.innerHTML = '';
    enemyAttackValue.innerHTML = '';
    enemySpeedValue.innerHTML = '';
    enemyNameText.innerHTML = 'Thank You For Playing!';
    enemyHealthText.innerHTML = '';
    enemyAttackText.innerHTML = 'Refresh To Play Again!';
    enemySpeedText.innerHTML = '';
    document.getElementById('enemy-text1').style.color = "black";
    document.getElementById('enemy-text2').style.color = "black";
    document.getElementById('enemy-text3').style.color = "black";
    document.getElementById('enemy-text4').style.color = "black";
    document.getElementById('enemy-output1').style.color = "black";
    document.getElementById('enemy-output2').style.color = "black";
    document.getElementById('enemy-output3').style.color = "black";
    document.getElementById('enemy-output4').style.color = "black";
    document.getElementById('enemy-text1').style.fontWeight = "700";
    document.getElementById('enemy-text2').style.fontWeight = "700";
    document.getElementById('enemy-text3').style.fontWeight = "700";
    document.getElementById('enemy-text4').style.fontWeight = "700";
    document.getElementById('enemy-output1').style.fontWeight = "700";
    document.getElementById('enemy-output2').style.fontWeight = "700";
    document.getElementById('enemy-output3').style.fontWeight = "700";
    document.getElementById('enemy-output4').style.fontWeight = "700";
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.innerHTML = '<img src="images/enemy/princess.png" class="enemy-image">';
    enemyImage.setAttribute("style", "animation: enemy-image-load 750ms");
}

// Next Battle Function //

let continueBattle = () => {
    let middleAction = document.getElementById('middle-actions');
    middleAction.innerHTML = '<button id="continue-button" class="mid-button" onclick="nextBattle()">Continue?</button>';
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    let enemyImage = document.getElementById('enemy-image');
    setTimeout(() => {enemyImage.innerHTML = ' ';}, 100);
};

let preBattle = () => {
    let playerAction = document.getElementById('player-actions');
    let middleAction = document.getElementById('middle-actions');
    middleAction.innerHTML = '<button id="pre-fight-button" class="mid-button" onclick="battle()">Fight!</button>';
    playerAction.innerHTML = 'What will you do?';
};

let nextBattle = () => {
    if (enemy === rat) {
        pickEnemyZombie();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === zombie) {
        pickEnemyWolf();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === wolf) {
        pickEnemyManAtArms();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === manAtArms) {
        pickEnemyBear();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!'
    } else if (enemy === bear) {
        pickEnemyPriestess();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === priestess) {
        pickEnemySquire();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === squire) {
        pickEnemyDarkKnight();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === darkKnight) {
        pickEnemyLion();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === lion) {
        pickEnemyPaladin();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === paladin) {
        pickEnemyEmperor();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' approaches!';
    } else if (enemy === emperor) {
        pickEnemyPrincess();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = 'You saved ' + enemy.name + '!';
        youWon();
    };
    preBattle();
};

let endBattle = () => {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    let playerAction = document.getElementById('player-actions');
    playerAction.innerHTML = 'YOU DIED! Refresh to play again!';
    let playerImage = document.getElementById('player-image');
    playerImage.setAttribute("style", "animation: fadeOut ease 1500ms;");
    setTimeout(() => {playerImage.innerHTML = '';}, 900);
}

// Battles //

let battle = () => {
    let middleAction = document.getElementById('middle-actions');
    middleAction.innerHTML = '';
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    let playerAction = document.getElementById('player-actions');
    playerAction.innerHTML = 'What will you do?';
    if (player.speed > enemy.speed) {
        playerTurn();
    } else if (player.speed < enemy.speed) {
        enemyTurn();
    } else {
        playerTurn();
    };
};

// Battle Turns

let playerTurn = () => {

};

let enemyTurn = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    let enemyMove = randomNumber;
    if (enemyMove <= 4 && enemy.health > 0 ) {
        enemyAttack();
    } else if (enemyMove >= 5 && enemyMove <= 7 && enemy.health > 0 ) {
        enemyDefend();
    } else if (enemyMove >= 8 && enemyMove <= 9 && enemy.health > 0 ) {
        enemyConcentrate();
    } else {
        enemySpeech();
    };
    if (enemy.health <= 0 ) {
        continueBattle();
        let enemyAction = document.getElementById('enemy-actions');
        enemyAction.innerHTML = enemy.name + ' has Died!';
        let enemyImage = document.getElementById('enemy-image');
        enemyImage.setAttribute("style", "animation: enemy-image-fade 750ms");
    };
    if (player.health <= 0 ) {
        endBattle();
    };
};

// Battle Turns Player Actions

let attack = () => {
    let playerAction = document.getElementById('player-actions');
    let enemyHealthValue = document.getElementById('enemy-output2');
    playerAction.innerHTML = 'You attack for ' + player.attack + ' damage!';
    enemy.health = enemy.health - player.attack;
    enemyHealthValue.innerHTML = enemy.health;
    let enemyImage = document.getElementById('enemy-image');
    enemyImage.setAttribute("style", "animation: fadeOut ease 150ms;")
    if (enemy.health <= 0 ) {
        continueBattle();
    };
    enemyTurn();
};

let defend = () => {
    let playerAction = document.getElementById('player-actions');
    let enemyAttackValue = document.getElementById('enemy-output3');
    playerAction.innerHTML = 'You defend yourself!';
    enemy.attack = enemy.attack / 2;
    enemyAttackValue.innerHTML = enemy.attack;
    enemyTurn();
};

let concentrate = () => {
    let playerAction = document.getElementById('player-actions');
    let playerAttackValue = document.getElementById('player-attack');
    let playerSpeedValue = document.getElementById('player-speed'); 
    playerAction.innerHTML = 'You concentrate for your next attack!';
    player.attack = player.attack * 2;
    player.speed = player.speed + 50;
    playerAttackValue.innerHTML = 'Attack: ' + player.attack;
    playerSpeedValue.innerHTML = 'Speed: ' + player.speed;
    enemyTurn();
};

let doNothing = () => {
    let playerAction = document.getElementById('player-actions');
    playerAction.innerHTML = 'You do nothing...';
    enemyTurn();
};

// Battle Turns Enemy Actions

let enemyAttack = () => {
    let enemyAction = document.getElementById('enemy-actions');
    let playerHealthValue = document.getElementById('player-text');
    enemyAction.innerHTML = enemy.name + ' attacks for ' + enemy.attack + ' damage!';
    player.health = player.health - enemy.attack;
    playerHealthValue.innerHTML = 'Health: ' + player.health;
};

let enemyDefend = () => {
    let enemyAction = document.getElementById('enemy-actions');
    let playerAttackValue = document.getElementById('player-attack');
    enemyAction.innerHTML = enemy.name + ' defends itself!';
    player.attack = player.attack / 2;
    playerAttackValue.innerHTML = 'Attack: ' + player.attack; 
};

let enemyConcentrate = () => {
    let enemyAction = document.getElementById('enemy-actions');
    let enemyAttackValue = document.getElementById('enemy-output3');
    let enemySpeedValue = document.getElementById('enemy-output4');
    enemyAction.innerHTML = enemy.name + ' concentrates for their next attack!';
    enemy.attack = enemy.attack * 2;
    enemy.speed = enemy.speed + 50;
    enemyAttackValue.innerHTML = enemy.attack;
    enemySpeedValue.innerHTML = enemy.speed;
};

let enemySpeech = () => {
    let enemyAction = document.getElementById('enemy-actions');
    enemyAction.innerHTML = enemy.speech;
};

// Win //

let youWon = () => {   
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("continue-button").disabled = true;
    document.getElementById("pre-fight-button").disabled = true;
};
