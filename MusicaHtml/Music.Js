//menu
document.querySelector(".action").addEventListener("click", () =>{
    document.querySelector(".menu").classList.toggle("show");
});

let prueba1 = document.querySelector("#link");
let prueba2 = document.querySelector("#link1");
let prueba3 = document.querySelector("#link2");
let prueba4 = document.querySelector("#link3");
let prueba5 = document.querySelector("#link4");
let prueba6 = document.querySelector("#link5");

let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let slider = document.querySelector("#duration_slider");
let track_image = document.querySelector("#img");
let auto_play = document.querySelector("#play");

let time = document.querySelector(".end");

let timer;
let index_no = 0;
let Playing_song = false;




let track = document.querySelector('audio');
// Canciones list

let All_song = [
    {
        name: "Brindemos",
        path: "/ArchivosMusic/BRINDEMOS_MASTER_FINAL_1.1.mp3",
        img: "/img/copa.jpg",
        singer: "1",
        time: "02:53",
        num: 1
    },
    {
        name: "Guerra",
        path: "/ArchivosMusic/GUERRA_MASTER_FINAL.mp3",
        img: "/img/guerra.jpg",
        singer: "2",
        time: "03:22"
    },
    {
        name: "AMOR FUGAZ",
        path: "/ArchivosMusic/AMOR_FUGAZ_MASTER_FINAL_1.1.mp3",
        img: "/img/Amor_fugaz.jpg",
        singer: "3",
        time: "02:53",
    },
    {
        name: "ARTIFICIAL",
        path: "/ArchivosMusic/ARTIFICIAL_MASTER_FINAL_1.1.mp3",
        img: "/img/Artificial.jpg",
        singer: "4",
        time: "03:14",
    },
    {
        name: "CARTA DE AMOR",
        path: "/ArchivosMusic/CARTA_DE_AMOR_MASTER_FINAL.mp3",
        img: "/img/carta.jpg",
        singer: "5",
        time: "03:28",
    },
    {
        name: "PAL MILLON",
        path: "/ArchivosMusic/PAL_MILLON_MASTER_FINAL.mp3",
        img: "/img/palMillon.jpg",
        singer: "6",
        time: "02:14",
        
    }
]
// función de reproducción automática
function auto_play_switch(){
    if(auto_play == 1){
        auto_play = 0;
        
    }else {
        auto_play = 1;
        
    }
}

// función cargar la pista
function load_track (index_no){
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    time.innerHTML = All_song[index_no].time;
    track.load();

    timer = setInterval(range_slider, 1000);
    
}
load_track(index_no);


// reproducir canción
function justplay(){
    if(Playing_song==false){
        playsong();

    }else{
        pausesong();
    }
}

// restablecer el control deslizante de la canción
function reset_slider(){
    slider.value = 0;
}

function playsong(){
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}


//pause song
 function pausesong(){
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// siguiente canción
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

// canción anterior
function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


// cambiar la posición del deslizador 
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

// función de reproducción automática
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
	}else{
       autoplay = 1;
	}
}

function range_slider(){
    let position = 0;
    
    // actualizar la posición de la corredera
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
    
    // la función se ejecutará cuando la canción termine
    if(track.ended){
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if(auto_play == 1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}

prueba1.addEventListener("click", () => {
    index_no = 0;
    load_track(index_no);
    reset_slider();
    playsong();
})

prueba2.addEventListener("click", () => {
        index_no += 1;
    if(index_no === 1){
        load_track(index_no);
        reset_slider();
        playsong();
        index_no = 0;
    }
})

prueba3.addEventListener("click", () => {
    index_no += 2;
    if (index_no === 2) {
        load_track(index_no);
        reset_slider();
        playsong();
        index_no = 0;
    }
})

prueba4.addEventListener("click", () => {
    index_no += 3;
    if (index_no === 3) {
        load_track(index_no);
        reset_slider();
        playsong();
        index_no = 0;
    }
})

prueba5.addEventListener("click", () => {
    index_no += 4;
    if (index_no === 4) {
        load_track(index_no);
        reset_slider();
        playsong();
        index_no = 0;   
    }
})

prueba6.addEventListener("click", () => {
    index_no += 5;
    if (index_no === 5) {
        load_track(index_no);
        reset_slider();
        playsong();
        index_no = 0;
    }
})