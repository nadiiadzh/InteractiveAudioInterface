var count = null; 

var songs = ['track1','track2','track3','track4'];

window.onload = function(){

    var mp3 = document.getElementById("mp3"); 

    document.querySelector(`.next`).onclick = next; 
    document.querySelector(`.stop`).onclick = stop;
    document.querySelector(`.play`).onclick = play;
    document.querySelector(`.prev`).onclick = prev;


    var ul = document.getElementById("ul");

    for(var i = 0; i < songs.length; i++){
        var li = document.createElement("li");
        li.innerHTML = songs[i];
        ul.appendChild(li);
    }
}

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

  