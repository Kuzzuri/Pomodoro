const switchBtn = document.getElementById("switch");
const body = document.getElementById("body");
const switchText = document.getElementById("switchText")
const container1 = document.getElementById("container1")
const shuffleBtn = document.getElementById("shuffleButton");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause")
const time = document.getElementById("time")
const progressBar = document.getElementById("progressBar");
const musicPlayer = document.getElementById("musicPlayer");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");
const btn6 = document.getElementById("button6");
const btn7 = document.getElementById("button7");
const btn8 = document.getElementById("button8");
const pauseButton = document.getElementById("pauseBtn");
const forwardButton = document.getElementById("forwardBtn");
const backwardButton = document.getElementById("backwardBtn");
let pID = document.getElementById("p1")
let song = document.createElement("audio");
song.src = "musics/song1.mp3"
let p1 = document.createElement("img");
p1.src = "images/p1.jpg"
let song2 = document.createElement("audio");
song2.src = "musics/song2.mp3"
let p2 = document.createElement("img");
p2.src = "images/p1.jpg"
let song3 = document.createElement("audio");
song3.src = "musics/song3.mp3"
let song4 = document.createElement("audio");
song4.src = "musics/song4.mp3"
let song5 = document.createElement("audio");
song5.src = "musics/song5.mp3"
let song6 = document.createElement("audio");
song6.src = "musics/song6.mp3"
let song7 = document.createElement("audio");
song7.src = "musics/song7.mp3"
let songName = document.getElementById("songName");
let musicPlayerText = document.getElementById("musicPlayerText");
let musicPlayerTextTwo = document.getElementById("musicPlayerTextTwo");
let sessionText = document.getElementById("sessionText")
let timeContainer = document.getElementById("timeContainer");
let selection = document.getElementById("selection");
let timeInSeconds = 1500;
let timeAdjuster = 2;


//Ambiant moda geçmek için fonksiyon
switchBtn.onclick = () =>{
    if(!switchBtn.classList.contains("swipeLeft")){
        switchBtn.classList.add("swipeLeft");
        switchBtn.classList.remove("swipeRight");
        container1.classList.remove("placeholder");
        container1.classList.add("shire");
        shuffleBtn.style.visibility = "visible";
        body.style.color = "whitesmoke"
        switchText.textContent = "Switch to normal mode";
        timeContainer.style.backgroundColor = "hsla(0, 0%, 0%, 0.315)";
        startBtn.style.color = "rgb(208, 208, 208)";
        pauseBtn.style.color = "rgb(208, 208, 208)";
        resetBtn.style.color = "rgb(208, 208, 208)";
    }
    else if(switchBtn.classList.contains("swipeLeft")){
        switchBtn.classList.add("swipeRight");
        switchBtn.classList.remove("swipeLeft");
        container1.classList.remove("shire");
        container1.classList.remove("japan");
        container1.classList.remove("twoam");
        container1.classList.remove("hogwarts");
        container1.classList.remove("rivendell");
        container1.classList.remove("valhalla");
        container1.classList.remove("elden");
        container1.classList.remove("cabin");
        container1.classList.add("placeholder");
        shuffleBtn.style.visibility = "hidden"
        body.style.color = "black"
        switchText.textContent = "Switch to ambient mode";
        timeContainer.style.backgroundColor = "hsla(195, 9%, 83%, 0.315)";
        startBtn.style.color = "white";
        pauseBtn.style.color = "white";
        resetBtn.style.color = "white";
    }
}

//Timer başlatma fonskiyonu
startBtn.addEventListener("click", () => {
    if(timeInSeconds == 0){
    }
    else{
        if(time.classList.contains("active")){
        }
        else if(!time.classList.contains("active")){
            timeStarter();
            time.classList.remove("baban");
            time.classList.add("active");
        }
    }
})
//timer durdurma fonskiyonu
pauseBtn.addEventListener("click", () =>{
    if(time.classList.contains("active")){
        time.classList.add("baban");
        time.classList.remove("active");
        console.log("amk");
    }
    else{
        console.log("bmk1");
    }
})
//timer resetleme fonksiyonu
resetBtn.addEventListener("click", () => {
    if(timeInSeconds == 0){
        time.classList.remove("active");
        time.textContent = `25:00`;
    }
    else{
        if(time.classList.contains("active")){
            time.classList.add("annen");
            time.classList.remove("active");
        }
        else if(!time.classList.contains("active")){
            time.textContent = `25:00`;
            time.classList.add("annen");
            time.classList.remove("active");
        }
    }
    timeInSeconds = 1500;
    if(!(timeAdjuster % 2 == 0)){
        console.log("hey")
        timeAdjuster++;
        time.classList.add("baban");
        time.classList.remove("annen");
        time.textContent = "25:00"
        timeInSeconds = 1501;
    }
    else if(timeAdjuster % 2 == 0){
        timeAdjuster = 2;
    }
})

