//Einige der Verwendeten funktionen(.map; .join; .unshift etc.) wurden durch KI, Internetseiten und Tutorials herausgefunden und für einen bessern Code verwendet, die Logik wurde immer noch von mir selbst kreiert.
let audio = {
    musicOn: false,
    lobbyMusic: new Audio('media/sound/lobby.mp3'),
    battleMusic: new Audio('media/sound/battle03.mp3'),
    battleMusic2: new Audio('media/sound/battle02.mp3'),
    battleMusic3: new Audio('media/sound/battle01.mp3')
}
let player1 = {
    playerName: "Player 1",
    team: [
        {
            poke: pokémon.list[4],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[4].hp,
            st: pokémon.list[4].stamina,
            moves: [
                attacks.moves[0],
                attacks.special_moves[1],
            ]
        },
        {
            poke: pokémon.list[7],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[7].hp,
            st: pokémon.list[7].stamina,
            moves: [
                attacks.moves[3],
                attacks.special_moves[1],
            ]
        },
        {
            poke: pokémon.list[26],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[26].hp,
            st: pokémon.list[26].stamina,
            moves: [
                attacks.moves[0],
                attacks.moves[2]
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
            poke: pokémon.list[4],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[4].hp,
            st: pokémon.list[4].stamina,
            moves: [
                attacks.moves[0],
                attacks.special_moves[1],
            ]
        },
        {
            poke: pokémon.list[7],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[7].hp,
            st: pokémon.list[7].stamina,
            moves: [
                attacks.moves[3],
                attacks.special_moves[1],
            ]
        },
        {
            poke: pokémon.list[26],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[26].hp,
            st: pokémon.list[26].stamina,
            moves: [
                attacks.moves[0],
                attacks.moves[2]
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
    for (let i = 0; i < attacks.special_moves.length; i++) {
        const specialMove = attacks.special_moves[i];
        if (specialMove.exclusive_to.includes(player1.team[pokemonTeamNum].poke.name.toLocaleLowerCase())) {
            availableMoves.push(specialMove);
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
    for (let i = 0; i < attacks.special_moves.length; i++) {
        const specialMove = attacks.special_moves[i];
        if (specialMove.exclusive_to.includes(player1.team[pokemonTeamNum].poke.name.toLocaleLowerCase())) {
            availableMoves.push(specialMove);
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
    if(player1.playerName == ""){
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
    for (let i = 0; i < attacks.special_moves.length; i++) {
        const specialMove = attacks.special_moves[i];
        if (specialMove.exclusive_to.includes(player2.team[pokemonTeamNum].poke.name.toLocaleLowerCase())) {
            availableMoves.push(specialMove);
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
    for (let i = 0; i < attacks.special_moves.length; i++) {
        const specialMove = attacks.special_moves[i];
        if (specialMove.exclusive_to.includes(player2.team[pokemonTeamNum].poke.name.toLocaleLowerCase())) {
            availableMoves.push(specialMove);
        }
    }
    player2.team[pokemonTeamNum].moves[attackNum] = availableMoves[moveIndex];
    selectAttack2(pokemonTeamNum, attackNum);
}
function battleMPStart() {
    player2.playerName = document.getElementById("player2Name").value
    if(player2.playerName == ""){
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
            <img class="currentPokemon" src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player2.team[0].poke.name}">
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

function TurnFinPlayer1(){
    document.getElementById("player1Controls").innerHTML = `
    <div class="turnFin"> ${player1.playerName} finished their Turn!</div>
    `
    if(player1.madeTurn && player2.madeTurn){
        executeTurn();
    }
}

function TurnFinPlayer2(){
    document.getElementById("player2Controls").innerHTML = `
    <div class="turnFin"> ${player2.playerName} finished their Turn!</div>
    `
    if(player1.madeTurn && player2.madeTurn){
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

function executeTurn() {
    setTimeout(function () {

        const player1Speed = player1.team[0].poke.speed;
        const player2Speed = player2.team[0].poke.speed;

        const firstPlayer = player1Speed >= player2Speed ? player1 : player2;
        const secondPlayer = player1Speed >= player2Speed ? player2 : player1;

        if (player1.selectedSwitch == undefined && player2.selectedSwitch == undefined) {
            processPlayerAction(firstPlayer, secondPlayer);
            processPlayerAction(secondPlayer, firstPlayer);
        }

        if (player1.selectedSwitch !== undefined && player2.selectedSwitch !== undefined) {
            const selectedPokemon = player1.team[player1.selectedSwitch];
            player1.team.unshift(player1.team.splice(player1.selectedSwitch, 1)[0]);
            console.log(`Player 1 switched to ${selectedPokemon.poke.name}.`);
            player1.selectedSwitch = undefined;
            logPlayer1Action(`${player1.playerName} switched to ${selectedPokemon.poke.name}.`);

            const selectedPokemon2 = player2.team[player2.selectedSwitch];
            player2.team.unshift(player2.team.splice(player2.selectedSwitch, 1)[0]);
            console.log(`Player 2 switched to ${selectedPokemon2.poke.name}.`);
            player2.selectedSwitch = undefined;
            logPlayer2Action(`${player2.playerName} switched to ${selectedPokemon2.poke.name}.`)
        }

        if (player1.selectedSwitch !== undefined && player2.selectedSwitch == undefined) {
            const selectedPokemon = player1.team[player1.selectedSwitch];
            player1.team.unshift(player1.team.splice(player1.selectedSwitch, 1)[0]);
            console.log(`Player 1 switched to ${selectedPokemon.poke.name}.`);
            player1.selectedSwitch = undefined;
            logPlayer1Action(`${player1.playerName} switched to ${selectedPokemon.poke.name}.`);

            processPlayerAction(player2, player1);
        }

        if (player1.selectedSwitch == undefined && player2.selectedSwitch !== undefined) {
            const selectedPokemon = player2.team[player2.selectedSwitch];
            player2.team.unshift(player2.team.splice(player2.selectedSwitch, 1)[0]);
            console.log(`Player 2 switched to ${selectedPokemon.poke.name}.`);
            player2.selectedSwitch = undefined;
            logPlayer1Action(`${player2.playerName} switched to ${selectedPokemon.poke.name}.`);

            processPlayerAction(player1, player2);
        }

        if (player1.team[0].hp <= 0) {
            logPlayer1Action(`${player1.team[0].poke.name} fainted!`);
        } 
        if (player2.team[0].hp <= 0) {
            logPlayer2Action(`${player2.team[0].poke.name} fainted!`);
        }

        player1.madeTurn = false;
        player2.madeTurn = false;

        player1.team[0].st = Math.min(player1.team[0].poke.stamina, player1.team[0].st + Math.floor(player1.team[0].poke.stamina * 0.05));
        player2.team[0].st = Math.min(player2.team[0].poke.stamina, player2.team[0].st + Math.floor(player2.team[0].poke.stamina * 0.05));

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
            <img class="currentPokemon" src="./media/img/pokémon/${player2.team[0].poke.name.toLocaleLowerCase()}.png" alt="${player2.team[0].poke.name}">
        
        `
        setTimeout(function () {
            loadBattleSite();
        }, 5000);
    }, 500);
}

function processPlayerAction(attacker, defender) {
    const accuracyRoll = Math.random() * 100;
    const move = attacker.moveMade;
    attacker.team[0].st -= move.stamina_cost;

    if (accuracyRoll <= move.acc) {

        const damage = Math.floor(10*(move.power * (attacker.team[0].poke.might / defender.team[0].poke.resistance)) / 50) + 2;
        defender.team[0].hp = Math.max(0, defender.team[0].hp - damage);


        if (attacker === player1) {
            logPlayer1Action(`${move.name} hit! ${defender.team[0].poke.name} lost ${damage} HP.`);
        } else {
            logPlayer2Action(`${move.name} hit! ${defender.team[0].poke.name} lost ${damage} HP.`);
        }
    } else {

        if (attacker === player1) {
            logPlayer1Action(`${move.name} missed!`);
        } else {
            logPlayer2Action(`${move.name} missed!`);
        }
    }
}