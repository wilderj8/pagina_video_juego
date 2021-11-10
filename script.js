window.onload = inicio;
var dinero = 1000;
var apuesta = 0;
var imagenes = ['img/Ganar.png','img/Multiplicadorx2.png','img/Multiplicadorx3.png','img/Multiplicadorx5.png','img/Perder.png','img/sigue intentando.png'];
var premios =[apuesta*10,apuesta*2,apuesta*3,apuesta*5,apuesta*-1,apuesta*0.5];
var resultado_tirar = [];
function inicio(){
document.getElementById("tirar").onclick=lanzar;
document.getElementById("cruz").onclick=cerrar;
}

function lanzar(){
resultado_tirar = [];
for(let casilla=0;casilla<3;casilla++){
    resultado_tirar.push(elegir_numero());
    mostrar(casilla,resultado_tirar[casilla]);
}
comparar();
}

function apostar(){

}

function elegir_numero(){
var azar = Math.floor(Math.random()*imagenes.length);
return azar;
}

function mostrar(num,img){
document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src = imagenes[img];
}

function comparar(){
if(resultado_tirar[0]==resultado_tirar[1] && resultado_tirar[1] == resultado_tirar[2]){
    let mensaje_ganar = 'Has ganado $ '+ premios[resultado_tirar[0]];
    mensaje(mensaje_ganar);
    sonar("audios/victoria.mp3");
}
else{
    sonar();
}
}

function actualizar(){

}

function mensaje(mensaje_mostrar){
    document.getElementsById("velo").style.display = "flex";
    document.getElementById("mensaje").innerHTML = mensaje_mostrar;
}

function cerrar(){
    document.getElementById("velo").style.display = "none";
}

function sonar(audio){
document.getElementById("sonido").src=audio
}
