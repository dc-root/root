/**
 * metodos de string
 **/

/* length */

function caracter() {
  
   let result = document.querySelector("small strong.togge");
   var input = document.querySelector("input");

   result.innerHTML = input.value.length+1+" ";

   if(input.value.length+1 == ""){
      result.innerHTML = 0;
   }
}


function btnEnter() {
   let element = document.querySelector("p");
   var input = document.querySelector("input");

   element.innerHTML = input.value;
}