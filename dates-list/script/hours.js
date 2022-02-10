setInterval( function() {

   let hours = new Date();

   let hora    = hours.getHours();          // 0-23
   let min     = hours.getMinutes();        // 0-59
   let seg     = hours.getSeconds();        // 0-59


   min = zero(min);
   seg = zero(seg);
   
   document.getElementById("horas").textContent = hora+':'+min+':'+seg;

}, 1000);

function zero(x) {
   if (x < 10) {
         x = '0' + x;
   } return x;
}
