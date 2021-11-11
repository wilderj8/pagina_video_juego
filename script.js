window.onload = inicio;
var dinero = 1000;
var apuesta = 0;
var montomax = 0;
var imagenes = ['img/Ganar.png','img/Multiplicadorx2.png','img/Multiplicadorx3.png','img/Multiplicadorx5.png','img/Perder.png','img/sigueintentando.png','img/aliens.png','img/invasion.png'];
var premios =[apuesta*10,apuesta*2,apuesta*3,apuesta*5,0,apuesta*0.75,apuesta*0.5,apuesta*0.25];
var resultado_tirar = [];

function inicio(){
let mensaje = 'Bienvenido, por favor ingrese su nombre en la barra superior antes de iniciar el juego';
mensaje(mensaje);
sonar('audios/juegodetronos.mp3')
document.getElementById("tirar").onclick=lanzar;
document.getElementById("cruz").onclick=cerrar;
document.getElementById("x5").onclick=apostarx5;
document.getElementById("x10").onclick=apostarx10;
document.getElementById("x50").onclick=apostarx50;
document.getElementById("x100").onclick=apostarx100;
document.getElementById("x500").onclick=apostarx500;
document.getElementById("x1000").onclick=apostarx1000;
actualizar();
}

function lanzar(){
resultado_tirar = [];
for(let casilla=0;casilla<3;casilla++){
    resultado_tirar.push(elegir_numero());
    mostrar(casilla,resultado_tirar[casilla]);
}
comparar();

if(dinero > montomax){
    montomax = dinero;
}
//Se debe realizar la pantalla de derrota con la tabla y el boton jugar de nuevo
if(dinero == 0){

}
}

function apostarx5(){
if(dinero -5 < 0){
let mensaje = 'No tienes dinero suficiente para esta apuesta';
mensaje(mensaje);
}
else{
apuesta += 5
dinero -= 5
actualizar()
}
}

function apostarx10(){
if(dinero - 10 < 0){
    let mensaje = 'No tienes dinero suficiente para esta apuesta';
    mensaje(mensaje);
}
else{
apuesta += 10
dinero -= 10
actualizar()
}
}

function apostarx50(){
    if(dinero - 50 < 0){
        let mensaje = 'No tienes dinero suficiente para esta apuesta';
        mensaje(mensaje);
    }
    else{
    apuesta += 50
    dinero -= 50
    actualizar()
    }
}

function apostarx100(){
    if(dinero - 100 < 0){
        let mensaje = 'No tienes dinero suficiente para esta apuesta';
        mensaje(mensaje);
    }
    else{
    apuesta += 100
    dinero -= 100
    actualizar()
    }
}

function apostarx500(){
    if(dinero - 500 < 0){
        let mensaje = 'No tienes dinero suficiente para esta apuesta';
        mensaje(mensaje);
    }
    else{
    apuesta += 500
    dinero -= 500
    actualizar()
    }
}

function apostarx1000(){
    if(dinero - 1000 < 0){
        let mensaje = 'No tienes dinero suficiente para esta apuesta';
        mensaje(mensaje);
    }
    else{
    apuesta += 1000
    dinero -= 1000
    actualizar()
    }
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
            let mensaje_ganar = 'Has ganado el premio mayor (x10) $ '+ premios[resultado_tirar[0]];
            mensaje(mensaje_ganar);
            sonar("audios/victoria.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 1:
            let mensaje_ganar = 'Has ganado el doble (x2) $ '+ premios[resultado_tirar[0]];
            mensaje(mensaje_ganar);
            sonar("audios/victoria.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 2:
            let mensaje_ganar = 'Has ganado el triple (x3) $ '+ premios[resultado_tirar[0]];
            mensaje(mensaje_ganar);
            sonar("audios/victoria.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 3:
            let mensaje_ganar = 'Que buena suerte tienes (x5) $ '+ premios[resultado_tirar[0]];
            mensaje(mensaje_ganar);
            sonar("audios/victoria.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 4:
            let mensaje_perder = 'Mala suerte, pierdes todo';
            mensaje(mensaje_perder);
            sonar("audios/derrota.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 5:
            let mensaje_perder = 'pagas el impuesto de 25% por usar el tragamonedas';
            mensaje(mensaje_perder);
            sonar("audios/derrota.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 6:
            let mensaje_perder = 'los alienigenas te han abducido la mitad de la apuesta :(';
            mensaje(mensaje_perder);
            sonar("audios/derrota.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
        case 7:
            let mensaje_perder = 'debes financiar al ejercito por la invasion extraterrestre con el 75% de la apuesta';
            mensaje(mensaje_perder);
            sonar("audios/derrota.mp3");
            saldo += premios[resultado_tirar[0]];
            apuesta = 0;
            actualizar();
            break;
    }
}
}

function actualizar(){
document.getElementById("cantidadsaldo").innerHTML = dinero;
document.getElementById("monto").innerText = apuesta;
}

function mensaje(mensaje_mostrar){
    document.getElementsById("velo").style.display = "flex";
    document.getElementById("mensaje").innerHTML = mensaje_mostrar;
}

function cerrar(){
    document.getElementById("velo").style.display = "none";
    document.getElementById("sonido").pause();
}

function sonar(audio){
document.getElementById("sonido").src=audio
document.getElementById("sonido").play();
}
