window.onload = inicio;
var dinero = 1000;
var apuesta = 0;
var montomax = 0;
var imagenes = ['/img/Ganar.png','/img/Multiplicadorx2.png','/img/Multiplicadorx3.png','/img/Multiplicadorx5.png','/img/Perder.png','/img/sigueintentando.png','/img/aliens.png','/img/invasion.png'];
var premios = [];
var resultado_tirar = [];
var mensaje_mostrar = "";

function inicio(){
document.getElementById("tirar").onclick=lanzar;
document.getElementById("cruz").onclick=cerrar;
document.getElementById("x5").onclick=apostarx5;
document.getElementById("x10").onclick=apostarx10;
document.getElementById("x50").onclick=apostarx50;
document.getElementById("x100").onclick=apostarx100;
document.getElementById("x500").onclick=apostarx500;
document.getElementById("all_in").onclick=apostar_allin;
mensaje_mostrar = "Bienvenido Wildernautas, no olviden primero ingresar sus nombres"
sonar("/audios/intro.mp3")
mensaje(mensaje_mostrar)

actualizar();
}

function lanzar(){
if (dinero > 0 && apuesta == 0){
    mensaje_mostrar = 'Debes apostar algun monto';
    mensaje(mensaje_mostrar)
}
//Se debe realizar la pantalla de derrota con la tabla y el boton jugar de nuevo
else{
    resultado_tirar = [];
for(let casilla=0;casilla<3;casilla++){
    resultado_tirar.push(elegir_numero());
    mostrar(casilla,resultado_tirar[casilla]);
}
premios =[apuesta*10,apuesta*2,apuesta*3,apuesta*5,0,apuesta*0.75,apuesta*0.5,apuesta*0.25];
comparar();

if(dinero > montomax){
    montomax = dinero;
}

}
}

function apostarx5(){
if(dinero -5 < 0){
    mensaje_mostrar = 'No tienes dinero suficiente para esta apuesta';
    mensaje(mensaje_mostrar);
}
else{
    apuesta += 5
    dinero -= 5
    actualizar()
}
}

function apostarx10(){
if(dinero - 10 < 0){
    mensaje_mostrar = 'No tienes dinero suficiente para esta apuesta';
    mensaje(mensaje_mostrar);
}
else{
    apuesta += 10
    dinero -= 10
    actualizar()
}
}

function apostarx50(){
if(dinero - 50 < 0){
    mensaje_mostrar = 'No tienes dinero suficiente para esta apuesta';
    mensaje(mensaje_mostrar);
}
else{
    apuesta += 50
    dinero -= 50
    actualizar()
}
}

function apostarx100(){
if(dinero - 100 < 0){
    mensaje_mostrar = 'No tienes dinero suficiente para esta apuesta';
    mensaje(mensaje_mostrar);
}
else{
    apuesta += 100
    dinero -= 100
    actualizar()
}
}

function apostarx500(){
if(dinero - 500 < 0){
    mensaje_mostrar = 'No tienes dinero suficiente para esta apuesta';
    mensaje(mensaje_mostrar);
}
else{
    apuesta += 500
    dinero -= 500
    actualizar()
}
}

function apostar_allin(){
    apuesta = dinero;
    dinero = 0;
    actualizar()
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
    switch(resultado_tirar[0]){
        case 0:
            mensaje_mostrar = `Has ganado el premio mayor (x10) $${premios[resultado_tirar[0]]}`;
            mensaje(mensaje_mostrar)
            sonar("/audios/premio.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 1:
            mensaje_mostrar = `Has ganado el doble (x2) $${premios[resultado_tirar[0]]}`;
            mensaje(mensaje_mostrar)
            sonar("/audios/multiplicadorx2.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 2:
            mensaje_mostrar = `Has ganado el triple (x3) $${premios[resultado_tirar[0]]}`;
            mensaje(mensaje_mostrar)
            sonar("/audios/multiplicadorx3.mp3");
            dinero = dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 3:
            mensaje_mostrar = `Que buena suerte tienes (x5) $${premios[resultado_tirar[0]]}`;
            mensaje(mensaje_mostrar)
            sonar("/audios/multiplicadorx5.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 4:
            mensaje_mostrar = 'Mala suerte, pierdes todo';
            mensaje(mensaje_mostrar)
            sonar("/audios/perdertodo.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 5:
            mensaje_mostrar = 'pagas el impuesto de 25% por usar el tragamonedas';
            mensaje(mensaje_mostrar)
            sonar("/audios/siguelointentando.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 6:
            mensaje_mostrar = 'los alienigenas te han abducido la mitad de la apuesta :(';
            mensaje(mensaje_mostrar)
            sonar("/audios/abducir.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 7:
            mensaje_mostrar = 'debes financiar al ejercito por la invasion extraterrestre con el 75% de la apuesta';
            mensaje(mensaje_mostrar)
            sonar("/audios/invasion.mp3");
            dinero += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
    }
}
if (dinero == 0 && apuesta == 0){
    var jugador = document.getElementById("usuario").value;
    mensaje_mostrar = `El monto maximo alcanzado fue de $${montomax}, felicitaciones ${jugador}`;
    mensaje(mensaje_mostrar);
    sonar("/audios/derrota.mp3")
}
}

function actualizar(){
document.getElementById("cantidadsaldo").innerHTML = dinero;
document.getElementById("monto").innerHTML = apuesta;
}

function cerrar(){
document.getElementById("velo").style.display = "none";
document.getElementById("sonido").pause();
}

function sonar(audio){
document.getElementById("sonido").src=audio
document.getElementById("sonido").play();
}

function mensaje(m){
document.getElementById("velo").style.display="flex";
document.getElementById("mensaje").innerHTML=m;
}