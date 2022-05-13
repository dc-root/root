function clique(event) {
   let doc = document.getElementById("campo").value;
   
   document.getElementById("Titulo").innerHTML = doc;
   
}

function cliqueEnter(event) {
   if (event.key == "Enter") {
      let doc = document.getElementById("campo").value;
      document.getElementById("Titulo").innerHTML = doc;
   }
}