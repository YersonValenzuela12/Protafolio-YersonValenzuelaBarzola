var boton = document.getElementById("botoncito");
var correo =document.getElementById("enviar");
var nombre =document.getElementById("name");
var email =document.getElementById("mail");
var mensaje = document.getElementById("mensage");

boton.addEventListener("click", Descargar );
correo.addEventListener("click",enviarcorreo);
function Descargar()
{
alert("Descargando cv");
}
function enviarcorreo()
{
    
var x = nombre.value;
alert("correo enviado" + x);
}
