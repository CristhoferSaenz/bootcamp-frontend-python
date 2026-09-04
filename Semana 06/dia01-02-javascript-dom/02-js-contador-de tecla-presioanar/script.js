<<<<<<< HEAD
let contador = 0;

document.addEventListener("keydown", function(event) {
     contador++;
     document.getElementById("contador").textContent = contador;
     document.getElementById("ultima-tecla").textContent = event.key;
=======
let contador = 0;

document.addEventListener("keydown", function(event) {
     contador++;
     document.getElementById("contador").textContent = contador;
     document.getElementById("ultima-tecla").textContent = event.key;
>>>>>>> b83d5ae142e437e4c8d48fb17009b49bc6d74323
});