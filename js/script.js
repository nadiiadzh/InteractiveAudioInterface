let count = 0; //  flag for current song
let playingSong = false;

// array of objects with songs
let songs = [
    {
        name: 'track 1',
        path: 'audio/track1.mp3',
        img:   'img/img1.jpg',
        singer: 'First singer'
    },
    {
        name: 'track 2',
        path: 'audio/track2.mp3',
        img:   'img/img2.jpg',
        singer: 'Second singer'
    },
    {
        name: 'track 3',
        path: 'audio/track3.mp3',
        img:   'img/img3.jpg',
        singer: 'Third singer'
    },
    {
        name: 'track 4',
        path: 'audio/track4.mp3',
        img:   'img/img4.jpg',
        singer: 'Fourth singer'
    }
];


window.onload = function(){

   var mp3 = document.getElementById("mp3"); //reference to the audio
 
//adding event listener to the buttons 

    let playBtn = document.querySelector(`.play`)
    playBtn.addEventListener('click', justplay)
  
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
        li.innerHTML = songs[i].name;
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

function loadTrack(){

    mp3.src = songs[count].path;
    mp3.load();

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
    mp3.play();
    playingSong = true;      
}

function next(){
    if(count < songs.length-1){
        count++;
        loadTrack(count);
        play();
    }else{
        count = 0;
        count--;
        loadTrack(count);
        play();
    }
}

function prev(){
    if(count > 0){
        count--;
        loadTrack(count);
        play()
    }else{
        count = songs.length;

        loadTrack(count);
        play()
    }
}

function stop(){
    mp3.pause();
    playingSong = false;
}

