//Einige der Verwendeten funktionen(.map; .join; .unshift etc.) wurden durch KI, Internetseiten und Tutorials herausgefunden und für einen bessern Code verwendet, die Logik wurde immer noch von mir selbst kreiert.
let audio = {
    musicOn: false,
    lobbyMusic: new Audio('media/sound/lobby.mp3'),
    battleMusic: new Audio('media/sound/battle03.mp3'),
    battleMusic2: new Audio('media/sound/battle02.mp3'),
    battleMusic3: new Audio('media/sound/battle01.mp3'),
    attackSound: new Audio('media/sound/soundingame/attaksound.mp3'),
    switchSound: new Audio('media/sound/soundingame/pokeSwitch.mp3'),
    faintSound: new Audio('media/sound/soundingame/faint.mp3'),
    victoryMusic: new Audio('media/sound/victory.mp3'),
}
audio.switchSound.volume = 0.5;

let player1 = {
    playerName: "Player 1",
    team: [
        {
            poke: pokémon.list[0],
            perk: perks.pokemon_perks[4],
            hp: pokémon.list[0].hp,
            st: pokémon.list[0].stamina,
            might: pokémon.list[0].might,
            resistance: pokémon.list[0].resistance,
            speed: pokémon.list[0].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            moves: [
                attacks.moves[18],
                attacks.moves[19],
            ]
        },
        {
            poke: pokémon.list[3],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[3].hp,
            st: pokémon.list[3].stamina,
            might: pokémon.list[3].might,
            resistance: pokémon.list[3].resistance,
            speed: pokémon.list[3].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            moves: [
                attacks.moves[0],
                attacks.moves[1],
            ]
        },
        {
            poke: pokémon.list[6],
            perk: perks.pokemon_perks[2],
            hp: pokémon.list[6].hp,
            st: pokémon.list[6].stamina,
            might: pokémon.list[6].might,
            resistance: pokémon.list[6].resistance,
            speed: pokémon.list[6].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            moves: [
                attacks.moves[12],
                attacks.moves[13]
            ]
        }
    ],
    trainer: trainer.trainers[0],
    madeTurn: false,
    selectedSwitch: undefined,
    moveMade: undefined
}
let player2 = {
    playerName: "Player 2",
    team: [
        {
            poke: pokémon.list[0],
            perk: perks.pokemon_perks[4],
            hp: pokémon.list[0].hp,
            st: pokémon.list[0].stamina,
            might: pokémon.list[0].might,
            resistance: pokémon.list[0].resistance,
            speed: pokémon.list[0].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            moves: [
                attacks.moves[18],
                attacks.moves[19],
            ]
        },
        {
            poke: pokémon.list[3],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[3].hp,
            st: pokémon.list[3].stamina,
            might: pokémon.list[3].might,
            resistance: pokémon.list[3].resistance,
            speed: pokémon.list[3].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            moves: [
                attacks.moves[0],
                attacks.moves[1],
            ]
        },
        {
            poke: pokémon.list[6],
            perk: perks.pokemon_perks[2],
            hp: pokémon.list[6].hp,
            st: pokémon.list[6].stamina,
            might: pokémon.list[6].might,
            resistance: pokémon.list[6].resistance,
            speed: pokémon.list[6].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            moves: [
                attacks.moves[12],
                attacks.moves[13]
            ]
        }
    ],
    trainer: trainer.trainers[0],
    madeTurn: false,
    selectedSwitch: undefined,
    moveMade: undefined
}
let player_single = {
    playerName: "Player",
    team: [
        {
            poke: pokémon.list[0],
            perk: perks.pokemon_perks[4],
            hp: pokémon.list[0].hp,
            st: pokémon.list[0].stamina,
            might: pokémon.list[0].might,
            resistance: pokémon.list[0].resistance,
            speed: pokémon.list[0].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            kills: 0,
            moves: [
                attacks.moves[18],
                attacks.moves[19],
            ]
        },
        {
            poke: pokémon.list[3],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[3].hp,
            st: pokémon.list[3].stamina,
            might: pokémon.list[3].might,
            resistance: pokémon.list[3].resistance,
            speed: pokémon.list[3].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            kills: 0,
            moves: [
                attacks.moves[0],
                attacks.moves[1],
            ]
        },
        {
            poke: pokémon.list[6],
            perk: perks.pokemon_perks[2],
            hp: pokémon.list[6].hp,
            st: pokémon.list[6].stamina,
            might: pokémon.list[6].might,
            resistance: pokémon.list[6].resistance,
            speed: pokémon.list[6].speed,
            dogedAttack: false,
            knockedOutOpponent: false,
            lastDamageDealt: 0,
            perkUsed: false,
            kills: 0,
            moves: [
                attacks.moves[12],
                attacks.moves[13]
            ]
        }
    ],
    trainer: trainer.trainers[0],
    madeTurn: false,
    selectedSwitch: undefined,
    moveMade: undefined
}
audio.lobbyMusic.loop = true;
audio.lobbyMusic.volume = 0.3;
let endlessScore = 0;
let endlessOpponent;

function mute() {
    audio.lobbyMusic.currentTime = 0;
    if (!audio.musicOn) {
        document.getElementById("mute").innerHTML = '<img src="./media/img/muteOff.png" alt="">'
        audio.musicOn = true;
        audio.lobbyMusic.play();
    } else {
        document.getElementById("mute").innerHTML = '<img src="./media/img/muteOn.png" alt="">'
        audio.musicOn = false;
        audio.lobbyMusic.pause();
    }
}
function multiplayer() {
    //animation to multiplayer.
    document.getElementById("homeBttns").style.animation = "none"
    document.getElementById("homeBttns").offsetHeight;
    document.getElementById("homeBttns").style.animation = "moveUp 1s"
    document.getElementById("logo").style.animation = "none"
    document.getElementById("logo").offsetHeight;
    document.getElementById("logo").style.animation = "moveUp 1s"
    setTimeout(function () {
        document.getElementById("forestBG").innerHTML = ""
        loadSelectorP1();
    }, 900);

}
function loadSelectorP1() {
    document.getElementById("forestBG").innerHTML = `
    <div id = "selectionScreen">
        <div id = "headPlayerSelection">
            Player 1 <br>
            Choose your Team
        </div>
        <div id = "pokeSelectorMini">
            <div class="pokeBox" onclick="selectPoke1(0)">
                <img src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
            <div class="pokeBox" onclick="selectPoke1(1)">
                <img src="./media/img/pokémon/${player1.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
            <div class="pokeBox" onclick="selectPoke1(2)">
                <img src="./media/img/pokémon/${player1.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
        </div>
        <div id = "back" onclick="homescreen()">
            Back
        </div>
        <div id = "trainerSelector" onclick="selectTrainer1()">
            <img src="./media/img/trainer/${player1.trainer.type.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "selectionDetail">   
        </div>
            <input type="text" placeholder="Name..." id="player1Name" class = "nameSelector">
        <div id = "finish" onclick="loadSelectorP2()">
            Finish
        </div>
        </div>
        `

    setTimeout(function () {
        document.getElementById("selectionScreen").style.display = "block"
        document.getElementById("selectionScreen").style.animation = "none"
        document.getElementById("selectionScreen").offsetHeight;
        document.getElementById("selectionScreen").style.animation = "movein 1s"
    }, 100);

}
function homescreen() {
    location.reload();
}
function selectTrainer1() {

    let tempstring = `
    <div id = "trainerDetailTop">
        <div id = "TrainerArrowL" onclick="changeTrainer1(-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id = "TrainerImgBox"><img src="./media/img/trainer/${player1.trainer.type}.png" alt=""></div>
        <div id = "TrainerArrowR" onclick="changeTrainer1(1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    <div id = "trainerDetailBottom">
        <div id = "trainerPerk">
            <img src="./media/img/types/${player1.trainer.type}.png" alt=""> ${player1.trainer.perk}
        </div>
        <div id = "saveTrainer" onclick="saveTrainer1()">
            Save
        </div>
    </div>
    `
    document.getElementById("selectionDetail").style.display = "block"
    document.getElementById("selectionDetail").innerHTML = tempstring;
}
function changeTrainer1(num) {
    if (player1.trainer == trainer.trainers[0] && num == -1) {
        player1.trainer = trainer.trainers[17]
    } else if (player1.trainer == trainer.trainers[17] && num == 1) {
        player1.trainer = trainer.trainers[0]
    } else {
        player1.trainer = trainer.trainers[trainer.trainers.indexOf(player1.trainer) + num]
    }
    selectTrainer1();
}
function saveTrainer1() {
    player1.trainer = trainer.trainers[trainer.trainers.indexOf(player1.trainer)]
    document.getElementById("selectionDetail").style.display = "none"
    document.getElementById("trainerSelector").innerHTML = `<img src="./media/img/trainer/${player1.trainer.type}.png" alt="">`
}

