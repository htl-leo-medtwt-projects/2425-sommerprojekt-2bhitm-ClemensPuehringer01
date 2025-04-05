let audio = {
    musicOn: false,
    lobbyMusic: new Audio('media/sound/lobby.mp3')
}
let player1 = {
    playerName: "Player 1",
    team:[
        {
            poke: pokémon.list[4],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[4].hp,
            moves: [
                attacks.moves[0],
                attacks.special_moves[1],
            ]
            },
        {
            poke: pokémon.list[7],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[7].hp,
            moves: [
                attacks.moves[3],
                attacks.special_moves[1],
            ]
            },
        {
            poke: pokémon.list[26],
            perk: perks.pokemon_perks[0],
            hp: pokémon.list[26].hp,
            moves: [
                attacks.moves[0],
                attacks.moves[2]
            ]
            }
    ],
    trainer: trainer.trainers[0]
}
let player2 = {
    team:[
        {
            poke: pokémon.list[5],
            perk: perks.pokemon_perks[0],
            moves: [
                attacks.moves[0],
                attacks.special_moves[1],
            ]
            },
        {
            poke: pokémon.list[8],
            perk: perks.pokemon_perks[0],
            moves: [
                attacks.moves[3],
                attacks.special_moves[1],
            ]
            },
        {
            poke: pokémon.list[27],
            perk: perks.pokemon_perks[0],
            moves: [
                attacks.moves[0],
                attacks.moves[2]
            ]
            }
    ],
    trainer: trainer.trainers[0]
}
audio.lobbyMusic.loop = true;
function mute(){
    audio.lobbyMusic.currentTime = 0;
    if(!audio.musicOn){
        document.getElementById("mute").innerHTML='<img src="./media/img/muteOff.png" alt="">'
        audio.musicOn = true;
        audio.lobbyMusic.play();
    }else{
        document.getElementById("mute").innerHTML='<img src="./media/img/muteOn.png" alt="">'
        audio.musicOn = false;
        audio.lobbyMusic.pause();
    }
}
function multiplayer(){
    //animation to multiplayer.
    document.getElementById("homeBttns").style.animation= "none"
    document.getElementById("homeBttns").offsetHeight;
    document.getElementById("homeBttns").style.animation= "moveUp 1s"
    document.getElementById("logo").style.animation= "none"
    document.getElementById("logo").offsetHeight;
    document.getElementById("logo").style.animation= "moveUp 1s"
    setTimeout(function(){
    document.getElementById("forestBG").innerHTML = ""
    loadSelectorP1();
    }, 900);

}
function loadSelectorP1(){
        document.getElementById("forestBG").innerHTML = `
    <div id = "selectionScreen">
        <div id = "headPlayerSelection">
            Player 1 <br>
            Choose your Team
        </div>
        <div id = "pokeSelectorMini">
            <div class="pokeBox" onclick="selectPoke(0)">
                <img src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
            <div class="pokeBox" onclick="selectPoke(1)">
                <img src="./media/img/pokémon/${player1.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
            <div class="pokeBox" onclick="selectPoke(2)">
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
   
        setTimeout(function(){
        document.getElementById("selectionScreen").style.display = "block"
        document.getElementById("selectionScreen").style.animation= "none"
        document.getElementById("selectionScreen").offsetHeight;
        document.getElementById("selectionScreen").style.animation= "movein 1s"
        }, 100);

}
function homescreen(){
    location.reload();
}
function selectTrainer1(){

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
function changeTrainer1(num){
    if(player1.trainer == trainer.trainers[0] && num == -1){
        player1.trainer = trainer.trainers[17]
    }else if(player1.trainer == trainer.trainers[17] && num == 1){
        player1.trainer = trainer.trainers[0]
    }else{
        player1.trainer = trainer.trainers[trainer.trainers.indexOf(player1.trainer)+num]
    }
    selectTrainer1();
}
function saveTrainer1(){
    player1.trainer = trainer.trainers[trainer.trainers.indexOf(player1.trainer)]
    document.getElementById("selectionDetail").style.display = "none"
    document.getElementById("trainerSelector").innerHTML = `<img src="./media/img/trainer/${player1.trainer.type}.png" alt="">`
}

function selectPoke(pokemonTeamNum){
    let tempstring = ""
    //A function to open the detail selector and choose the pokemon
    if(player1.team[pokemonTeamNum].poke.type.length>1){
        tempstring = `
    <div id = "pokeDetailInfo">
        <div id = "pokeDetailInfoImg" onclick="changePoke(${pokemonTeamNum})">
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
    }else{
        tempstring = `
    <div id = "pokeDetailInfo">
        <div id = "pokeDetailInfoImg" onclick="changePoke(${pokemonTeamNum})">
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
    selectPoke(pokemonTeamNum);
}
function savePoke1(pokemonTeamNum){
    document.getElementById("selectionDetail").style.display = "none"
    document.getElementById("pokeSelectorMini").innerHTML = `
    <div class="pokeBox" onclick="selectPoke(0)">
        <img src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke(1)">
        <img src="./media/img/pokémon/${player1.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>
    <div class="pokeBox" onclick="selectPoke(2)">
        <img src="./media/img/pokémon/${player1.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
    </div>`
}