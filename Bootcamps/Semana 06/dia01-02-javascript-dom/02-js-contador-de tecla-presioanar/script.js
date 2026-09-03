let contador = 0;

document.addEventListener("keydown", function(event) {
     contador++;
     document.getElementById("contador").textContent = contador;
     document.getElementById("ultima-tecla").textContent = event.key;
});