function selectPoke1(pokemonTeamNum) {
    let tempstring = ""
    if (player1.team[pokemonTeamNum].poke.type.length > 1) {
        tempstring = `
    <div id = "pokeDetailInfo">
        <div id = "pokeDetailInfoImg" onclick="changePoke1(${pokemonTeamNum})">
            <img src="./media/img/pokémon/${player1.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player1.team[pokemonTeamNum].poke.name}</div>
            <div id = "pokeDetailInfoType2">
                <img src="./media/img/types/${player1.team[pokemonTeamNum].poke.type[0]}.png" alt="">
                <img src="./media/img/types/${player1.team[pokemonTeamNum].poke.type[1]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoHP">${player1.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player1.team[pokemonTeamNum].poke.stamina} Stamina</div>
    </div>
    <div id = "pokeDetailAttacks">
            <div class="pokeDetailAttack" onclick="selectAttack1(${pokemonTeamNum},0)">
            <div class="pokeDetailAttackTxt"> <img src="./media/img/types/${player1.team[pokemonTeamNum].moves[0].type}.png" alt=""> ${player1.team[pokemonTeamNum].moves[0].name} <br> Pow: ${player1.team[pokemonTeamNum].moves[0].power} Acc: ${player1.team[pokemonTeamNum].moves[0].acc}</div>
        </div>
        <div class="pokeDetailAttack" onclick="selectAttack1(${pokemonTeamNum},1)">
            <div class="pokeDetailAttackTxt"><img src="./media/img/types/${player1.team[pokemonTeamNum].moves[1].type}.png" alt=""> ${player1.team[pokemonTeamNum].moves[1].name} <br> Pow: ${player1.team[pokemonTeamNum].moves[1].power} Acc: ${player1.team[pokemonTeamNum].moves[1].acc}</div>
        </div>
    </div>
    <div id = "pokeDetailPerk">
        <div id = "PokePerkArrowL" onclick="changePokePerk1(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id = "PokePerkBox"><img src="./media/img/types/${player1.team[pokemonTeamNum].perk.type}.png" alt=""><div id="pokePerkTxt">${player1.team[pokemonTeamNum].perk.perk}</div></div>
        <div id = "PokePerkArrowR" onclick="changePokePerk1(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    </div>
    <div id = "savePoke" onclick="savePoke1()">
        Save
    </div>
    </div>
    `
    } else {
        tempstring = `
    <div id = "pokeDetailInfo">
        <div id = "pokeDetailInfoImg" onclick="changePoke1(${pokemonTeamNum})">
            <img src="./media/img/pokémon/${player1.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player1.team[pokemonTeamNum].poke.name}</div>
            <div id = "pokeDetailInfoType1">
                <img src="./media/img/types/${player1.team[pokemonTeamNum].poke.type[0]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoHP">${player1.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player1.team[pokemonTeamNum].poke.stamina} Stamina</div>
    </div>
    <div id = "pokeDetailAttacks">
            <div class="pokeDetailAttack" onclick="selectAttack1(${pokemonTeamNum},0)">
            <div class="pokeDetailAttackTxt"> <img src="./media/img/types/${player1.team[pokemonTeamNum].moves[0].type}.png" alt=""> ${player1.team[pokemonTeamNum].moves[0].name} <br> Pow: ${player1.team[pokemonTeamNum].moves[0].power} Acc: ${player1.team[pokemonTeamNum].moves[0].acc}</div>
        </div>
        <div class="pokeDetailAttack" onclick="selectAttack1(${pokemonTeamNum},1)">
            <div class="pokeDetailAttackTxt"><img src="./media/img/types/${player1.team[pokemonTeamNum].moves[1].type}.png" alt=""> ${player1.team[pokemonTeamNum].moves[1].name} <br> Pow: ${player1.team[pokemonTeamNum].moves[1].power} Acc: ${player1.team[pokemonTeamNum].moves[1].acc}</div>
        </div>
    </div>
    <div id = "pokeDetailPerk">
        <div id = "PokePerkArrowL" onclick="changePokePerk1(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id = "PokePerkBox"><img src="./media/img/types/${player1.team[pokemonTeamNum].perk.type}.png" alt=""><div id="pokePerkTxt">${player1.team[pokemonTeamNum].perk.perk}</div></div>
        <div id = "PokePerkArrowR" onclick="changePokePerk1(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    </div>
    <div id = "savePoke" onclick="savePoke1(${pokemonTeamNum})">
        Save
    </div>
    </div>
    `
    }

    document.getElementById("selectionDetail").style.display = "block"
    document.getElementById("selectionDetail").innerHTML = tempstring;
}
function changePokePerk1(pokemonTeamNum, num) {
    const pokemonTypes = player1.team[pokemonTeamNum].poke.type;
    const filteredPerks = perks.pokemon_perks.filter(perk => pokemonTypes.includes(perk.type));
    let currentIndex = filteredPerks.indexOf(player1.team[pokemonTeamNum].perk);
    if (currentIndex === -1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + num + filteredPerks.length) % filteredPerks.length;
    player1.team[pokemonTeamNum].perk = filteredPerks[currentIndex];
    selectPoke1(pokemonTeamNum);
}
function savePoke1(pokemonTeamNum) {
    document.getElementById("selectionDetail").style.display = "none"
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPoke1(0)">
        <img src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke1(1)">
        <img src="./media/img/pokémon/${player1.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke1(2)">
        <img src="./media/img/pokémon/${player1.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`
}
function changePoke1(pokemonTeamNum) {
    if (player1.team[pokemonTeamNum].poke.type.length > 1) {
        tempstring = `
<div id = "PokeOverallSelector">
    <div id = "PokeOverArrowL" onclick="changePokeOver1(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    <div id = "pokeDetailInfoSelector">
        <div id = "pokeDetailInfoImgSelector">
            <img src="./media/img/pokémon/${player1.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player1.team[pokemonTeamNum].poke.name}</div>
           <div id = "pokeDetailInfoType2">
                <img src="./media/img/types/${player1.team[pokemonTeamNum].poke.type[0]}.png" alt="">
                <img src="./media/img/types/${player1.team[pokemonTeamNum].poke.type[1]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoStats">
            <div id = "pokeDetailInfoHP">${player1.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player1.team[pokemonTeamNum].poke.stamina} Stamina</div>
            <div id = "pokeDetailInfoMight">${player1.team[pokemonTeamNum].poke.might} Might</div>
            <div id = "pokeDetailInfoResistance">${player1.team[pokemonTeamNum].poke.resistance} Resistance</div>
            <div id = "pokeDetailInfoSpeed">${player1.team[pokemonTeamNum].poke.speed} Speed</div>
        </div>
    </div>
    </div>
    <div id = "PokeOverArrowR" onclick="changePokeOver1(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
</div>
<div id = "savePoke" onclick= "savePokeOver1(${pokemonTeamNum})"> Save </div>
    `
    } else {
        tempstring = `
        <div id = "PokeOverallSelector">
    <div id = "PokeOverArrowL" onclick="changePokeOver1(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    <div id = "pokeDetailInfoSelector">
        <div id = "pokeDetailInfoImgSelector">
            <img src="./media/img/pokémon/${player1.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player1.team[pokemonTeamNum].poke.name}</div>
            <div id = "pokeDetailInfoType1">
                <img src="./media/img/types/${player1.team[pokemonTeamNum].poke.type[0]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoStats">
            <div id = "pokeDetailInfoHP">${player1.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player1.team[pokemonTeamNum].poke.stamina} Stamina</div>
            <div id = "pokeDetailInfoMight">${player1.team[pokemonTeamNum].poke.might} Might</div>
            <div id = "pokeDetailInfoResistance">${player1.team[pokemonTeamNum].poke.resistance} Resistance</div>
            <div id = "pokeDetailInfoSpeed">${player1.team[pokemonTeamNum].poke.speed} Speed</div>
        </div>
    </div>
    </div>
    <div id = "PokeOverArrowR" onclick="changePokeOver1(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
</div>
<div id = "savePoke" onclick= "savePokeOver1(${pokemonTeamNum})"> Save </div>
    `
    }
    document.getElementById("selectionDetail").innerHTML = tempstring
}
function changePokeOver1(pokemonTeamNum, num) {
    const pokemonList = pokémon.list;
    let currentIndex = pokemonList.indexOf(player1.team[pokemonTeamNum].poke);
    if (currentIndex === -1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + num + pokemonList.length) % pokemonList.length;
    player1.team[pokemonTeamNum].poke = pokemonList[currentIndex];
    player1.team[pokemonTeamNum].hp = player1.team[pokemonTeamNum].poke.hp;
    player1.team[pokemonTeamNum].st = player1.team[pokemonTeamNum].poke.stamina;
    player1.team[pokemonTeamNum].might = player1.team[pokemonTeamNum].poke.might;
    player1.team[pokemonTeamNum].resistance = player1.team[pokemonTeamNum].poke.resistance;
    player1.team[pokemonTeamNum].speed = player1.team[pokemonTeamNum].poke.speed;
    for (let i = 0; i < perks.pokemon_perks.length; i++) {
        if (perks.pokemon_perks[i].type == player1.team[pokemonTeamNum].poke.type[0]) {
            player1.team[pokemonTeamNum].perk = perks.pokemon_perks[i];
            break;
        }
    }
    player1.team[pokemonTeamNum].moves = [];
    let movesselected = 0;
    for (let i = 0; i < attacks.moves.length; i++) {
        if (movesselected == 2) {
            break;
        }
        if (attacks.moves[i].type == player1.team[pokemonTeamNum].poke.type[0] || attacks.moves[i].type == player1.team[pokemonTeamNum].poke.type[1]) {
            player1.team[pokemonTeamNum].moves.push(attacks.moves[i]);
            movesselected++;
        }
    }
    changePoke1(pokemonTeamNum);
}
function savePokeOver1(pokemonTeamNum) {
    selectPoke1(pokemonTeamNum);
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPoke1(0)">
        <img src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke1(1)">
        <img src="./media/img/pokémon/${player1.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke1(2)">
        <img src="./media/img/pokémon/${player1.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`
}
function selectAttack1(pokemonTeamNum, attackNum) {
    const pokemonTypes = player1.team[pokemonTeamNum].poke.type;
    const availableMoves = [];
    for (let i = 0; i < attacks.moves.length; i++) {
        const move = attacks.moves[i];
        if (pokemonTypes.includes(move.type)) {
            availableMoves.push(move);
        }
    }
    let moveListHTML = '';
    for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        moveListHTML += `
            <div class="moveItem" onclick="selectMove1(${pokemonTeamNum}, ${i}, ${attackNum})">
                <div class="moveItemType"><img src="./media/img/types/${move.type}.png" alt=""></div>
                <div class="moveItemName">${move.name}</div>
            </div>
        `;
    }
    const selectedMove = player1.team[pokemonTeamNum].moves[attackNum];
    const moveDetailsHTML = `
        <div class="moveDetails">
            <div class="moveDetailsName">${selectedMove.name}</div>
            <div class="moveDetailsType"><img src="./media/img/types/${selectedMove.type}.png" alt=""></div>
            <div class="moveDetailsPower">Power: ${selectedMove.power}</div>
            <div class="moveDetailsAccuracy">Accuracy: ${selectedMove.acc}</div>
            <div class="moveDetailsStamina">Stamina Cost: ${selectedMove.stamina_cost}</div>
            <div class="moveDetailsDescription">${selectedMove.description}</div>
        </div>
    `;
    const tempstring = `
        <div id="attackSelector">
            <div id="attackList">
                ${moveListHTML}
            </div>
            <div id="attackDetails">
                ${moveDetailsHTML}
            </div>
        </div>
        <div id="savePoke" onclick="selectPoke1(${pokemonTeamNum})">Save</div>
    `;
    document.getElementById("selectionDetail").style.display = "block";
    document.getElementById("selectionDetail").innerHTML = tempstring;
    console.log(player1.team[pokemonTeamNum].moves);
}
function selectMove1(pokemonTeamNum, moveIndex, attackNum) {
    const pokemonTypes = player1.team[pokemonTeamNum].poke.type;
    const availableMoves = [];
    for (let i = 0; i < attacks.moves.length; i++) {
        const move = attacks.moves[i];
        if (pokemonTypes.includes(move.type)) {
            availableMoves.push(move);
        }
    }
    player1.team[pokemonTeamNum].moves[attackNum] = availableMoves[moveIndex];
    selectAttack1(pokemonTeamNum, attackNum);
}
//Player 2
function loadSelectorP2() {
    document.getElementById("selectionScreen").style.animation = "none"
    document.getElementById("selectionScreen").offsetHeight;
    document.getElementById("selectionScreen").style.animation = "moveUp 1s"

    player1.playerName = document.getElementById("player1Name").value
    if (player1.playerName == "") {
        player1.playerName = "Player 1"
    }

    setTimeout(function () {
        document.getElementById("forestBG").innerHTML = `
        <div id = "selectionScreen">
            <div id = "headPlayerSelection">
                Player 2 <br>
                Choose your Team
            </div>
            <div id = "pokeSelectorMini">
                <div class="pokeBox" onclick="selectPoke2(0)">
                    <img src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
                </div>
                <div class="pokeBox" onclick="selectPoke2(1)">
                    <img src="./media/img/pokémon/${player2.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
                </div>
                <div class="pokeBox" onclick="selectPoke2(2)">
                    <img src="./media/img/pokémon/${player2.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
                </div>
            </div>
            <div id = "back" onclick="homescreen()">
                Back
            </div>
            <div id = "trainerSelector" onclick="selectTrainer2()">
                <img src="./media/img/trainer/${player2.trainer.type.toLocaleLowerCase()}.png" alt="">
            </div>
            <div id = "selectionDetail">   
            </div>
                <input type="text" placeholder="Name..." id="player2Name" class = "nameSelector">
            <div id = "finish" onclick="battleMPStart()">
                Finish
            </div>
            </div>
            `
        document.getElementById("selectionScreen").style.display = "block"
        document.getElementById("selectionScreen").style.animation = "none"
        document.getElementById("selectionScreen").offsetHeight;
        document.getElementById("selectionScreen").style.animation = "movein 1s"
    }, 900);

}
function selectTrainer2() {

    let tempstring = `
    <div id = "trainerDetailTop">
        <div id = "TrainerArrowL" onclick="changeTrainer2(-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id = "TrainerImgBox"><img src="./media/img/trainer/${player2.trainer.type}.png" alt=""></div>
        <div id = "TrainerArrowR" onclick="changeTrainer2(1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    <div id = "trainerDetailBottom">
        <div id = "trainerPerk">
            <img src="./media/img/types/${player2.trainer.type}.png" alt=""> ${player2.trainer.perk}
        </div>
        <div id = "saveTrainer" onclick="saveTrainer2()">
            Save
        </div>
    </div>
    `
    document.getElementById("selectionDetail").style.display = "block"
    document.getElementById("selectionDetail").innerHTML = tempstring;
}
function changeTrainer2(num) {
    if (player2.trainer == trainer.trainers[0] && num == -1) {
        player2.trainer = trainer.trainers[17]
    } else if (player2.trainer == trainer.trainers[17] && num == 1) {
        player2.trainer = trainer.trainers[0]
    } else {
        player2.trainer = trainer.trainers[trainer.trainers.indexOf(player2.trainer) + num]
    }
    selectTrainer2();
}
function saveTrainer2() {
    player2.trainer = trainer.trainers[trainer.trainers.indexOf(player2.trainer)]
    document.getElementById("selectionDetail").style.display = "none"
    document.getElementById("trainerSelector").innerHTML = `<img src="./media/img/trainer/${player2.trainer.type}.png" alt="">`
}

