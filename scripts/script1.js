
let boton = document.querySelector(".cuadrado button");
let algo = document.querySelector("main");
let video = document.querySelector("video");
let audio = document.querySelector("audio");


boton.addEventListener("click", ()=> {
    algo.innerHTML = `<p class="respuesta">Responde Puta</p>`;

    video.className = "FuegosArti";

    video.play();
})

//algo.addEventListener("animationend", ()=> document.querySelector("audio").play());
document.querySelector(".cuadrado").addEventListener("mouseleave", function () {
    audio.play();
})
/*
setTimeout(()=>{
    document.querySelector("audio").play();
},6000);
*/