const timeStarter = function(){
    if(time.classList.contains("annen")){
        timeInSeconds = 1500;
        let nameInterval = setInterval(() => {
            timeInSeconds--;
            let minute = Math.floor(timeInSeconds / 60);
            let second = timeInSeconds % 60;
            if(second >= 10){
                if(minute >= 10){
                    time.textContent = `${minute}:${second}`;
                }
                else{
                    time.textContent = `0${minute}:${second}`;
                }
            }
            else{
                if(minute >= 10){
                    time.textContent = `${minute}:0${second}`;
                }
                else{
                    time.textContent = `0${minute}:0${second}`;
                }
            }
            if(time.classList.contains("annen")){
                clearInterval(nameInterval);
                time.textContent = `25:00`;
            }
            else if(time.classList.contains("baban")){
                clearInterval(nameInterval);
                timeInSeconds += 1;
                let minute = Math.floor(timeInSeconds / 60);
                let second = (timeInSeconds) % 60;
                if(second >= 10){
                    if(minute >= 10){
                        time.textContent = `${minute}:${second}`;
                    }
                    else{
                        time.textContent = `0${minute}:${second}`;
                    }
                }
                else{
                    if(minute >= 10){
                        time.textContent = `${minute}:0${second}`;
                    }
                    else{
                        time.textContent = `0${minute}:0${second}`;
                    }
                }
            }
        if(timeInSeconds == 0){
            clearInterval(nameInterval);
        }
        }, 1000)
        time.classList.remove("annen");
    }
    else{
        let nameInterval = setInterval(() => {
            timeInSeconds--;
            let minute = Math.floor(timeInSeconds / 60);
            let second = timeInSeconds % 60;
            if(second >= 10){
                if(minute >= 10){
                    time.textContent = `${minute}:${second}`;
                }
                else{
                    time.textContent = `0${minute}:${second}`;
                }
            }
            else{
                if(minute >= 10){
                    time.textContent = `${minute}:0${second}`;
                }
                else{
                    time.textContent = `0${minute}:0${second}`;
                }
            }
            if(time.classList.contains("annen")){
                clearInterval(nameInterval);
                time.textContent = `25:00`;
            }
            else if(time.classList.contains("baban")){
                clearInterval(nameInterval);
                timeInSeconds += 1;
                let minute = Math.floor(timeInSeconds / 60);
                let second = (timeInSeconds) % 60;
                if(second >= 10){
                    if(minute >= 10){
                        time.textContent = `${minute}:${second}`;
                    }
                    else{
                        time.textContent = `0${minute}:${second}`;
                    }
                }
                else{
                    if(minute >= 10){
                        time.textContent = `${minute}:0${second}`;
                    }
                    else{
                        time.textContent = `0${minute}:0${second}`;
                    }
                }
            }
            if(timeInSeconds == 0){
                clearInterval(nameInterval);
            }
        }, 1000)
        time.classList.remove("annen")
    }
    }

setInterval(()=>{
    if(timeInSeconds == 0){
        breakTimer();
    }
} , 1000)
setInterval(()=>{
    if(timeAdjuster % 2 != 0){
        sessionText.classList.remove("studySession");
        sessionText.textContent = "Break Time";
        sessionText.classList.add("breakTime");
    }
    else if(timeAdjuster % 2 == 0){
        sessionText.textContent = "Study Session";
        sessionText.classList.remove("breakTime");
        sessionText.classList.add("studySession");
    }
}, 1000)