function selectPoke2(pokemonTeamNum) {
    let tempstring = ""
    if (player2.team[pokemonTeamNum].poke.type.length > 1) {
        tempstring = `
    <div id = "pokeDetailInfo">
        <div id = "pokeDetailInfoImg" onclick="changePoke2(${pokemonTeamNum})">
            <img src="./media/img/pokémon/${player2.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player2.team[pokemonTeamNum].poke.name}</div>
            <div id = "pokeDetailInfoType2">
                <img src="./media/img/types/${player2.team[pokemonTeamNum].poke.type[0]}.png" alt="">
                <img src="./media/img/types/${player2.team[pokemonTeamNum].poke.type[1]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoHP">${player2.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player2.team[pokemonTeamNum].poke.stamina} Stamina</div>
    </div>
    <div id = "pokeDetailAttacks">
            <div class="pokeDetailAttack" onclick="selectAttack2(${pokemonTeamNum},0)">
            <div class="pokeDetailAttackTxt"> <img src="./media/img/types/${player2.team[pokemonTeamNum].moves[0].type}.png" alt=""> ${player2.team[pokemonTeamNum].moves[0].name} <br> Pow: ${player2.team[pokemonTeamNum].moves[0].power} Acc: ${player2.team[pokemonTeamNum].moves[0].acc}</div>
        </div>
        <div class="pokeDetailAttack" onclick="selectAttack2(${pokemonTeamNum},1)">
            <div class="pokeDetailAttackTxt"><img src="./media/img/types/${player2.team[pokemonTeamNum].moves[1].type}.png" alt=""> ${player2.team[pokemonTeamNum].moves[1].name} <br> Pow: ${player2.team[pokemonTeamNum].moves[1].power} Acc: ${player2.team[pokemonTeamNum].moves[1].acc}</div>
        </div>
    </div>
    <div id = "pokeDetailPerk">
        <div id = "PokePerkArrowL" onclick="changePokePerk2(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id = "PokePerkBox"><img src="./media/img/types/${player2.team[pokemonTeamNum].perk.type}.png" alt=""><div id="pokePerkTxt">${player2.team[pokemonTeamNum].perk.perk}</div></div>
        <div id = "PokePerkArrowR" onclick="changePokePerk2(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    </div>
    <div id = "savePoke" onclick="savePoke2()">
        Save
    </div>
    </div>
    `
    } else {
        tempstring = `
        <div id = "pokeDetailInfo">
        <div id = "pokeDetailInfoImg" onclick="changePoke2(${pokemonTeamNum})">
            <img src="./media/img/pokémon/${player2.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player2.team[pokemonTeamNum].poke.name}</div>
            <div id = "pokeDetailInfoType1">
                <img src="./media/img/types/${player2.team[pokemonTeamNum].poke.type[0]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoHP">${player2.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player2.team[pokemonTeamNum].poke.stamina} Stamina</div>
    </div>
    <div id = "pokeDetailAttacks">
            <div class="pokeDetailAttack" onclick="selectAttack2(${pokemonTeamNum},0)">
            <div class="pokeDetailAttackTxt"> <img src="./media/img/types/${player2.team[pokemonTeamNum].moves[0].type}.png" alt=""> ${player2.team[pokemonTeamNum].moves[0].name} <br> Pow: ${player2.team[pokemonTeamNum].moves[0].power} Acc: ${player2.team[pokemonTeamNum].moves[0].acc}</div>
        </div>
        <div class="pokeDetailAttack" onclick="selectAttack2(${pokemonTeamNum},1)">
            <div class="pokeDetailAttackTxt"><img src="./media/img/types/${player2.team[pokemonTeamNum].moves[1].type}.png" alt=""> ${player2.team[pokemonTeamNum].moves[1].name} <br> Pow: ${player2.team[pokemonTeamNum].moves[1].power} Acc: ${player2.team[pokemonTeamNum].moves[1].acc}</div>
        </div>
    </div>
    <div id = "pokeDetailPerk">
        <div id = "PokePerkArrowL" onclick="changePokePerk2(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id = "PokePerkBox"><img src="./media/img/types/${player2.team[pokemonTeamNum].perk.type}.png" alt=""><div id="pokePerkTxt">${player2.team[pokemonTeamNum].perk.perk}</div></div>
        <div id = "PokePerkArrowR" onclick="changePokePerk2(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    </div>
    <div id = "savePoke" onclick="savePoke2()">
        Save
    </div>
    </div>
    `
    }

    document.getElementById("selectionDetail").style.display = "block"
    document.getElementById("selectionDetail").innerHTML = tempstring;
}
function changePokePerk2(pokemonTeamNum, num) {
    const pokemonTypes = player2.team[pokemonTeamNum].poke.type;
    const filteredPerks = perks.pokemon_perks.filter(perk => pokemonTypes.includes(perk.type));
    let currentIndex = filteredPerks.indexOf(player2.team[pokemonTeamNum].perk);
    if (currentIndex === -1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + num + filteredPerks.length) % filteredPerks.length;
    player2.team[pokemonTeamNum].perk = filteredPerks[currentIndex];
    selectPoke2(pokemonTeamNum);
}
function savePoke2(pokemonTeamNum) {
    document.getElementById("selectionDetail").style.display = "none"
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPoke2(0)">
        <img src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke2(1)">
        <img src="./media/img/pokémon/${player2.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke2(2)">
        <img src="./media/img/pokémon/${player2.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`
}
function changePoke2(pokemonTeamNum) {
    if (player2.team[pokemonTeamNum].poke.type.length > 1) {
        tempstring = `
<div id = "PokeOverallSelector">
    <div id = "PokeOverArrowL" onclick="changePokeOver2(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    <div id = "pokeDetailInfoSelector">
        <div id = "pokeDetailInfoImgSelector">
            <img src="./media/img/pokémon/${player2.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player2.team[pokemonTeamNum].poke.name}</div>
           <div id = "pokeDetailInfoType2">
                <img src="./media/img/types/${player2.team[pokemonTeamNum].poke.type[0]}.png" alt="">
                <img src="./media/img/types/${player2.team[pokemonTeamNum].poke.type[1]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoStats">
            <div id = "pokeDetailInfoHP">${player2.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player2.team[pokemonTeamNum].poke.stamina} Stamina</div>
            <div id = "pokeDetailInfoMight">${player2.team[pokemonTeamNum].poke.might} Might</div>
            <div id = "pokeDetailInfoResistance">${player2.team[pokemonTeamNum].poke.resistance} Resistance</div>
            <div id = "pokeDetailInfoSpeed">${player2.team[pokemonTeamNum].poke.speed} Speed</div>
        </div>
    </div>
    </div>
    <div id = "PokeOverArrowR" onclick="changePokeOver2(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
</div>
<div id = "savePoke" onclick= "savePokeOver2(${pokemonTeamNum})"> Save </div>
    `
    } else {
        tempstring = `
        <div id = "PokeOverallSelector">
    <div id = "PokeOverArrowL" onclick="changePokeOver2(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    <div id = "pokeDetailInfoSelector">
        <div id = "pokeDetailInfoImgSelector">
            <img src="./media/img/pokémon/${player2.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id = "pokeDetailInfoLower">
            <div id = "pokeDetailInfoName">${player2.team[pokemonTeamNum].poke.name}</div>
            <div id = "pokeDetailInfoType1">
                <img src="./media/img/types/${player2.team[pokemonTeamNum].poke.type[0]}.png" alt="">
            </div>
            <div id = "pokeDetailInfoStats">
            <div id = "pokeDetailInfoHP">${player2.team[pokemonTeamNum].hp} HP</div>
            <div id = "pokeDetailInfoStamina">${player2.team[pokemonTeamNum].poke.stamina} Stamina</div>
            <div id = "pokeDetailInfoMight">${player2.team[pokemonTeamNum].poke.might} Might</div>
            <div id = "pokeDetailInfoResistance">${player2.team[pokemonTeamNum].poke.resistance} Resistance</div>
            <div id = "pokeDetailInfoSpeed">${player2.team[pokemonTeamNum].poke.speed} Speed</div>
        </div>
    </div>
    </div>
    <div id = "PokeOverArrowR" onclick="changePokeOver2(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
</div>
<div id = "savePoke" onclick= "savePokeOver2(${pokemonTeamNum})"> Save </div>
    `
    }
    document.getElementById("selectionDetail").innerHTML = tempstring
}
function changePokeOver2(pokemonTeamNum, num) {
    const pokemonList = pokémon.list;
    let currentIndex = pokemonList.indexOf(player2.team[pokemonTeamNum].poke);
    if (currentIndex === -1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + num + pokemonList.length) % pokemonList.length;
    player2.team[pokemonTeamNum].poke = pokemonList[currentIndex];
    player2.team[pokemonTeamNum].hp = player2.team[pokemonTeamNum].poke.hp;
    player2.team[pokemonTeamNum].st = player2.team[pokemonTeamNum].poke.stamina;
    player2.team[pokemonTeamNum].might = player2.team[pokemonTeamNum].poke.might;
    player2.team[pokemonTeamNum].resistance = player2.team[pokemonTeamNum].poke.resistance;
    player2.team[pokemonTeamNum].speed = player2.team[pokemonTeamNum].poke.speed;
    for (let i = 0; i < perks.pokemon_perks.length; i++) {
        if (perks.pokemon_perks[i].type == player2.team[pokemonTeamNum].poke.type[0]) {
            player2.team[pokemonTeamNum].perk = perks.pokemon_perks[i];
            break;
        }
    }
    player2.team[pokemonTeamNum].moves = [];
    let movesselected = 0;
    for (let i = 0; i < attacks.moves.length; i++) {
        if (movesselected == 2) {
            break;
        }
        if (attacks.moves[i].type == player2.team[pokemonTeamNum].poke.type[0] || attacks.moves[i].type == player2.team[pokemonTeamNum].poke.type[1]) {
            player2.team[pokemonTeamNum].moves.push(attacks.moves[i]);
            movesselected++;
        }
    }
    console.log(player2.team[pokemonTeamNum].moves);
    changePoke2(pokemonTeamNum);
}
function savePokeOver2(pokemonTeamNum) {
    selectPoke2(pokemonTeamNum);
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPoke2(0)">
        <img src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke2(1)">
        <img src="./media/img/pokémon/${player2.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke2(2)">
        <img src="./media/img/pokémon/${player2.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`
}
function selectAttack2(pokemonTeamNum, attackNum) {
    const pokemonTypes = player2.team[pokemonTeamNum].poke.type;
    const availableMoves = [];
    for (let i = 0; i < attacks.moves.length; i++) {
        const move = attacks.moves[i];
        if (pokemonTypes.includes(move.type)) {
            availableMoves.push(move);
        }
    }
    let moveListHTML = '';
    for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        moveListHTML += `
            <div class="moveItem" onclick="selectMove2(${pokemonTeamNum}, ${i}, ${attackNum})">
                <div class="moveItemType"><img src="./media/img/types/${move.type}.png" alt=""></div>
                <div class="moveItemName">${move.name}</div>
            </div>
        `;
    }
    const selectedMove = player2.team[pokemonTeamNum].moves[attackNum];
    const moveDetailsHTML = `
        <div class="moveDetails">
            <div class="moveDetailsName">${selectedMove.name}</div>
            <div class="moveDetailsType"><img src="./media/img/types/${selectedMove.type}.png" alt=""></div>
            <div class="moveDetailsPower">Power: ${selectedMove.power}</div>
            <div class="moveDetailsAccuracy">Accuracy: ${selectedMove.acc}</div>
            <div class="moveDetailsStamina">Stamina Cost: ${selectedMove.stamina_cost}</div>
            <div class="moveDetailsDescription">${selectedMove.description}</div>
        </div>
    `;
    const tempstring = `
        <div id="attackSelector">
            <div id="attackList">
                ${moveListHTML}
            </div>
            <div id="attackDetails">
                ${moveDetailsHTML}
            </div>
        </div>
        <div id="savePoke" onclick="selectPoke2(${pokemonTeamNum})">Save</div>
    `;
    document.getElementById("selectionDetail").style.display = "block";
    document.getElementById("selectionDetail").innerHTML = tempstring;
    console.log(player2.team[pokemonTeamNum].moves);
}
function selectMove2(pokemonTeamNum, moveIndex, attackNum) {
    const pokemonTypes = player2.team[pokemonTeamNum].poke.type;
    const availableMoves = [];
    for (let i = 0; i < attacks.moves.length; i++) {
        const move = attacks.moves[i];
        if (pokemonTypes.includes(move.type)) {
            availableMoves.push(move);
        }
    }
    player2.team[pokemonTeamNum].moves[attackNum] = availableMoves[moveIndex];
    selectAttack2(pokemonTeamNum, attackNum);
}
//MP Battle
function battleMPStart() {
    player2.playerName = document.getElementById("player2Name").value
    if (player2.playerName == "") {
        player2.playerName = "Player 2"
    }
    document.getElementById("mute").style.display = "none";
    audio.lobbyMusic.pause()
    audio.battleMusic.play()
    audio.battleMusic.loop = true
    audio.battleMusic.volume = 0.4
    document.getElementById("forestBG").style.animation = "none"
    document.getElementById("forestBG").offsetHeight;
    document.getElementById("forestBG").style.animation = "moveUp 1s"
    setTimeout(function () {
        loadBattleSite();
        document.getElementById("forestBG").style.display = "none"
    }, 900);
}
function loadBattleSite() {
    const battleContainer = document.getElementById("battleBG");
    battleContainer.style.display = "flex";
    battleContainer.style.flexDirection = "column";
    const topSection = `
        <div id="topSection">
   
            <div class="playerInfoBox" id="player1Info"> 
                <div class="playerTrainerBox" id="player1Trainer">
                <img src="./media/img/trainer/${player1.trainer.type.toLocaleLowerCase()}.png" alt="${player1.trainer.type}">
                </div>
                <div class="playerName">${player1.playerName}</div>
                <div class="playerTeam">
                    ${player1.team.map(pokemon => `
                        <img class="player1PokeImg" src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                    `).join('')}
                </div>
            </div>
            <div class="currentPokemonStats" id="player1CurrentStats">
                <div class="currentPokemonName">${player1.team[0].poke.name}</div> <br>
                <div class="currentPokemonHP"> ${player1.team[0].hp}/${player1.team[0].poke.hp} HP</div> <br>
                <div class="currentPokemonStamina"> ${player1.team[0].st}/${player1.team[0].poke.stamina} ST</div> <br>
            </div>
            <div id="ingameButtons">
            <div id="battleMusicSwitch">
                <select id="musicSelector" onchange="switchBattleMusic(this.value)">
                    <option value="battleMusic">Elite 4 Theme</option>
                    <option value="battleMusic2">Team Aqua/Magma Team Leader</option>
                    <option value="battleMusic3">Gym Leader Battle</option>
                </select>
            </div>
            <div id="ingameBack" onclick="homescreen()">Back</div>
            </div>

            <div class="currentPokemonStats" id="player2CurrentStats">
                <div class="currentPokemonName">${player2.team[0].poke.name}</div> <br>
                <div class="currentPokemonHP"> ${player2.team[0].hp}/${player2.team[0].poke.hp} HP</div> <br>
                <div class="currentPokemonStamina"> ${player2.team[0].st}/${player2.team[0].poke.stamina} ST</div> <br>
            </div>
            <div class="playerInfoBox" id="player2Info">
             <div class="playerTrainerBox" id="player2Trainer">
                <img class="player2TrainerBattleImg" src="./media/img/trainer/${player2.trainer.type.toLocaleLowerCase()}.png" alt="${player1.trainer.type}">
                </div>
                <div class="playerName">${player2.playerName}</div>
                <div class="playerTeam">
                    ${player2.team.map(pokemon => `
                        <img src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    const middleSection = `
        <div id="middleSection">
            <img id="player1PokeImg" class="currentPokemon" src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player1.team[0].poke.name}">
            <img id="player2PokeImg" class="currentPokemon" src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player2.team[0].poke.name}">
        </div>
    `;
    const bottomSection = `
        <div id="bottomSection">
            <div id="player1Controls">
            ${player1.team[0].moves.map((move) => `
                <div class="actionButton" style="opacity: ${player1.team[0].hp > 0 ? 1 : 0.5}; ${player1.team[0].hp > 0 ? 'cursor: pointer;' : 'cursor: not-allowed;'}" ${player1.team[0].hp > 0 ? `onclick='attack1(${JSON.stringify(move)})'` : ''}>
                    ${move.name}
                </div>
            `).join('')}
                <div class="actionButton" onclick="switchPokemon1()">Change Pokémon</div>
            </div>
            <div id="battleLog">
                <p>Battle log will appear here...</p>
            </div>
            <div id="player2Controls">
            ${player2.team[0].moves.map((move) => `
                <div class="actionButton" style="opacity: ${player2.team[0].hp > 0 ? 1 : 0.5}; ${player2.team[0].hp > 0 ? 'cursor: pointer;' : 'cursor: not-allowed;'}" ${player2.team[0].hp > 0 ? `onclick='attack2(${JSON.stringify(move)})'` : ''}>
                    ${move.name}
                </div>
            `).join('')}
                <div class="actionButton" onclick="switchPokemon2()">Change Pokémon</div>
            </div>
        </div>
    `;
    battleContainer.innerHTML = `
        ${topSection}
        ${middleSection}
        ${bottomSection}
    `;
}
function switchBattleMusic(selectedMusic) {
    audio.battleMusic.pause();
    audio.battleMusic2.pause();
    audio.battleMusic3.pause();

    audio.battleMusic.currentTime = 0;
    audio.battleMusic2.currentTime = 0;
    audio.battleMusic3.currentTime = 0;

    audio[selectedMusic].play();
    audio[selectedMusic].loop = true;
    audio[selectedMusic].volume = 0.4;
}

function switchPokemon1() {
    const selectorHTML = `
        <div id="pokemonSwitchSelector">
            ${player1.team.map((pokemon, index) =>
        `<div class="pokeBox" style="opacity: ${pokemon.hp > 0 ? 1 : 0.5}; ${pokemon.hp > 0 ? 'cursor: pointer;' : 'cursor: not-allowed;'}" 
                    ${pokemon.hp > 0 ? `onclick="selectPokemon1(${index})"` : ''}>
                    <img src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                </div>`
    ).join('')}
        </div>
    `;

    const battleContainer = document.getElementById("battleBG");
    const selectorContainer = document.createElement("div");
    selectorContainer.id = "pokemonSwitchOverlay";
    selectorContainer.innerHTML = selectorHTML;
    battleContainer.appendChild(selectorContainer);
}


function selectPokemon1(selectedIndex) {
    player1.selectedSwitch = selectedIndex;

    const selectorOverlay = document.getElementById("pokemonSwitchOverlay");
    if (selectorOverlay) {
        selectorOverlay.remove();
    }

    console.log(`Player 1 selected ${player1.team[selectedIndex].poke.name} to switch.`);
    player1.madeTurn = true;
    TurnFinPlayer1();
}
function switchPokemon2() {
    const selectorHTML = `
        <div id="pokemonSwitchSelector">
            ${player2.team.map((pokemon, index) =>
        `<div class="pokeBox" style="opacity: ${pokemon.hp > 0 ? 1 : 0.5}; ${pokemon.hp > 0 ? 'cursor: pointer;' : 'cursor: not-allowed;'}" 
                    ${pokemon.hp > 0 ? `onclick="selectPokemon2(${index})"` : ''}>
                    <img src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                </div>`
    ).join('')}
        </div>
    `;

    const battleContainer = document.getElementById("battleBG");
    const selectorContainer = document.createElement("div");
    selectorContainer.id = "pokemonSwitchOverlay";
    selectorContainer.innerHTML = selectorHTML;
    battleContainer.appendChild(selectorContainer);
}


function selectPokemon2(selectedIndex) {
    player2.selectedSwitch = selectedIndex;

    const selectorOverlay = document.getElementById("pokemonSwitchOverlay");
    if (selectorOverlay) {
        selectorOverlay.remove();
    }

    console.log(`Player 2 selected ${player2.team[selectedIndex].poke.name} to switch.`);
    player2.madeTurn = true;
    TurnFinPlayer2();
}

function attack1(move) {
    move = typeof move === "string" ? JSON.parse(move) : move;

    if (player1.team[0].st >= move.stamina_cost) {
        player1.madeTurn = true;
        player1.moveMade = move;
        TurnFinPlayer1();
    } else {
        alert("Not enough stamina!");
    }
}

function attack2(move) {
    move = typeof move === "string" ? JSON.parse(move) : move;

    if (player2.team[0].st >= move.stamina_cost) {
        player2.madeTurn = true;
        player2.moveMade = move;
        TurnFinPlayer2();
    } else {
        alert("Not enough stamina!");
    }
}

function TurnFinPlayer1() {
    document.getElementById("player1Controls").innerHTML = `
    <div class="turnFin"> ${player1.playerName} finished their Turn!</div>
    `
    if (player1.madeTurn && player2.madeTurn) {
        executeTurn();
    }
}

