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
            moves: [
                attacks.moves[0],
                attacks.special_moves[1],
            ]
            },
        {
            poke: pokémon.list[7],
            perk: perks.pokemon_perks[0],
            moves: [
                attacks.moves[3],
                attacks.special_moves[1],
            ]
            },
        {
            poke: pokémon.list[26],
            perk: perks.pokemon_perks[0],
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
    document.getElementById("mute").style.animation= "none"
    document.getElementById("mute").offsetHeight;
    document.getElementById("mute").style.animation= "moveUp 1s"
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
            <div class="pokeBox" onclick="selectPoke(${player1.team[0].poke.name.toLocaleLowerCase()})">
                <img src="./media/img/pokémon/${player1.team[0].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
            <div class="pokeBox" onclick="selectPoke(${player1.team[1].poke.name.toLocaleLowerCase()})">
                <img src="./media/img/pokémon/${player1.team[1].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
            <div class="pokeBox" onclick="selectPoke(${player1.team[2].poke.name.toLocaleLowerCase()})">
                <img src="./media/img/pokémon/${player1.team[2].poke.name.toLocaleLowerCase()}.png" alt="">
            </div>
        </div>
        <div id = "back" onclick="homescreen()">
            Back
        </div>
        <div id = "trainerSelector" onclick="selectTrainer(${player1.trainer.type.toLocaleLowerCase()})">
            <img src="./media/img/trainer/${player1.trainer.type.toLocaleLowerCase()}.png" alt="">
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