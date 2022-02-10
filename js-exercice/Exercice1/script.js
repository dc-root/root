function clique() {
   document.getElementById("hiddenText").style.webkitAnimationName = "animacaotext";
   document.getElementById("hiddenText").style.webkitAnimationIterationCount = "1";
   var bottao = document.querySelector("button");

   let box = document.getElementById("animacao");

   if (box.style.webkitAnimationName == "") {
      box.style.webkitAnimationName = "divanimacao";
   }

   if (document.getElementById("hiddenText").style.height == "400px") {
      document.getElementById("hiddenText").style.height = "1px";
      bottao.innerText = "show text";
   } 
   else {
      document.getElementById("hiddenText").style.height = "400px";
      bottao.innerText = "To hidden text";
   }

}