function TurnFinPlayer2() {
    document.getElementById("player2Controls").innerHTML = `
    <div class="turnFin"> ${player2.playerName} finished their Turn!</div>
    `
    if (player1.madeTurn && player2.madeTurn) {
        executeTurn();
    }
}
function logPlayer1Action(action) {
    const battleLog = document.getElementById("battleLog");
    battleLog.innerHTML += `<p>${player1.playerName}: ${action}</p>`;
}

function logPlayer2Action(action) {
    const battleLog = document.getElementById("battleLog");
    battleLog.innerHTML += `<p>${player2.playerName}: ${action}</p>`;
}
function logPlayerAction(player, message) {
    const battleLog = document.getElementById("battleLog");
    battleLog.innerHTML += `<p>${player.playerName}: ${message}</p>`;
}

function executeTurn() {

    applyPerk(player1, "start");
    applyPerk(player2, "start");

    applyPokemonPerk(player1, "start");
    applyPokemonPerk(player2, "start");

    setTimeout(function () {

        const player1Speed = player1.team[0].speed;
        const player2Speed = player2.team[0].speed;

        const firstPlayer = player1Speed >= player2Speed ? player1 : player2;
        const secondPlayer = player1Speed >= player2Speed ? player2 : player1;

        if (player1.selectedSwitch == undefined && player2.selectedSwitch == undefined) {
            setTimeout(function () {
                processPlayerAction(firstPlayer, secondPlayer);
            }, 100)
            setTimeout(function () {
                if (secondPlayer.team[0].hp > 0) {
                    processPlayerAction(secondPlayer, firstPlayer);
                } else {
                    if (secondPlayer === player2) {
                        logPlayer2Action(`${player2.team[0].poke.name} fainted!`);
                        document.getElementById("player2PokeImg").style.animation = "";
                        document.getElementById("player2PokeImg").offsetHeight;
                        document.getElementById("player2PokeImg").style.animation = "faint 0.5s forwards";
                        audio.faintSound.play()
                        player1.team[0].knockedOutOpponent = true;
                    } else {
                        logPlayer1Action(`${player1.team[0].poke.name} fainted!`);
                        document.getElementById("player1PokeImg").style.animation = "";
                        document.getElementById("player1PokeImg").offsetHeight;
                        document.getElementById("player1PokeImg").style.animation = "faint 0.5s forwards";
                        audio.faintSound.play()
                        player2.team[0].knockedOutOpponent = true;
                    }
                }
            }, 1000)
        } else {
            if (player1.selectedSwitch !== undefined && player2.selectedSwitch !== undefined) {
                setTimeout(function () {
                    const selectedPokemon = player1.team[player1.selectedSwitch];
                    player1.team.unshift(player1.team.splice(player1.selectedSwitch, 1)[0]);
                    console.log(`Player 1 switched to ${selectedPokemon.poke.name}.`);
                    player1.selectedSwitch = undefined;
                    logPlayer1Action(`${player1.playerName} switched to ${selectedPokemon.poke.name}.`);
                    document.getElementById("player1PokeImg").style.animation = "";
                    document.getElementById("player1PokeImg").offsetHeight;
                    document.getElementById("player1PokeImg").style.animation = "fadeOut 0.5s forwards";
                    loadTopMidSection();
                    audio.switchSound.play()
                    document.getElementById("player1PokeImg").style.animation = "";
                    document.getElementById("player1PokeImg").offsetHeight;
                    document.getElementById("player1PokeImg").style.animation = "fadeIn 0.5s forwards";
                }, 100)

                setTimeout(function () {
                    const selectedPokemon2 = player2.team[player2.selectedSwitch];
                    player2.team.unshift(player2.team.splice(player2.selectedSwitch, 1)[0]);
                    console.log(`Player 2 switched to ${selectedPokemon2.poke.name}.`);
                    player2.selectedSwitch = undefined;
                    logPlayer2Action(`${player2.playerName} switched to ${selectedPokemon2.poke.name}.`)
                    document.getElementById("player2PokeImg").style.animation = "";
                    document.getElementById("player2PokeImg").offsetHeight;
                    document.getElementById("player2PokeImg").style.animation = "fadeOut 0.5s forwards";
                    loadTopMidSection();
                    audio.switchSound.play()
                    document.getElementById("player2PokeImg").style.animation = "";
                    document.getElementById("player2PokeImg").offsetHeight;
                    document.getElementById("player2PokeImg").style.animation = "fadeIn 0.5s forwards";
                }, 1000)


            } else {
                if (player1.selectedSwitch !== undefined && player2.selectedSwitch == undefined) {
                    setTimeout(function () {
                        const selectedPokemon = player1.team[player1.selectedSwitch];
                        player1.team.unshift(player1.team.splice(player1.selectedSwitch, 1)[0]);
                        console.log(`Player 1 switched to ${selectedPokemon.poke.name}.`);
                        player1.selectedSwitch = undefined;
                        logPlayer1Action(`${player1.playerName} switched to ${selectedPokemon.poke.name}.`);
                        document.getElementById("player1PokeImg").style.animation = "";
                        document.getElementById("player1PokeImg").offsetHeight;
                        document.getElementById("player1PokeImg").style.animation = "fadeOut 0.5s forwards";
                        loadTopMidSection();
                        audio.switchSound.play()
                        document.getElementById("player1PokeImg").style.animation = "";
                        document.getElementById("player1PokeImg").offsetHeight;
                        document.getElementById("player1PokeImg").style.animation = "fadeIn 0.5s forwards";
                    }, 100)

                    setTimeout(function () {
                        processPlayerAction(player2, player1);
                    }, 1000)

                    if (player1.team[0].hp <= 0) {
                        logPlayer1Action(`${player1.team[0].poke.name} fainted!`);
                        document.getElementById("player1PokeImg").style.animation = "";
                        document.getElementById("player1PokeImg").offsetHeight;
                        document.getElementById("player1PokeImg").style.animation = "faint 0.5s forwards";
                        audio.faintSound.play()
                        player2.team[0].knockedOutOpponent = true;
                    }
                } else {
                    if (player1.selectedSwitch == undefined && player2.selectedSwitch !== undefined) {
                        setTimeout(function () {
                            const selectedPokemon2 = player2.team[player2.selectedSwitch];
                            player2.team.unshift(player2.team.splice(player2.selectedSwitch, 1)[0]);
                            console.log(`Player 2 switched to ${selectedPokemon2.poke.name}.`);
                            player2.selectedSwitch = undefined;
                            logPlayer2Action(`${player2.playerName} switched to ${selectedPokemon2.poke.name}.`)
                            document.getElementById("player2PokeImg").style.animation = "";
                            document.getElementById("player2PokeImg").offsetHeight;
                            document.getElementById("player2PokeImg").style.animation = "fadeOut 0.5s forwards";
                            loadTopMidSection();
                            audio.switchSound.play()
                            document.getElementById("player2PokeImg").style.animation = "";
                            document.getElementById("player2PokeImg").offsetHeight;
                            document.getElementById("player2PokeImg").style.animation = "fadeIn 0.5s forwards";
                        }, 100
                        )
                        setTimeout(function () {
                            processPlayerAction(player1, player2);
                        }, 1000)

                        if (player2.team[0].hp <= 0) {
                            logPlayer2Action(`${player2.team[0].poke.name} fainted!`);
                            document.getElementById("player2PokeImg").style.animation = "";
                            document.getElementById("player2PokeImg").offsetHeight;
                            document.getElementById("player2PokeImg").style.animation = "faint 0.5s forwards";
                            audio.faintSound.play()
                            player1.team[0].knockedOutOpponent = true;
                        }
                    }
                }
            }
        }

        player1.madeTurn = false;
        player2.madeTurn = false;

        player1.team[0].st = Math.min(player1.team[0].poke.stamina, player1.team[0].st + Math.floor(player1.team[0].poke.stamina * 0.05));
        player2.team[0].st = Math.min(player2.team[0].poke.stamina, player2.team[0].st + Math.floor(player2.team[0].poke.stamina * 0.05));

        applyPerk(player1, "end");
        applyPerk(player2, "end");

        applyPokemonPerk(player1, "end");
        applyPokemonPerk(player2, "end");

        loadTopMidSection();
        setTimeout(function () {
            loadBattleSite();
        }, 5000);
    }, 500);


}

function processPlayerAction(attacker, defender) {
    const accuracyRoll = Math.random() * 100;
    const move = attacker.moveMade;
    attacker.team[0].st -= move.stamina_cost;

    if (defender.team[0].dodgedAttack) {
        logPlayerAction(defender, `${defender.team[0].poke.name} dodged the attack!`);
        defender.team[0].dodgedAttack = false;
        return;
    }

    if (accuracyRoll <= move.acc) {

        if (attacker === player1) {
            document.getElementById("player1PokeImg").style.animation = "";
            document.getElementById("player1PokeImg").offsetHeight;
            document.getElementById("player1PokeImg").style.animation = "attack1 0.5s forwards";
            audio.attackSound.play()
        } else {
            document.getElementById("player2PokeImg").style.animation = "";
            document.getElementById("player2PokeImg").offsetHeight;
            document.getElementById("player2PokeImg").style.animation = "attack2 0.5s forwards";
            audio.attackSound.play()
        }

        let effectiveness = 1;

        defender.team[0].poke.type.forEach((type) => {
            if (move.double.includes(type)) {
                effectiveness *= 2;
            } else if (move.half.includes(type)) {
                effectiveness *= 0.5;
            } else if (move.zero.includes(type)) {
                effectiveness = 0;
            }
        });


        const rndmMultiplier = Math.random() * (1.2 - 0.8) + 0.8;
        const damage = Math.floor((10 * (move.power * (attacker.team[0].might / defender.team[0].resistance)) / 50 + 2) * rndmMultiplier * effectiveness);
        defender.team[0].hp = Math.max(0, defender.team[0].hp - damage);
        attacker.team[0].lastDamageDealt += damage;

        if (effectiveness > 1) {
            if (attacker === player1) {
                logPlayer1Action(`${move.name} was super effective! ${defender.team[0].poke.name} lost ${damage} HP.`);
            } else {
                logPlayer2Action(`${move.name} was super effective! ${defender.team[0].poke.name} lost ${damage} HP.`);
            }
        } else if (effectiveness < 1 && effectiveness > 0) {
            if (attacker === player1) {
                logPlayer1Action(`${move.name} was not very effective. ${defender.team[0].poke.name} lost ${damage} HP.`);
            } else {
                logPlayer2Action(`${move.name} was not very effective. ${defender.team[0].poke.name} lost ${damage} HP.`);
            }
        } else if (effectiveness === 0) {
            if (attacker === player1) {
                logPlayer1Action(`${move.name} had no effect on ${defender.team[0].poke.name}.`);
            } else {
                logPlayer2Action(`${move.name} had no effect on ${defender.team[0].poke.name}.`);
            }
        } else {
            if (attacker === player1) {
                logPlayer1Action(`${move.name} hit! ${defender.team[0].poke.name} lost ${damage} HP.`);
            } else {
                logPlayer2Action(`${move.name} hit! ${defender.team[0].poke.name} lost ${damage} HP.`);
            }
        }
    } else {
        if (attacker === player1) {
            logPlayer1Action(`${move.name} missed!`);
        } else {
            logPlayer2Action(`${move.name} missed!`);
        }
    }
    setTimeout(function () {
        loadTopMidSection();
    }, 600)
    setTimeout(function () {
        checkGameOver();
    }, 2500)

}
function loadTopMidSection() {
    document.getElementById("topSection").innerHTML = `
        <div class="playerInfoBox" id="player1Info"> 
                <div class="playerTrainerBox" id="player1Trainer">
                <img src="./media/img/trainer/${player1.trainer.type.toLocaleLowerCase()}.png" alt="${player1.trainer.type}">
                </div>
                <div class="playerName">${player1.playerName}</div>
                <div class="playerTeam">
                    ${player1.team.map(pokemon => `
                        <img class="player1PokeImg" src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                    `).join('')}
                </div>
            </div>
            <div class="currentPokemonStats" id="player1CurrentStats">
                <div class="currentPokemonName">${player1.team[0].poke.name}</div> <br>
                <div class="currentPokemonHP"> ${player1.team[0].hp}/${player1.team[0].poke.hp} HP</div> <br>
                <div class="currentPokemonStamina"> ${player1.team[0].st}/${player1.team[0].poke.stamina} ST</div> <br>
            </div>
            <div id="ingameButtons">
            <div id="battleMusicSwitch">
                <select id="musicSelector" onchange="switchBattleMusic(this.value)">
                    <option value="battleMusic">Elite 4 Theme</option>
                    <option value="battleMusic2">Team Aqua/Magma Team Leader</option>
                    <option value="battleMusic3">Gym Leader Battle</option>
                </select>
            </div>
            <div id="ingameBack" onclick="homescreen()">Back</div>
            </div>
            <div class="currentPokemonStats" id="player2CurrentStats">
                <div class="currentPokemonName">${player2.team[0].poke.name}</div> <br>
                <div class="currentPokemonHP"> ${player2.team[0].hp}/${player2.team[0].poke.hp} HP</div> <br>
                <div class="currentPokemonStamina"> ${player2.team[0].st}/${player2.team[0].poke.stamina} ST</div> <br>
            </div>
            <div class="playerInfoBox" id="player2Info">
             <div class="playerTrainerBox" id="player2Trainer">
                <img class="player2TrainerBattleImg" src="./media/img/trainer/${player2.trainer.type.toLocaleLowerCase()}.png" alt="${player1.trainer.type}">
                </div>
                <div class="playerName">${player2.playerName}</div>
                <div class="playerTeam">
                    ${player2.team.map(pokemon => `
                        <img src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                    `).join('')}
                </div>
            </div>
        `
    document.getElementById("middleSection").innerHTML = `
        <img id="player1PokeImg" class="currentPokemon" src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player1.team[0].poke.name}">
            <img id="player2PokeImg" class="currentPokemon" src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player2.team[0].poke.name}">
        `
}
function checkGameOver() {
    const player1AllFainted = player1.team.every(pokemon => pokemon.hp <= 0);
    const player2AllFainted = player2.team.every(pokemon => pokemon.hp <= 0);

    if (player1AllFainted || player2AllFainted) {
        const winner = player1AllFainted ? player2.playerName : player1.playerName;

        audio.battleMusic.pause();
        audio.battleMusic2.pause();
        audio.battleMusic3.pause();
        audio.victoryMusic.play();
        audio.victoryMusic.loop = true;
        audio.victoryMusic.volume = 0.4;

        document.body.innerHTML = `
            <div id="endScreen">
                <div id="endScreenContent">
                    <h1>Game Over</h1>
                    <p>${winner} wins!</p>
                    <div id="restartButton" onclick="location.reload()">Restart</div>
                </div>
            </div>
        `;
    }
}