let breakTimer = () => {
    timeAdjuster++;
    if(timeAdjuster % 2 != 0){
        time.textContent = `05:00`;
        timeInSeconds = 300;
        let breakInterval = setInterval(() => {
            timeInSeconds--;
            let minute = Math.floor(timeInSeconds / 60);
            let second = (timeInSeconds) % 60;
            if(second >= 10){
                if(minute >= 10){
                    time.textContent = `${minute}:${second}`;
                }
                else{
                    time.textContent = `0${minute}:${second}`;
                }
            }
            else{
                if(minute >= 10){
                    time.textContent = `${minute}:0${second}`;
                }
                else{
                    time.textContent = `0${minute}:0${second}`;
                }
            }
            if(timeInSeconds == 0){
                clearInterval(breakInterval);
                timeInSeconds = 1500;
                timeStarter();
                timeAdjuster++;
            }
            if(time.classList.contains("baban")){
                clearInterval(breakInterval);
            }
        }, 1000)
    }
    else{
        timeInSeconds = 1500;
        timeAdjuster++;
        timeStarter();
    }
}
btn1.onclick = () => {
    container1.classList.remove("cabin");
    container1.classList.add("japan");
    container1.classList.remove("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.remove("elden");
    container1.classList.remove("shire");
}
btn2.onclick = () => {
    container1.classList.remove("cabin");
    container1.classList.remove("japan");
    container1.classList.add("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.remove("elden");
    container1.classList.remove("shire");
}
btn3.onclick = () => {
    container1.classList.remove("cabin");
    container1.classList.remove("japan");
    container1.classList.remove("twoam");
    container1.classList.add("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.remove("elden");
    container1.classList.remove("shire");
}
btn4.onclick = () => {
    container1.classList.remove("cabin");
    container1.classList.remove("japan");
    container1.classList.remove("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.add("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.remove("elden");
    container1.classList.remove("shire");
}
btn5.onclick = () => {
    container1.classList.remove("cabin");
    container1.classList.remove("japan");
    container1.classList.remove("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.add("valhalla");
    container1.classList.remove("elden");
    container1.classList.remove("shire");
}
container1.classList.remove("cabin");
btn6.onclick = () => {
    container1.classList.remove("japan");
    container1.classList.remove("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.add("elden");
    container1.classList.remove("shire");
}
btn7.onclick = () => {
    container1.classList.remove("cabin");
    container1.classList.remove("japan");
    container1.classList.remove("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.remove("elden");
    container1.classList.add("shire");
}
btn8.onclick = () => {
    container1.classList.remove("japan");
    container1.classList.remove("twoam");
    container1.classList.remove("hogwarts");
    container1.classList.remove("rivendell");
    container1.classList.remove("valhalla");
    container1.classList.remove("elden");
    container1.classList.remove("shire");
    container1.classList.add("cabin");
}


pauseButton.onclick = () => {
    if(pauseButton.classList.contains("fa-circle-pause")){
    pauseButton.classList.replace("fa-circle-pause", "fa-circle-play");
    song.pause();
    song2.pause();
    song3.pause();
    song4.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    }
    else{
        pauseButton.classList.replace("fa-circle-play", "fa-circle-pause");
        pID.style.visibility = "visible";
        if(musicPlayer.classList.contains("song1")){
            song.play()
            musicPlayer.classList.add("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.remove("song7");
        }
        else if(musicPlayer.classList.contains("song2")){
            song2.play()
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.add("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.remove("song7");
        }
        else if(musicPlayer.classList.contains("song3")){
            song3.play()
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.add("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.remove("song7");
        }
        else if(musicPlayer.classList.contains("song4")){
            song4.play()
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.add("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.remove("song7");
        }
        else if(musicPlayer.classList.contains("song5")){
            song5.play()
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.add("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.remove("song7");
        }
        else if(musicPlayer.classList.contains("song6")){
            song6.play()
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.add("song6");
            musicPlayer.classList.remove("song7");
        }
        else if(musicPlayer.classList.contains("song7")){
            song7.play()
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.add("song7");
        }
        else{
            song.play()
            musicPlayer.classList.add("song1");
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.remove("song7");
        }
    }
    
}
forwardButton.onclick = () => {
    if(pauseButton.classList.contains("fa-circle-pause")){
        if(musicPlayer.classList.contains("song1")){
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.add("song2");
            song.load();
            song2.play()
        }
        else if(musicPlayer.classList.contains("song2")){
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.add("song3");
            song2.load();
            song3.play()
        }
        else if(musicPlayer.classList.contains("song3")){
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.add("song4");
            song3.load();
            song4.play()
        }
        else if(musicPlayer.classList.contains("song4")){
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.add("song5");
            song4.load();
            song5.play()
        }
        else if(musicPlayer.classList.contains("song5")){
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.add("song6");
            song5.load();
            song6.play()
        }
        else if(musicPlayer.classList.contains("song6")){
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.add("song7");
            song6.load();
            song7.play()
        }
        else if(musicPlayer.classList.contains("song7")){
            musicPlayer.classList.remove("song7");
            musicPlayer.classList.add("song1");
            song7.load();
            song.play()
        }
    }
}
backwardButton.onclick = () => {
    if(pauseButton.classList.contains("fa-circle-pause")){
        if(musicPlayer.classList.contains("song1")){
            musicPlayer.classList.remove("song1");
            musicPlayer.classList.add("song7");
            song.load();
            song7.play()
        }
        else if(musicPlayer.classList.contains("song2")){
            musicPlayer.classList.remove("song2");
            musicPlayer.classList.add("song1");
            song2.load();
            song.play()
        }
        else if(musicPlayer.classList.contains("song3")){
            musicPlayer.classList.remove("song3");
            musicPlayer.classList.add("song2");
            song3.load();
            song2.play()
        }
        else if(musicPlayer.classList.contains("song4")){
            musicPlayer.classList.remove("song4");
            musicPlayer.classList.add("song3");
            song4.load();
            song3.play()
        }
        else if(musicPlayer.classList.contains("song5")){
            musicPlayer.classList.remove("song5");
            musicPlayer.classList.add("song4");
            song5.load();
            song4.play()
        }
        else if(musicPlayer.classList.contains("song6")){
            musicPlayer.classList.remove("song6");
            musicPlayer.classList.add("song5");
            song6.load();
            song5.play()
        }
        else if(musicPlayer.classList.contains("song7")){
            musicPlayer.classList.remove("song7");
            musicPlayer.classList.add("song6");
            song7.load();
            song6.play()
        }
    }
}
setInterval(()=>{
    if(musicPlayer.classList.contains("song1")){
        songName.textContent = "Secret Beach - Ambulo";
        pID.src = "images/p1.jpg";
    }
    else if(musicPlayer.classList.contains("song2")){
        songName.textContent = "Snowfall - øneheart x reidenshi";
        pID.src = "images/p2.jpg";
    }
    else if(musicPlayer.classList.contains("song3")){
        songName.textContent = "I wish it would never stop snowing - Sleepy Fish";
        pID.src = "images/p3.jpg";
    }
    else if(musicPlayer.classList.contains("song4")){
        songName.textContent = "Fade - knowmadic";
        pID.src = "images/p4.jpg";
    }
    else if(musicPlayer.classList.contains("song5")){
        songName.textContent = "For when it is warmer - Sleepy Fish";
        pID.src = "images/p5.jpg";
    }
    else if(musicPlayer.classList.contains("song6")){
        songName.textContent = "Interstaller - Hans Zimmer";
        pID.src = "images/p6.jpg";
    }
    else if(musicPlayer.classList.contains("song7")){
        songName.textContent = "In Dreamland - chillpeach";
        pID.src = "images/p7.jpg";
    }
    
}, 100)
setInterval(()=>{
    if(song.ended){
        song2.play();
        song.load()
        musicPlayer.classList.remove("song1");
        musicPlayer.classList.add("song2");
        pID.src = "images/p2.jpg";
    }
    else if(song2.ended){
        song3.play();
        song2.load()
        musicPlayer.classList.remove("song2");
        musicPlayer.classList.add("song3");
        pID.src = "images/p3.jpg"; 
    }
    else if(song3.ended){
        song4.play();
        song3.load()
        musicPlayer.classList.remove("song3");
        musicPlayer.classList.add("song4");
        pID.src = "images/p4.jpg"; 
    }
    else if(song4.ended){
        song5.play();
        song4.load()
        musicPlayer.classList.remove("song4");
        musicPlayer.classList.add("song5");
        pID.src = "images/p5.jpg"; 
    }
    else if(song5.ended){
        song6.play();
        song5.load()
        musicPlayer.classList.remove("song5");
        musicPlayer.classList.add("song6");
        pID.src = "images/p6.jpg"; 
    }
    else if(song6.ended){
        song7.play();
        song6.load()
        musicPlayer.classList.remove("song6");
        musicPlayer.classList.add("song7");
        pID.src = "images/p7.jpg"; 
    }
    else if(song7.ended){
        song.play();
        song7.load()
        musicPlayer.classList.remove("song7");
        musicPlayer.classList.add("song1");
        pID.src = "images/p1.jpg"; 
    }
}, 500)