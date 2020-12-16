var count = null; //  flag for current song

var songs = ['track1','track2','track3','track4'];// array with names of songs

window.onload = function(){

    var mp3 = document.getElementById("mp3"); //reference to the audio

    document.querySelector(`.next`).onclick = next; // reference to the buttons
    document.querySelector(`.stop`).onclick = stop;
    document.querySelector(`.play`).onclick = play;
    document.querySelector(`.prev`).onclick = prev;

//adding list of songs names
    var ul = document.getElementById("ul");

    for(var i = 0; i < songs.length; i++){
        var li = document.createElement("li");
        li.innerHTML = songs[i];
        ul.appendChild(li);
    }
}
// define the current song, adding active class which change the background color in a
    function changeColor(){

        var color = document.getElementsByTagName('li');

        for(var x=0; x < songs.length; x++){
            if(count == x){
                color[x].classList.add("active");
            }else{
                color[x].classList.remove("active");
            }
        }

    }

function next(){
    if(count < songs.length-1){
        count++;
        play();
    }
}
function prev(){
    if(count > 0){
        count--;
        play();
    }
}
function play(){
        changeColor();
        mp3.src = "audio/"+songs[count]+".mp3";      
}
function stop(){
    mp3.pause();
}