function applyPerk(player, phase) {
    const trainerType = player.trainer.type;

    switch (trainerType) {
        case "fire":
            if (phase === "end") fieryRebirth(player);
            break;
        case "water":
            if (phase === "start") torrentialBoost(player);
            break;
        case "grass":
            if (phase === "end") verdantRecovery(player);
            break;
        case "electric":
            if (phase === "start") overcharge(player);
            break;
        case "ice":
            if (phase === "start") frozenResilience(player);
            break;
        case "fighting":
            if (phase === "end") unbreakableWill(player);
            break;
        case "poison":
            if (phase === "start") venomousPrecision(player);
            break;
        case "flying":
            if (phase === "start") skyDancer(player);
            break;
        case "bug":
            if (phase === "end") swarmTactics(player);
            break;
        case "rock":
            if (phase === "start") stoneWall(player);
            break;
        case "ghost":
            if (phase === "start") phantomEscape(player);
            break;
        case "dragon":
            if (phase === "end") ancientPower(player);
            break;
        case "dark":
            if (phase === "start") shadowStrike(player);
            break;
        case "steel":
            if (phase === "start") ironResolve(player);
            break;
        case "ground":
            if (phase === "end") quakeMomentum(player);
            break;
        case "fairy":
            if (phase === "start") enchantedVeil(player);
            break;
        case "psychic":
            if (phase === "start") mindOverMatter(player);
            break;
        case "normal":
            if (phase === "start") underdogSpirit(player);
            break;
    }
}

// Trainer Perk Functions

function fieryRebirth(player) {
    if (player == player1) {
        const firePokemon = player.team.find(pokemon => pokemon.poke.type.includes("fire") && pokemon.hp <= 0);
        if (firePokemon && !player.trainer.rebornp1) {
            firePokemon.hp = Math.floor(firePokemon.poke.hp / 2);
            player.trainer.rebornp1 = true;
            logPlayerAction(player, `${firePokemon.poke.name} was reborn with half HP!`);
            console.log(player.playerName + `:${firePokemon.poke.name} was reborn with half HP!`)
        }
    } else {
        const firePokemon = player.team.find(pokemon => pokemon.poke.type.includes("fire") && pokemon.hp <= 0);
        if (firePokemon && !player.trainer.rebornp2) {
            firePokemon.hp = Math.floor(firePokemon.poke.hp / 2);
            player.trainer.rebornp2 = true;
            logPlayerAction(player, `${firePokemon.poke.name} was reborn with half HP!`);
            console.log(player.playerName + `:${firePokemon.poke.name} was reborn with half HP!`)
        }
    }
}

function torrentialBoost(player) {
    if (player == player1) {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("water") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.torrentialBoostp1) {
            player.trainer.torrentialBoostp1 = true;
            activePokemon.might = Math.floor(activePokemon.poke.might * 1.2);
            logPlayerAction(player, `${activePokemon.poke.name} gained a Torrential Boost!`);
        }
    } else {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("water") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.torrentialBoostp2) {
            player.trainer.torrentialBoostp2 = true;
            activePokemon.might = Math.floor(activePokemon.poke.might * 1.2);
            logPlayerAction(player, `${activePokemon.poke.name} gained a Torrential Boost!`);
        }
    }
}


function verdantRecovery(player) {
    if (player.team[0].poke.type.includes("grass") && player.team[0].hp > 0) {
        const recoveredHP = Math.floor(player.team[0].poke.hp * 0.1);
        player.team[0].hp = Math.min(player.team[0].hp + recoveredHP, player.team[0].poke.hp);
        logPlayerAction(player, `${player.team[0].poke.name} recovered ${recoveredHP} HP!`);
    }
}
function overcharge(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("electric")) {
        activePokemon.might = Math.floor(activePokemon.poke.might * 1.15);
        logPlayerAction(player, `${activePokemon.poke.name} gained Overcharge, increasing its might!`);
    }
}
function frozenResilience(player) {
    if (player == player1) {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("ice") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.frozenResiliencep1) {
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.2);
            player.trainer.frozenResiliencep1 = true;
            logPlayerAction(player, `${activePokemon.poke.name} gained Frozen Resilience, reducing damage taken!`);
        }
    } else {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("ice") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.frozenResiliencep2) {
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.2);
            player.trainer.frozenResiliencep2 = true;
            logPlayerAction(player, `${activePokemon.poke.name} gained Frozen Resilience, reducing damage taken!`);
        }
    }
}

function unbreakableWill(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("fighting") && activePokemon.knockedOutOpponent) {
        activePokemon.might = Math.floor(activePokemon.poke.resistance * 1.1);
        activePokemon.knockedOutOpponent = false;
        logPlayerAction(player, `${activePokemon.poke.name} gained Unbreakable Will, increasing its might!`);
    }
}

function venomousPrecision(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("poison")) {
        const damageRecovered = Math.floor(activePokemon.lastDamageDealt * 0.05);
        activePokemon.hp = Math.min(activePokemon.hp + damageRecovered, activePokemon.poke.hp);
        logPlayerAction(player, `${activePokemon.poke.name} recovered ${damageRecovered} HP with Venomous Precision!`);
    }
}
function skyDancer(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("flying")) {
        const dodgeChance = Math.random() * 100;
        if (dodgeChance <= 20) {
            activePokemon.dodgedAttack = true;
        }
    }
}
function swarmTactics(player) {
    if (player == player1) {
        const bugCount = player.team.filter(pokemon => pokemon.poke.type.includes("bug")).length;
        if (bugCount > 1 && !player.trainer.swarmTacticsp1) {
            player.team.forEach(pokemon => {
                if (pokemon.poke.type.includes("bug")) {
                    pokemon.might = Math.floor(pokemon.poke.might * 1.2);
                    logPlayerAction(player, `${pokemon.poke.name} gained Swarm Tactics, increasing its might!`);
                }
            });
            player.trainer.swarmTacticsp1 = true;
        }
    } else {
        const bugCount = player.team.filter(pokemon => pokemon.poke.type.includes("bug")).length;
        if (bugCount > 1 && !player.trainer.swarmTacticsp2) {
            player.team.forEach(pokemon => {
                if (pokemon.poke.type.includes("bug")) {
                    pokemon.might = Math.floor(pokemon.poke.might * 1.2);
                    logPlayerAction(player, `${pokemon.poke.name} gained Swarm Tactics, increasing its might!`);
                }
            });
            player.trainer.swarmTacticsp2 = true;
        }
    }
}
function stoneWall(player) {
    if (player == player1) {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("rock") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.stoneWallp1) {
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.2);
            player.trainer.stoneWallp1 = true;
            logPlayerAction(player, `${activePokemon.poke.name} gained Stone Wall, increasing its resistance!`);
        }
    } else {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("rock") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.stoneWallp2) {
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.2);
            player.trainer.stoneWallp2 = true;
            logPlayerAction(player, `${activePokemon.poke.name} gained Stone Wall, increasing its resistance!`);
        }
    }
}

function phantomEscape(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("ghost")) {
        const dodgeChance = Math.random() * 100;
        if (dodgeChance <= 20) {
            activePokemon.dodgedAttack = true;
        }
    }
}
function ancientPower(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("dragon") && activePokemon.knockedOutOpponent) {
        activePokemon.might = Math.floor(activePokemon.poke.might * 1.05);
        logPlayerAction(player, `${activePokemon.poke.name} gained Ancient Power, increasing its might!`);
    }
}
function shadowStrike(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("dark")) {
        activePokemon.might = Math.floor(activePokemon.poke.might * 1.1);
        logPlayerAction(player, `${activePokemon.poke.name} gained Shadow Strike, increasing its might!`);
    }
}
function ironResolve(player) {
    if (player == player1) {
        if (!player.trainer.ironResolvep1) {
            player.trainer.ironResolvep1 = true;
            const activePokemon = player.team[0];
            if (activePokemon.poke.type.includes("steel")) {
                activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.1);
                logPlayerAction(player, `${activePokemon.poke.name} gained Iron Resolve, increasing its resistance!`);
            }
        }
    } else {
        if (!player.trainer.ironResolvep2) {
            player.trainer.ironResolvep2 = true;
            const activePokemon = player.team[0];
            if (activePokemon.poke.type.includes("steel")) {
                activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.1);
                logPlayerAction(player, `${activePokemon.poke.name} gained Iron Resolve, increasing its resistance!`);
            }
        }
    }
}

function quakeMomentum(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("ground") && activePokemon.knockedOutOpponent) {
        activePokemon.speed = Math.floor(activePokemon.poke.speed * 1.2);
        logPlayerAction(player, `${activePokemon.poke.name} gained Quake Momentum, increasing its speed!`);
        activePokemon.knockedOutOpponent = false;
    }
}
function enchantedVeil(player) {
    if (player == player1) {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("fairy") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.enchantedVeilp1) {
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.25);
            logPlayerAction(player, `${activePokemon.poke.name} gained Enchanted Veil, reducing damage taken!`);
            player.trainer.enchantedVeilp1 = true;
        }
    } else {
        const activePokemon = player.team[0];
        if (activePokemon.poke.type.includes("fairy") && activePokemon.hp <= activePokemon.poke.hp / 2 && !player.trainer.enchantedVeilp2) {
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.25);
            logPlayerAction(player, `${activePokemon.poke.name} gained Enchanted Veil, reducing damage taken!`);
            player.trainer.enchantedVeilp2 = true;
        }
    }
}

