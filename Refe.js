
function alerta(titulo,mensaje){
     var muestra = document.getElementById('alertacaja')
     var Nombrealerta = document.getElementById('Nombrealerta')
     var alertainfo = document.getElementById('alertainfo')
     Nombrealerta.innerText = titulo;
     alertainfo.innerText = mensaje;
     muestra.style.display = 'flex'
}
function cerrar(){
    var muestra = document.getElementById('alertacaja')
    muestra.style.display = "none"
}
function XD(titulo,mensaje){
    var muestra = document.getElementById('alertacaja')
    var Nombrealerta = document.getElementById('Nombrealerta')
    var alertainfo = document.getElementById('alertainfo')
    Nombrealerta.innerText = titulo;
    alertainfo.innerText = mensaje;
    muestra.style.display = 'flex'
}
function cerrar(){
   var muestra = document.getElementById('alertacaja')
   muestra.style.display = "none"
}
var comicCarousel = document.getElementById("comicCarousel");{


    comicCarousel.addEventListener("slid.bs.carousel", function (event) {
        var merteElement = document.getElementById("merte");

        var currentIndex = event.to;


        var textos = ["Primera escena", "Segunda escena", "Tercera escena", "cuarta escena", "quinta escena", "sexta escena", "septima escena", "octava escena", "novena escena", "decima escena", "undecima escena", "duodecima escena"]; // Agrega más según sea necesario


        merteElement.textContent = textos[currentIndex];
    })};