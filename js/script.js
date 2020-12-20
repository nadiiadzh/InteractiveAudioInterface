let count = 0; //  flag for current song
let playingSong = false;

let songs = ['track1','track2','track3','track4'];// array with names of songs


window.onload = function(){

    var mp3 = document.getElementById("mp3"); //reference to the audio

//adding event listener to the buttons 

    let playBtn = document.querySelector(`.play`)
    playBtn.addEventListener('click', play)
  
    let pauseBtn = document.querySelector(`.stop`)
    pauseBtn.addEventListener('click', stop)

    let nextBtn = document.querySelector(`.next`)
    nextBtn.addEventListener('click', next)
  
    let prevBtn = document.querySelector(`.prev`)
    prevBtn.addEventListener('click', prev)

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
    }else{
        count = 0;
        count--;
    }
}

function prev(){
    if(count > 0){
        count--;
        play();
    }
}

function justplay(){
    if(playingSong == false){
        play();
    }else{
        stop();
    }

}

function play(){
        changeColor();
        mp3.src = "audio/"+songs[count]+".mp3";      
}

function stop(){
    mp3.pause();
}