function mindOverMatter(player) {
    const activePokemon = player.team[0];
    if (activePokemon.poke.type.includes("psychic")) {
        const dodgeChance = Math.random() * 100;
        if (dodgeChance <= 10) {
            activePokemon.dodgedAttack = true;
            logPlayerAction(player, `${activePokemon.poke.name} dodged the attack with Mind over Matter!`);
        }
    }
}
function underdogSpirit(player) {
    const activePokemon = player.team[0];
    const opponentPokemon = player === player1 ? player2.team[0] : player1.team[0];

    const activePokemonStatTotal = activePokemon.poke.hp + activePokemon.poke.might + activePokemon.poke.resistance + activePokemon.poke.speed;
    const opponentPokemonStatTotal = opponentPokemon.poke.hp + opponentPokemon.poke.might + opponentPokemon.poke.resistance + opponentPokemon.poke.speed;

    if (player == player1) {
        if (activePokemon.poke.type.includes("normal") && activePokemonStatTotal < opponentPokemonStatTotal && !player.trainer.underdogSpiritp1) {
            player.trainer.underdogSpiritp1 = true;
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.15);
            logPlayerAction(player, `${activePokemon.poke.name} gained Underdog Spirit, reducing damage taken!`);
        }
    } else {
        if (activePokemon.poke.type.includes("normal") && activePokemonStatTotal < opponentPokemonStatTotal && !player.trainer.underdogSpiritp2) {
            player.trainer.underdogSpiritp2 = true;
            activePokemon.resistance = Math.floor(activePokemon.poke.resistance * 1.15);
            logPlayerAction(player, `${activePokemon.poke.name} gained Underdog Spirit, reducing damage taken!`);
        }
    }

}
function applyPokemonPerk(player, phase) {
    const activePokemon = player.team[0];
    const perk = activePokemon.perk;

    switch (perk.type) {
        case "fire":
            if (perk.perk.includes("Heat Surge") && phase === "end") {
                heatSurge(activePokemon, player);
            } else if (perk.perk.includes("Ember Shield") && phase === "start") {
                emberShield(activePokemon, player);
            }
            break;

        case "water":
            if (perk.perk.includes("Flow State") && phase === "end") {
                flowState(activePokemon, player);
            } else if (perk.perk.includes("Wave Crash") && phase === "start") {
                waveCrash(activePokemon, player);
            }
            break;

        case "grass":
            if (perk.perk.includes("Rooted Strength") && phase === "end") {
                rootedStrength(activePokemon, player);
            } else if (perk.perk.includes("Vine Snare") && phase === "start") {
                vineSnare(activePokemon, player);
            }
            break;

        case "electric":
            if (perk.perk.includes("Electric Speed") && phase === "start") {
                electricSpeed(activePokemon, player);
            } else if (perk.perk.includes("Charge Up") && phase === "start") {
                chargeUp(activePokemon, player);
            }
            break;

        case "ice":
            if (perk.perk.includes("Frost Armor") && phase === "start") {
                frostArmor(activePokemon, player);
            } else if (perk.perk.includes("Chilling Touch") && phase === "end") {
                chillingTouch(activePokemon, player);
            }
            break;

        case "fighting":
            if (perk.perk.includes("Second Wind") && phase === "end") {
                secondWind(activePokemon, player);
            } else if (perk.perk.includes("Unyielding") && phase === "start") {
                unyielding(activePokemon, player);
            }
            break;

        case "poison":
            if (perk.perk.includes("Lingering Toxins") && phase === "end") {
                lingeringToxins(activePokemon, player);
            } else if (perk.perk.includes("Corrosive Touch") && phase === "end") {
                corrosiveTouch(activePokemon, player);
            }
            break;

        case "flying":
            if (perk.perk.includes("Wind Rider") && phase === "start") {
                windRider(activePokemon, player);
            } else if (perk.perk.includes("Aerial Control") && phase === "start") {
                aerialControl(activePokemon, player);
            }
            break;

        case "psychic":
            if (perk.perk.includes("Mental Clarity") && phase === "start") {
                mentalClarity(activePokemon, player);
            } else if (perk.perk.includes("Telekinetic Evasion") && phase === "start") {
                telekineticEvasion(activePokemon, player);
            }
            break;

        case "bug":
            if (perk.perk.includes("Swarm Formation") && phase === "end") {
                swarmFormation(activePokemon, player);
            } else if (perk.perk.includes("Exoskeleton") && phase === "start") {
                exoskeleton(activePokemon, player);
            }
            break;

        case "rock":
            if (perk.perk.includes("Hardened Defense") && phase === "start") {
                hardenedDefense(activePokemon, player);
            } else if (perk.perk.includes("Rolling Momentum") && phase === "end") {
                rollingMomentum(activePokemon, player);
            }
            break;

        case "ghost":
            if (perk.perk.includes("Ethereal Step") && phase === "start") {
                etherealStep(activePokemon, player);
            } else if (perk.perk.includes("Haunted Aura") && phase === "end") {
                hauntedAura(activePokemon, player);
            }
            break;

        case "dragon":
            if (perk.perk.includes("Draconic Ferocity") && phase === "start") {
                draconicFerocity(activePokemon, player);
            } else if (perk.perk.includes("Endless Will") && phase === "end") {
                endlessWill(activePokemon, player);
            }
            break;

        case "dark":
            if (perk.perk.includes("Sneaky Strike") && phase === "start") {
                sneakyStrike(activePokemon, player);
            } else if (perk.perk.includes("Nocturnal Hunter") && phase === "start") {
                nocturnalHunter(activePokemon, player);
            }
            break;

        case "steel":
            if (perk.perk.includes("Metal Core") && phase === "start") {
                metalCore(activePokemon, player);
            } else if (perk.perk.includes("Reinforced Body") && phase === "start") {
                reinforcedBody(activePokemon, player);
            }
            break;

        case "fairy":
            if (perk.perk.includes("Blessed Shield") && phase === "start") {
                blessedShield(activePokemon, player);
            } else if (perk.perk.includes("Pixie Trick") && phase === "end") {
                pixieTrick(activePokemon, player);
            }
            break;

        case "normal":
            if (perk.perk.includes("Adaptability") && phase === "start") {
                adaptability(activePokemon, player);
            } else if (perk.perk.includes("Balanced Instincts") && phase === "start") {
                balancedInstincts(activePokemon, player);
            }
            break;
    }
}
function heatSurge(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.speed = Math.floor(pokemon.speed * 1.1);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Heat Surge, increasing its speed!`);
    }
}
function emberShield(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Ember Shield, increasing its resistance!`);
    }
}
function flowState(pokemon, player) {
    const recoveredHP = Math.floor(pokemon.poke.hp * 0.05);
    pokemon.hp = Math.min(pokemon.hp + recoveredHP, pokemon.poke.hp);
    logPlayerAction(player, `${pokemon.poke.name} activated Flow State, recovering ${recoveredHP} HP!`);
}
function waveCrash(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.might = Math.floor(pokemon.might * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Wave Crash, increasing its damage!`);
    }
}
function rootedStrength(pokemon, player) {
    pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
    logPlayerAction(player, `${pokemon.poke.name} activated Rooted Strength, increasing its resistance!`);
}
function vineSnare(pokemon, player) {
    const chance = Math.random() * 100;
    if (chance <= 20) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.speed = Math.floor(opponent.speed * 0.95);
        logPlayerAction(player, `${pokemon.poke.name} activated Vine Snare, reducing ${opponent.poke.name}'s speed!`);
    }
}
function electricSpeed(pokemon, player) {
    const dodgeChance = Math.random() * 100;
    if (dodgeChance <= 5) {
        pokemon.dodgedAttack = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Electric Speed and is ready to dodge the next attack!`);
    }
}
function chargeUp(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Charge Up, increasing its resistance!`);
    }
}
function frostArmor(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Frost Armor, increasing its resistance!`);
    }
}
function chillingTouch(pokemon, player) {
    const chance = Math.random() * 100;
    if (chance <= 15) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.speed = Math.floor(opponent.speed * 0.95);
        logPlayerAction(player, `${pokemon.poke.name} activated Chilling Touch, reducing ${opponent.poke.name}'s speed!`);
    }
}
function secondWind(pokemon, player) {
    if (pokemon.knockedOutOpponent) {
        const recoveredHP = Math.floor(pokemon.poke.hp * 0.1);
        pokemon.hp = Math.min(pokemon.hp + recoveredHP, pokemon.poke.hp);
        pokemon.knockedOutOpponent = false;
        logPlayerAction(player, `${pokemon.poke.name} activated Second Wind, recovering ${recoveredHP} HP!`);
    }
}
function unyielding(pokemon, player) {
    if (pokemon.hp <= pokemon.poke.hp * 0.3 && !pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.15);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Unyielding, reducing damage taken!`);
    }
}
function firmFooting(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.speed = Math.floor(pokemon.speed * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Firm Footing, increasing its speed!`);
    }
}
function dustCloud(pokemon, player) {
    const chance = Math.random() * 100;
    if (chance <= 10) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.speed = Math.floor(opponent.speed * 0.95);
        logPlayerAction(player, `${pokemon.poke.name} activated Dust Cloud, reducing ${opponent.poke.name}'s speed!`);
    }
}
function lingeringToxins(pokemon, player) {
    if (pokemon.hp <= 0) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.hp = Math.max(0, opponent.hp - Math.floor(opponent.poke.hp * 0.1));
        logPlayerAction(player, `${pokemon.poke.name} activated Lingering Toxins, damaging ${opponent.poke.name}!`);
    }
}
function corrosiveTouch(pokemon, player) {
    if (pokemon.hp <= 0) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.resistance = Math.floor(opponent.resistance * 0.8);
        logPlayerAction(player, `${pokemon.poke.name} activated Corrosive Touch, reducing ${opponent.poke.name}'s resistance!`);
    }
}
function windRider(pokemon, player) {
    const opponent = player === player1 ? player2.team[0] : player1.team[0];
    if (pokemon.speed > opponent.speed && !pokemon.perkUsed) {
        pokemon.perkUsed = true;
        pokemon.resistance = Math.floor(pokemon.resistance * 1.1);
        logPlayerAction(player, `${pokemon.poke.name} activated Wind Rider, reducing damage taken!`);
    }
}
function aerialControl(pokemon, player) {
    const dodgeChance = Math.random() * 100;
    if (dodgeChance <= 5) {
        pokemon.dodgedAttack = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Aerial Control and is ready to dodge the next attack!`);
    }
}
function mentalClarity(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
        pokemon.perkUsed = true
        logPlayerAction(player, `${pokemon.poke.name} activated Mental Clarity, increasing its resistance!`);
    }
}
function telekineticEvasion(pokemon, player) {
    const dodgeChance = Math.random() * 100;
    if (dodgeChance <= 5) {
        pokemon.dodgedAttack = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Telekinetic Evasion and is ready to dodge the next attack!`);
    }
}
function swarmFormation(pokemon, player) {
    const bugCount = player.team.filter(p => p.poke.type.includes("bug")).length;
    if (bugCount > 1 && !pokemon.perkUsed) {
        pokemon.might = Math.floor(pokemon.might * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Swarm Formation, increasing its damage!`);
    }
}
function exoskeleton(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.1);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Exoskeleton, reducing damage taken!`);
    }
}
function hardenedDefense(pokemon, player) {
    if (pokemon.hp <= pokemon.poke.hp * 0.75 && !pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.15);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Hardened Defense, reducing damage taken!`);
    }
}
function rollingMomentum(pokemon, player) {
        pokemon.might = Math.floor(pokemon.might * 1.05);
        logPlayerAction(player, `${pokemon.poke.name} activated Rolling Momentum, increasing its damage!`);
}
function etherealStep(pokemon, player) {
    const dodgeChance = Math.random() * 100;
    if (dodgeChance <= 5) {
        pokemon.dodgedAttack = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Ethereal Step and is ready to dodge the next attack!`);
    }
}
function hauntedAura(pokemon, player) {
    const chance = Math.random() * 100;
    if (chance <= 15) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.resistance = Math.floor(opponent.resistance * 0.95);
        logPlayerAction(player, `${pokemon.poke.name} activated Haunted Aura, reducing ${opponent.poke.name}'s resistance!`);
    }
}
function draconicFerocity(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.might = Math.floor(pokemon.might * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Draconic Ferocity, increasing its damage!`);
    }
}
function endlessWill(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Endless Will, reducing damage taken!`);
    }
}
function sneakyStrike(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.might = Math.floor(pokemon.might * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Sneaky Strike, increasing its damage!`);
    }
}
function nocturnalHunter(pokemon, player) {
    if (pokemon.hp <= pokemon.poke.hp * 0.5 && !pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.1);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Nocturnal Hunter, reducing damage taken!`);
    }
}
function metalCore(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.1);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Metal Core, reducing damage taken!`);
    }
}
function reinforcedBody(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.5);
        pokemon.speed = Math.floor(pokemon.speed * 0.5);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated reinforced Body, Hope you like to be slow!`);
    }
}
function blessedShield(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Blessed Shield, reducing damage taken!`);
    }
}
function pixieTrick(pokemon, player) {
    const chance = Math.random() * 100;
    if (chance <= 10) {
        const opponent = player === player1 ? player2.team[0] : player1.team[0];
        opponent.speed = Math.floor(opponent.speed * 0.95);
        logPlayerAction(player, `${pokemon.poke.name} activated Pixie Trick, reducing ${opponent.poke.name}'s speed!`);
    }
}
function adaptability(pokemon, player) {
    if (!pokemon.perkUsed) {
        pokemon.speed = Math.floor(pokemon.speed * 1.05);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Adaptability, increasing its speed!`);
    }
}
function balancedInstincts(pokemon, player) {
    const opponent = player === player1 ? player2.team[0] : player1.team[0];
    if (opponent.speed > pokemon.speed && !pokemon.perkUsed) {
        pokemon.resistance = Math.floor(pokemon.resistance * 1.1);
        pokemon.perkUsed = true;
        logPlayerAction(player, `${pokemon.poke.name} activated Balanced Instincts, reducing damage taken!`);
    }
}

//Singleplayer
function singleplayer() {
    document.getElementById("homeBttns").style.animation = "none";
    document.getElementById("homeBttns").offsetHeight;
    document.getElementById("homeBttns").style.animation = "moveUp 1s";
    document.getElementById("logo").style.animation = "none";
    document.getElementById("logo").offsetHeight;
    document.getElementById("logo").style.animation = "moveUp 1s";

    setTimeout(function () {
        document.getElementById("forestBG").innerHTML = `
            <div id="singleplayerHeader">
                <img id="logo" src="./media/img/logo.png" alt="Logo">
                <div id="singleplayerBttns">
                    <div onclick="EndlessMode()" class="mainBtn">Endless Mode</div>
                    <div onclick="Leaderboard_endless()" class="mainBtn">Leaderboard</div>
                    <a class="mainBtn" href="./reveal.js-master/tutorial_Endless.html">Tutorial</a>
                </div>
                <div id="back" onclick="homescreen()">Back</div>
            </div>
        `;

        document.getElementById("singleplayerHeader").style.display = "block";
        document.getElementById("singleplayerHeader").style.animation = "none";
        document.getElementById("singleplayerHeader").offsetHeight;
        document.getElementById("singleplayerHeader").style.animation = "movein 1s";
    }, 900);
}
function EndlessMode() {
    document.getElementById("singleplayerHeader").style.animation = "none";
    document.getElementById("singleplayerHeader").offsetHeight;
    document.getElementById("singleplayerHeader").style.animation = "moveUp 1s";

    setTimeout(function () {
        document.getElementById("forestBG").innerHTML = `
        <div id="selectionScreen">
            <div id="headPlayerSelection">
                Endless Mode<br>
                Choose your Team
            </div>
            <div id="pokeSelectorMini">
                <div class="pokeBox" onclick="selectPokeSingle(0)">
                    <img src="./media/img/pokémon/${player_single.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
                </div>
                <div class="pokeBox" onclick="selectPokeSingle(1)">
                    <img src="./media/img/pokémon/${player_single.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
                </div>
                <div class="pokeBox" onclick="selectPokeSingle(2)">
                    <img src="./media/img/pokémon/${player_single.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
                </div>
            </div>
            <div id="back" onclick="homescreen()">
                Back
            </div>
            <div id="trainerSelector" onclick="selectTrainerSingle()">
                <img src="./media/img/trainer/${player_single.trainer.type.toLocaleLowerCase()}.png" alt="">
            </div>
            <div id="selectionDetail"></div>
            <input type="text" placeholder="Name..." id="playerSingleName" class="nameSelector">
            <div id="finish" onclick="startEndlessBattle()">
                Finish
            </div>
        </div>
        `;

        setTimeout(function () {
            document.getElementById("selectionScreen").style.display = "block";
            document.getElementById("selectionScreen").style.animation = "none";
            document.getElementById("selectionScreen").offsetHeight;
            document.getElementById("selectionScreen").style.animation = "movein 1s";
        }, 100);
    }, 900);
}
function selectTrainerSingle() {
    let tempstring = `
    <div id="trainerDetailTop">
        <div id="TrainerArrowL" onclick="changeTrainerSingle(-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
        <div id="TrainerImgBox"><img src="./media/img/trainer/${player_single.trainer.type}.png" alt=""></div>
        <div id="TrainerArrowR" onclick="changeTrainerSingle(1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    </div>
    <div id="trainerDetailBottom">
        <div id="trainerPerk">
            <img src="./media/img/types/${player_single.trainer.type}.png" alt=""> ${player_single.trainer.perk}
        </div>
        <div id="saveTrainer" onclick="saveTrainerSingle()">
            Save
        </div>
    </div>
    `;
    document.getElementById("selectionDetail").style.display = "block";
    document.getElementById("selectionDetail").innerHTML = tempstring;
}

function changeTrainerSingle(num) {
    if (player_single.trainer == trainer.trainers[0] && num == -1) {
        player_single.trainer = trainer.trainers[17];
    } else if (player_single.trainer == trainer.trainers[17] && num == 1) {
        player_single.trainer = trainer.trainers[0];
    } else {
        player_single.trainer = trainer.trainers[trainer.trainers.indexOf(player_single.trainer) + num];
    }
    selectTrainerSingle();
}

function saveTrainerSingle() {
    player_single.trainer = trainer.trainers[trainer.trainers.indexOf(player_single.trainer)];
    document.getElementById("selectionDetail").style.display = "none";
    document.getElementById("trainerSelector").innerHTML = `<img src="./media/img/trainer/${player_single.trainer.type}.png" alt="">`;
}

function selectPokeSingle(pokemonTeamNum) {
    let tempstring = "";
    if (player_single.team[pokemonTeamNum].poke.type.length > 1) {
        tempstring = `
    <div id="pokeDetailInfo">
        <div id="pokeDetailInfoImg" onclick="changePokeSingle(${pokemonTeamNum})">
            <img src="./media/img/pokémon/${player_single.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id="pokeDetailInfoLower">
            <div id="pokeDetailInfoName">${player_single.team[pokemonTeamNum].poke.name}</div>
            <div id="pokeDetailInfoType2">
                <img src="./media/img/types/${player_single.team[pokemonTeamNum].poke.type[0]}.png" alt="">
                <img src="./media/img/types/${player_single.team[pokemonTeamNum].poke.type[1]}.png" alt="">
            </div>
            <div id="pokeDetailInfoHP">${player_single.team[pokemonTeamNum].hp} HP</div>
            <div id="pokeDetailInfoStamina">${player_single.team[pokemonTeamNum].poke.stamina} Stamina</div>
        </div>
        <div id="pokeDetailAttacks">
            <div class="pokeDetailAttack" onclick="selectAttackSingle(${pokemonTeamNum},0)">
                <div class="pokeDetailAttackTxt"> <img src="./media/img/types/${player_single.team[pokemonTeamNum].moves[0].type}.png" alt=""> ${player_single.team[pokemonTeamNum].moves[0].name} <br> Pow: ${player_single.team[pokemonTeamNum].moves[0].power} Acc: ${player_single.team[pokemonTeamNum].moves[0].acc}</div>
            </div>
            <div class="pokeDetailAttack" onclick="selectAttackSingle(${pokemonTeamNum},1)">
                <div class="pokeDetailAttackTxt"><img src="./media/img/types/${player_single.team[pokemonTeamNum].moves[1].type}.png" alt=""> ${player_single.team[pokemonTeamNum].moves[1].name} <br> Pow: ${player_single.team[pokemonTeamNum].moves[1].power} Acc: ${player_single.team[pokemonTeamNum].moves[1].acc}</div>
            </div>
        </div>
        <div id="pokeDetailPerk">
            <div id="PokePerkArrowL" onclick="changePokePerkSingle(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id="PokePerkBox"><img src="./media/img/types/${player_single.team[pokemonTeamNum].perk.type}.png" alt=""><div id="pokePerkTxt">${player_single.team[pokemonTeamNum].perk.perk}</div></div>
            <div id="PokePerkArrowR" onclick="changePokePerkSingle(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
        </div>
    </div>
    <div id="savePoke" onclick="savePokeSingle(${pokemonTeamNum})">
        Save
    </div>
    `;
    } else {
        tempstring = `
    <div id="pokeDetailInfo">
        <div id="pokeDetailInfoImg" onclick="changePokeSingle(${pokemonTeamNum})">
            <img src="./media/img/pokémon/${player_single.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id="pokeDetailInfoLower">
            <div id="pokeDetailInfoName">${player_single.team[pokemonTeamNum].poke.name}</div>
            <div id="pokeDetailInfoType1">
                <img src="./media/img/types/${player_single.team[pokemonTeamNum].poke.type[0]}.png" alt="">
            </div>
            <div id="pokeDetailInfoHP">${player_single.team[pokemonTeamNum].hp} HP</div>
            <div id="pokeDetailInfoStamina">${player_single.team[pokemonTeamNum].poke.stamina} Stamina</div>
        </div>
        <div id="pokeDetailAttacks">
            <div class="pokeDetailAttack" onclick="selectAttackSingle(${pokemonTeamNum},0)">
                <div class="pokeDetailAttackTxt"> <img src="./media/img/types/${player_single.team[pokemonTeamNum].moves[0].type}.png" alt=""> ${player_single.team[pokemonTeamNum].moves[0].name} <br> Pow: ${player_single.team[pokemonTeamNum].moves[0].power} Acc: ${player_single.team[pokemonTeamNum].moves[0].acc}</div>
            </div>
            <div class="pokeDetailAttack" onclick="selectAttackSingle(${pokemonTeamNum},1)">
                <div class="pokeDetailAttackTxt"><img src="./media/img/types/${player_single.team[pokemonTeamNum].moves[1].type}.png" alt=""> ${player_single.team[pokemonTeamNum].moves[1].name} <br> Pow: ${player_single.team[pokemonTeamNum].moves[1].power} Acc: ${player_single.team[pokemonTeamNum].moves[1].acc}</div>
            </div>
        </div>
        <div id="pokeDetailPerk">
            <div id="PokePerkArrowL" onclick="changePokePerkSingle(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
            <div id="PokePerkBox"><img src="./media/img/types/${player_single.team[pokemonTeamNum].perk.type}.png" alt=""><div id="pokePerkTxt">${player_single.team[pokemonTeamNum].perk.perk}</div></div>
            <div id="PokePerkArrowR" onclick="changePokePerkSingle(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
        </div>
    </div>
    <div id="savePoke" onclick="savePokeSingle(${pokemonTeamNum})">
        Save
    </div>
    `;
    }
    document.getElementById("selectionDetail").style.display = "block";
    document.getElementById("selectionDetail").innerHTML = tempstring;
}

function changePokePerkSingle(pokemonTeamNum, num) {
    const pokemonTypes = player_single.team[pokemonTeamNum].poke.type;
    const filteredPerks = perks.pokemon_perks.filter(perk => pokemonTypes.includes(perk.type));
    let currentIndex = filteredPerks.indexOf(player_single.team[pokemonTeamNum].perk);
    if (currentIndex === -1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + num + filteredPerks.length) % filteredPerks.length;
    player_single.team[pokemonTeamNum].perk = filteredPerks[currentIndex];
    selectPokeSingle(pokemonTeamNum);
}

function savePokeSingle(pokemonTeamNum) {
    document.getElementById("selectionDetail").style.display = "none";
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPokeSingle(0)">
        <img src="./media/img/pokémon/${player_single.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPokeSingle(1)">
        <img src="./media/img/pokémon/${player_single.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPokeSingle(2)">
        <img src="./media/img/pokémon/${player_single.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`;
}

function changePokeSingle(pokemonTeamNum) {
    let tempstring = "";
    if (player_single.team[pokemonTeamNum].poke.type.length > 1) {
        tempstring = `
<div id="PokeOverallSelector">
    <div id="PokeOverArrowL" onclick="changePokeOverSingle(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    <div id="pokeDetailInfoSelector">
        <div id="pokeDetailInfoImgSelector">
            <img src="./media/img/pokémon/${player_single.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id="pokeDetailInfoLower">
            <div id="pokeDetailInfoName">${player_single.team[pokemonTeamNum].poke.name}</div>
            <div id="pokeDetailInfoType2">
                <img src="./media/img/types/${player_single.team[pokemonTeamNum].poke.type[0]}.png" alt="">
                <img src="./media/img/types/${player_single.team[pokemonTeamNum].poke.type[1]}.png" alt="">
            </div>
            <div id="pokeDetailInfoStats">
                <div id="pokeDetailInfoHP">${player_single.team[pokemonTeamNum].hp} HP</div>
                <div id="pokeDetailInfoStamina">${player_single.team[pokemonTeamNum].poke.stamina} Stamina</div>
                <div id="pokeDetailInfoMight">${player_single.team[pokemonTeamNum].poke.might} Might</div>
                <div id="pokeDetailInfoResistance">${player_single.team[pokemonTeamNum].poke.resistance} Resistance</div>
                <div id="pokeDetailInfoSpeed">${player_single.team[pokemonTeamNum].poke.speed} Speed</div>
            </div>
        </div>
    </div>
    <div id="PokeOverArrowR" onclick="changePokeOverSingle(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
</div>
<div id="savePoke" onclick="savePokeOverSingle(${pokemonTeamNum})"> Save </div>
        `;
    } else {
        tempstring = `
<div id="PokeOverallSelector">
    <div id="PokeOverArrowL" onclick="changePokeOverSingle(${pokemonTeamNum},-1)"> <img src="./media/img/pokearrow.png" alt=""></div>
    <div id="pokeDetailInfoSelector">
        <div id="pokeDetailInfoImgSelector">
            <img src="./media/img/pokémon/${player_single.team[pokemonTeamNum].poke.name.toLocaleLowerCase()}.png" alt="">
        </div>
        <div id="pokeDetailInfoLower">
            <div id="pokeDetailInfoName">${player_single.team[pokemonTeamNum].poke.name}</div>
            <div id="pokeDetailInfoType1">
                <img src="./media/img/types/${player_single.team[pokemonTeamNum].poke.type[0]}.png" alt="">
            </div>
            <div id="pokeDetailInfoStats">
                <div id="pokeDetailInfoHP">${player_single.team[pokemonTeamNum].hp} HP</div>
                <div id="pokeDetailInfoStamina">${player_single.team[pokemonTeamNum].poke.stamina} Stamina</div>
                <div id="pokeDetailInfoMight">${player_single.team[pokemonTeamNum].poke.might} Might</div>
                <div id="pokeDetailInfoResistance">${player_single.team[pokemonTeamNum].poke.resistance} Resistance</div>
                <div id="pokeDetailInfoSpeed">${player_single.team[pokemonTeamNum].poke.speed} Speed</div>
            </div>
        </div>
    </div>
    <div id="PokeOverArrowR" onclick="changePokeOverSingle(${pokemonTeamNum},1)"> <img src="./media/img/pokearrow.png" alt=""></div>
</div>
<div id="savePoke" onclick="savePokeOverSingle(${pokemonTeamNum})"> Save </div>
        `;
    }
    document.getElementById("selectionDetail").innerHTML = tempstring;
}

function changePokeOverSingle(pokemonTeamNum, num) {
    const pokemonList = pokémon.list;
    let currentIndex = pokemonList.indexOf(player_single.team[pokemonTeamNum].poke);
    if (currentIndex === -1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + num + pokemonList.length) % pokemonList.length;
    player_single.team[pokemonTeamNum].poke = pokemonList[currentIndex];
    player_single.team[pokemonTeamNum].hp = player_single.team[pokemonTeamNum].poke.hp;
    player_single.team[pokemonTeamNum].st = player_single.team[pokemonTeamNum].poke.stamina;
    player_single.team[pokemonTeamNum].might = player_single.team[pokemonTeamNum].poke.might;
    player_single.team[pokemonTeamNum].resistance = player_single.team[pokemonTeamNum].poke.resistance;
    player_single.team[pokemonTeamNum].speed = player_single.team[pokemonTeamNum].poke.speed;
    for (let i = 0; i < perks.pokemon_perks.length; i++) {
        if (perks.pokemon_perks[i].type == player_single.team[pokemonTeamNum].poke.type[0]) {
            player_single.team[pokemonTeamNum].perk = perks.pokemon_perks[i];
            break;
        }
    }
    player_single.team[pokemonTeamNum].moves = [];
    let movesselected = 0;
    for (let i = 0; i < attacks.moves.length; i++) {
        if (movesselected == 2) {
            break;
        }
        if (attacks.moves[i].type == player_single.team[pokemonTeamNum].poke.type[0] || attacks.moves[i].type == player_single.team[pokemonTeamNum].poke.type[1]) {
            player_single.team[pokemonTeamNum].moves.push(attacks.moves[i]);
            movesselected++;
        }
    }
    changePokeSingle(pokemonTeamNum);
}

function savePokeOverSingle(pokemonTeamNum) {
    selectPokeSingle(pokemonTeamNum);
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPokeSingle(0)">
        <img src="./media/img/pokémon/${player_single.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPokeSingle(1)">
        <img src="./media/img/pokémon/${player_single.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPokeSingle(2)">
        <img src="./media/img/pokémon/${player_single.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`;
}

function selectAttackSingle(pokemonTeamNum, attackNum) {
    const pokemonTypes = player_single.team[pokemonTeamNum].poke.type;
    const availableMoves = [];
    for (let i = 0; i < attacks.moves.length; i++) {
        const move = attacks.moves[i];
        if (pokemonTypes.includes(move.type)) {
            availableMoves.push(move);
        }
    }
    let moveListHTML = '';
    for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];
        moveListHTML += `
            <div class="moveItem" onclick="selectMoveSingle(${pokemonTeamNum}, ${i}, ${attackNum})">
                <div class="moveItemType"><img src="./media/img/types/${move.type}.png" alt=""></div>
                <div class="moveItemName">${move.name}</div>
            </div>
        `;
    }
    const selectedMove = player_single.team[pokemonTeamNum].moves[attackNum];
    const moveDetailsHTML = `
        <div class="moveDetails">
            <div class="moveDetailsName">${selectedMove.name}</div>
            <div class="moveDetailsType"><img src="./media/img/types/${selectedMove.type}.png" alt=""></div>
            <div class="moveDetailsPower">Power: ${selectedMove.power}</div>
            <div class="moveDetailsAccuracy">Accuracy: ${selectedMove.acc}</div>
            <div class="moveDetailsStamina">Stamina Cost: ${selectedMove.stamina_cost}</div>
            <div class="moveDetailsDescription">${selectedMove.description}</div>
        </div>
    `;
    const tempstring = `
        <div id="attackSelector">
            <div id="attackList">
                ${moveListHTML}
            </div>
            <div id="attackDetails">
                ${moveDetailsHTML}
            </div>
        </div>
        <div id="savePoke" onclick="selectPokeSingle(${pokemonTeamNum})">Save</div>
    `;
    document.getElementById("selectionDetail").style.display = "block";
    document.getElementById("selectionDetail").innerHTML = tempstring;
}

