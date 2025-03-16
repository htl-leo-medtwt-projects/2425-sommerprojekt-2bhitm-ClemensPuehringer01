let audio = {
    musicOn: false,
    lobbyMusic: new Audio('media/sound/lobby.mp3')
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
    }, 900);
}