function selectMoveSingle(pokemonTeamNum, moveIndex, attackNum) {
    const pokemonTypes = player_single.team[pokemonTeamNum].poke.type;
    const availableMoves = [];
    for (let i = 0; i < attacks.moves.length; i++) {
        const move = attacks.moves[i];
        if (pokemonTypes.includes(move.type)) {
            availableMoves.push(move);
        }
    }
    player_single.team[pokemonTeamNum].moves[attackNum] = availableMoves[moveIndex];
    selectAttackSingle(pokemonTeamNum, attackNum);
}
function startEndlessBattle() {
    player_single.playerName = document.getElementById("playerSingleName").value
    if (player_single.playerName == "") {
        player_single.playerName = "Player"
    }
    document.getElementById("mute").style.display = "none";
    audio.lobbyMusic.pause()
    audio.battleMusic.play()
    audio.battleMusic.loop = true
    audio.battleMusic.volume = 0.4
    document.getElementById("forestBG").style.animation = "none"
    document.getElementById("forestBG").offsetHeight;
    document.getElementById("forestBG").style.animation = "moveUp 1s"
    setTimeout(function () {
        getRandomOpponentPokemon();
        loadBattleSiteEndless();
        document.getElementById("forestBG").style.display = "none"
    }, 900);
}
function getRandomOpponentPokemon() {
    const poke = pokémon.list[Math.floor(Math.random() * pokémon.list.length)];

    const possibleMoves = attacks.moves.filter(move =>
        poke.type.includes(move.type)
    );

    const shuffled = possibleMoves.sort(() => Math.random() - 0.5);
    const moves = shuffled.slice(0, 2);

    endlessOpponent = {
        poke: poke,
        hp: poke.hp,
        st: poke.stamina,
        might: poke.might,
        resistance: poke.resistance,
        speed: poke.speed,
        dodgedAttack: false,
        knockedOutOpponent: false,
        lastDamageDealt: 0,
        perkUsed: false,
        moves: moves.length > 0 ? moves : [attacks.moves[0], attacks.moves[1]]
    };
}
function loadBattleSiteEndless() {
    const battleContainer = document.getElementById("battleBG");
    battleContainer.style.display = "flex";
    battleContainer.style.flexDirection = "column";
    const topSection = `
        <div id="topSection">
   
            <div class="playerInfoBox" id="player1Info"> 
                <div class="playerTrainerBox" id="player1Trainer">
                <img src="./media/img/trainer/${player_single.trainer.type.toLocaleLowerCase()}.png" alt="${player_single.trainer.type}">
                </div>
                <div class="playerName">${player_single.playerName}</div>
                <div class="playerTeam">
                    ${player_single.team.map(pokemon => `
                        <img class="player1PokeImg" src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                    `).join('')}
                </div>
            </div>
            <div class="currentPokemonStats" id="player1CurrentStats">
                <div class="currentPokemonName">${player_single.team[0].poke.name}</div> <br>
                <div class="currentPokemonHP"> ${player_single.team[0].hp}/${player_single.team[0].poke.hp} HP</div> <br>
                <div class="currentPokemonStamina"> ${player_single.team[0].st}/${player_single.team[0].poke.stamina} ST</div> <br>
            </div>
            <div id="ingameButtons">
            <div id="battleMusicSwitch">
                <select id="musicSelector" onchange="switchBattleMusic(this.value)">
                    <option value="battleMusic">Elite 4 Theme</option>
                    <option value="battleMusic2">Team Aqua/Magma Team Leader</option>
                    <option value="battleMusic3">Gym Leader Battle</option>
                </select>
            </div>
            <div id="ingameBack" onclick="homescreen()">Back</div>
            <div id="score">Score : ${endlessScore} </div>
            </div>

            <div class="currentPokemonStats" id="player2CurrentStats">
                <div class="currentPokemonHP"> ${endlessOpponent.hp}/${endlessOpponent.poke.hp} HP</div> <br>
                <div class="currentPokemonStamina"> ${endlessOpponent.st}/${endlessOpponent.poke.stamina} ST</div> <br>
            </div>
            <div class="playerInfoBox" id="player2Info">
                <div class="playerName" style="padding-top: 10%" >Wild ${endlessOpponent.poke.name}</div>
                <div class="playerTeam">
                    <img class="player2PokeImg" src="./media/img/pokémon/${endlessOpponent.poke.name.toLocaleLowerCase()}.png" alt="${endlessOpponent.poke.name}">
                </div>
            </div>
        </div>
    `;
    const middleSection = `
        <div id="middleSection">
            <img id="player1PokeImg" class="currentPokemon" src="./media/img/pokémon/${player_single.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player1.team[0].poke.name}">
            <img id="player2PokeImg" class="currentPokemon" src="./media/img/pokémon/${endlessOpponent.poke.name.toLocaleLowerCase()}.png" alt="${endlessOpponent.poke.name}">
        </div>
    `;
    const bottomSection = `
        <div id="bottomSection">
            <div id="player1Controls">
            ${player_single.team[0].moves.map((move) => `
                <div class="actionButton" style="opacity: ${player_single.team[0].hp > 0 ? 1 : 0.5}; ${player_single.team[0].hp > 0 ? 'cursor: pointer;' : 'cursor: not-allowed;'}" ${player_single.team[0].hp > 0 ? `onclick='attackEndless(${JSON.stringify(move)})'` : ''}>
                    ${move.name}
                </div>
            `).join('')}
                <div class="actionButton" onclick="switchPokemonEndless()">Change Pokémon</div>
            </div>
            <div id="battleLog">
                <p>Battle log will appear here...</p>
            </div>
        </div>
    `;
    battleContainer.innerHTML = `
        ${topSection}
        ${middleSection}
        ${bottomSection}
    `;
}
function attackEndless(move) {
    move = typeof move === "string" ? JSON.parse(move) : move;

    if (player_single.team[0].st >= move.stamina_cost) {
        player_single.madeTurn = true;
        player_single.moveMade = move;
        TurnFinPlayerSingle();
    } else {
        alert("Not enough stamina!");
    }
}

function TurnFinPlayerSingle() {
    document.getElementById("player1Controls").innerHTML = `
        <div class="turnFin"> ${player_single.playerName} finished their Turn!</div>
    `;
    endlessOpponent.madeTurn = true;
    if (player_single.madeTurn && endlessOpponent.madeTurn) {
        executeTurnEndless();
    }
}

function switchPokemonEndless() {
    const selectorHTML = `
        <div id="pokemonSwitchSelector">
            ${player_single.team.map((pokemon, index) =>
        `<div class="pokeBox" style="opacity: ${pokemon.hp > 0 ? 1 : 0.5}; ${pokemon.hp > 0 ? 'cursor: pointer;' : 'cursor: not-allowed;'}" 
                    ${pokemon.hp > 0 ? `onclick="selectPokemonEndless(${index})"` : ''}>
                    <img src="./media/img/pokémon/${pokemon.poke.name.toLocaleLowerCase()}.png" alt="${pokemon.poke.name}">
                </div>`
    ).join('')}
        </div>
    `;

    const battleContainer = document.getElementById("battleBG");
    const selectorContainer = document.createElement("div");
    selectorContainer.id = "pokemonSwitchOverlay";
    selectorContainer.innerHTML = selectorHTML;
    battleContainer.appendChild(selectorContainer);
}

function selectPokemonEndless(selectedIndex) {
    player_single.selectedSwitch = selectedIndex;

    const selectorOverlay = document.getElementById("pokemonSwitchOverlay");
    if (selectorOverlay) {
        selectorOverlay.remove();
    }

    player_single.madeTurn = true;
    TurnFinPlayerSingle();
}

function executeTurnEndless() {
    applyPerk(player_single, "start");
    applyPokemonPerk(player_single, "start");

    setTimeout(function () {
        const playerSpeed = player_single.team[0].speed;
        const aiSpeed = endlessOpponent.speed;

        const first = playerSpeed >= aiSpeed ? "player" : "ai";
        const second = playerSpeed >= aiSpeed ? "ai" : "player";

        if (player_single.selectedSwitch == undefined) {
            setTimeout(function () {
                processActionEndless(first);
            }, 100);
            setTimeout(function () {
                if (getActive("ai").hp > 0 && getActive("player").hp > 0) {
                    processActionEndless(second);
                } else {
                    if (getActive("ai").hp <= 0) {
                        getActive("player").knockedOutOpponent = true;
                        getActive("player").kills++;
                        logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name} fainted!`);
                        document.getElementById("player2PokeImg").style.animation = "";
                        document.getElementById("player2PokeImg").offsetHeight;
                        document.getElementById("player2PokeImg").style.animation = "faint 0.5s forwards";
                        audio.faintSound.play();
                        endlessScore++;
                        setTimeout(() => {
                            getRandomOpponentPokemon();
                            loadBattleSiteEndless();
                        }, 1500);
                    }
                    if (getActive("player").hp <= 0) {
                        logPlayerAction(player_single, `${player_single.team[0].poke.name} fainted!`);
                        document.getElementById("player1PokeImg").style.animation = "";
                        document.getElementById("player1PokeImg").offsetHeight;
                        document.getElementById("player1PokeImg").style.animation = "faint 0.5s forwards";
                        audio.faintSound.play();
                        if (player_single.team.every(p => p.hp <= 0)) {
                            setTimeout(() => {
                                showEndlessGameOver();
                            }, 1500);
                        }
                    }
                }
            }, 1000);
        } else {
            setTimeout(function () {
                const selectedPokemon = player_single.team[player_single.selectedSwitch];
                player_single.team.unshift(player_single.team.splice(player_single.selectedSwitch, 1)[0]);
                player_single.selectedSwitch = undefined;
                logPlayerAction(player_single, `${player_single.playerName} switched to ${selectedPokemon.poke.name}.`);
                document.getElementById("player1PokeImg").style.animation = "";
                document.getElementById("player1PokeImg").offsetHeight;
                document.getElementById("player1PokeImg").style.animation = "fadeOut 0.5s forwards";
                setTimeout(() => {
                    loadBattleSiteEndless();
                    audio.switchSound.play();
                    document.getElementById("player1PokeImg").style.animation = "";
                    document.getElementById("player1PokeImg").offsetHeight;
                    document.getElementById("player1PokeImg").style.animation = "fadeIn 0.5s forwards";
                }, 500);
            }, 100);
        }

        player_single.madeTurn = false;
        endlessOpponent.madeTurn = false;

        player_single.team[0].st = Math.min(player_single.team[0].poke.stamina, player_single.team[0].st + Math.floor(player_single.team[0].poke.stamina * 0.05));
        endlessOpponent.st = Math.min(endlessOpponent.poke.stamina, endlessOpponent.st + Math.floor(endlessOpponent.poke.stamina * 0.05));

        applyPerk(player_single, "end");
        applyPokemonPerk(player_single, "end");

        setTimeout(function () {
            loadBattleSiteEndless();
        }, 2000);
    }, 500);
}

function processActionEndless(who) {
    if (who === "player") {
        if (player_single.moveMade) {
            processPlayerAttackEndless();
        }
    } else {
        processAIAttackEndless();
    }
}

function processPlayerAttackEndless() {
    const move = player_single.moveMade;
    player_single.team[0].st -= move.stamina_cost;

    if (endlessOpponent.dodgedAttack) {
        logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name} dodged the attack!`);
        endlessOpponent.dodgedAttack = false;
        return;
    }

    const accuracyRoll = Math.random() * 100;
    if (accuracyRoll <= move.acc) {
        document.getElementById("player1PokeImg").style.animation = "";
        document.getElementById("player1PokeImg").offsetHeight;
        document.getElementById("player1PokeImg").style.animation = "attack1 0.5s forwards";
        audio.attackSound.play();

        let effectiveness = 1;
        endlessOpponent.poke.type.forEach((type) => {
            if (move.double.includes(type)) effectiveness *= 2;
            else if (move.half.includes(type)) effectiveness *= 0.5;
            else if (move.zero.includes(type)) effectiveness = 0;
        });

        const rndmMultiplier = Math.random() * (1.2 - 0.8) + 0.8;
        const damage = Math.floor((10 * (move.power * (player_single.team[0].might / endlessOpponent.resistance)) / 50 + 2) * rndmMultiplier * effectiveness);
        endlessOpponent.hp = Math.max(0, endlessOpponent.hp - damage);
        player_single.team[0].lastDamageDealt += damage;

        if (effectiveness > 1) {
            logPlayerAction(player_single, `${move.name} was super effective! Wild ${endlessOpponent.poke.name} lost ${damage} HP.`);
        } else if (effectiveness < 1 && effectiveness > 0) {
            logPlayerAction(player_single, `${move.name} was not very effective. Wild ${endlessOpponent.poke.name} lost ${damage} HP.`);
        } else if (effectiveness === 0) {
            logPlayerAction(player_single, `${move.name} had no effect on Wild ${endlessOpponent.poke.name}.`);
        } else {
            logPlayerAction(player_single, `${move.name} hit! Wild ${endlessOpponent.poke.name} lost ${damage} HP.`);
        }
    } else {
        logPlayerAction(player_single, `${move.name} missed!`);
    }
    player_single.moveMade = undefined;
}

function processAIAttackEndless() {
    const availableMoves = endlessOpponent.moves.filter(m => endlessOpponent.st >= m.stamina_cost);

    let bestMoves = [];
    let maxEffectiveness = 1;
    let maxPower = 0;

    for (const move of availableMoves) {
        let effectiveness = 1;
        player_single.team[0].poke.type.forEach(type => {
            if (move.double.includes(type)) effectiveness *= 2;
            else if (move.half.includes(type)) effectiveness *= 0.5;
            else if (move.zero.includes(type)) effectiveness = 0;
        });
        if (effectiveness > maxEffectiveness) {
            maxEffectiveness = effectiveness;
            bestMoves = [move];
            maxPower = move.power;
        } else if (effectiveness === maxEffectiveness) {
            if (move.power > maxPower) {
                bestMoves = [move];
                maxPower = move.power;
            } else if (move.power === maxPower) {
                bestMoves.push(move);
            }
        }
    }

    let move;
    if (bestMoves.length > 0) {
        move = bestMoves[Math.floor(Math.random() * bestMoves.length)];
    } else if (availableMoves.length > 0) {
        move = availableMoves.reduce((a, b) => (a.power > b.power ? a : b));
    } else {
        move = endlessOpponent.moves[0];
    }
    if (endlessOpponent.st < move.stamina_cost) {
        logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name} tried to use ${move.name}, but didn't have enough stamina!`);
    }else{
        endlessOpponent.st -= move.stamina_cost;
        if (player_single.team[0].dodgedAttack) {
        logPlayerAction(player_single, `${player_single.team[0].poke.name} dodged the attack!`);
        player_single.team[0].dodgedAttack = false;
        return;
    }

    const accuracyRoll = Math.random() * 100;
    if (accuracyRoll <= move.acc) {
        document.getElementById("player2PokeImg").style.animation = "";
        document.getElementById("player2PokeImg").offsetHeight;
        document.getElementById("player2PokeImg").style.animation = "attack2 0.5s forwards";
        audio.attackSound.play();

        let effectiveness = 1;
        player_single.team[0].poke.type.forEach((type) => {
            if (move.double.includes(type)) effectiveness *= 2;
            else if (move.half.includes(type)) effectiveness *= 0.5;
            else if (move.zero.includes(type)) effectiveness = 0;
        });

        const rndmMultiplier = Math.random() * (1.2 - 0.8) + 0.8;
        const damage = Math.floor((10 * (move.power * (endlessOpponent.might / player_single.team[0].resistance)) / 50 + 2) * rndmMultiplier * effectiveness);
        player_single.team[0].hp = Math.max(0, player_single.team[0].hp - damage);

        if (effectiveness > 1) {
            logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name}'s ${move.name} was super effective! ${player_single.team[0].poke.name} lost ${damage} HP.`);
        } else if (effectiveness < 1 && effectiveness > 0) {
            logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name}'s ${move.name} was not very effective. ${player_single.team[0].poke.name} lost ${damage} HP.`);
        } else if (effectiveness === 0) {
            logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name}'s ${move.name} had no effect on ${player_single.team[0].poke.name}.`);
        } else {
            logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name}'s ${move.name} hit! ${player_single.team[0].poke.name} lost ${damage} HP.`);
        }
    } else {
        logPlayerAction(player_single, `Wild ${endlessOpponent.poke.name}'s ${move.name} missed!`);
    }
    }
   


}

function getActive(who) {
    if (who === "player") return player_single.team[0];
    if (who === "ai") return endlessOpponent;
}

function showEndlessGameOver() {
    saveEndlessScoreToLeaderboard();
    audio.battleMusic.pause();
    audio.battleMusic2.pause();
    audio.battleMusic3.pause();
    audio.victoryMusic.play();
    audio.victoryMusic.loop = true;
    audio.victoryMusic.volume = 0.4;

    document.body.innerHTML = `
        <div id="endScreen">
            <div id="endScreenContent">
                <h1>Game Over</h1>
                <p>Your Score: ${endlessScore}</p>
                <div id="restartButton" onclick="location.reload()">Restart</div>
            </div>
        </div>
    `;
}
function saveEndlessScoreToLeaderboard() {
    let ace = player_single.team[0];
    for (const poke of player_single.team) {
        if ((poke.kills || 0) > (ace.kills || 0)) ace = poke;
    }

    const entry = {
        name: player_single.playerName,
        score: endlessScore,
        ace: ace.poke.name,
        kills: ace.kills || 0,
        date: new Date().toLocaleString()
    };

    let leaderboard = JSON.parse(localStorage.getItem("endlessLeaderboard") || "[]");
    leaderboard.push(entry);

    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);

    localStorage.setItem("endlessLeaderboard", JSON.stringify(leaderboard));
}
function Leaderboard_endless() {
    let leaderboard = JSON.parse(localStorage.getItem("endlessLeaderboard") || "[]");

   let leaderboardHTML = `
    <div id="leaderboardOverlay" style="animation: fadeInVictory 0.5s;">
        <div id="leaderboardSelector">
            <h2 style="color: var(--secondColor); margin-bottom: 24px;">Endless Mode Leaderboard</h2>
            <div id="leaderboardList">
                ${leaderboard.length === 0 ? "<p>No entries yet!</p>" : leaderboard.map((entry, i) => `
                    <div class="leaderboardEntry">
                        <div class="leaderboardRowMain">
                            <span class="leaderboardRank">${i + 1}.</span>
                            <span class="leaderboardName">${entry.name}</span>
                            <span class="leaderboardScore">Score: ${entry.score}</span>
                            <span class="leaderboardAce">
                                <img src="./media/img/pokémon/${entry.ace.toLowerCase()}.png" alt="${entry.ace}" class="leaderboardAceImg">
                                <span>${entry.ace} (${entry.kills} KOs)</span>
                            </span>
                        </div>
                        <div class="leaderboardRowSub">
                            <span class="leaderboardDate">${entry.date}</span>
                        </div>
                    </div>
                `).join("")}
            </div>
            <div class="actionButton" style="margin-top: 24px;" onclick="closeLeaderboardEndless()">Close</div>
        </div>
    </div>
`;

    const overlay = document.createElement("div");
    overlay.innerHTML = leaderboardHTML;
    overlay.id = "leaderboardOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0,0,0,0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "10000";
    overlay.style.animation = "fadeInVictory 0.5s";

    document.body.appendChild(overlay);
}

function closeLeaderboardEndless() {
    const overlay = document.getElementById("leaderboardOverlay");
    if (overlay) {
        overlay.style.animation = "fadeOut 0.5s";
        setTimeout(() => overlay.remove(), 500);
    }
}