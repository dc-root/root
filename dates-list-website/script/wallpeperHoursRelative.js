function background() {
   
   var hours = new Date();

   var hora    = hours.getHours();          // 0-23
   var min     = hours.getMinutes();        // 0-59
   var seg     = hours.getSeconds();        // 0-59

   var backBody = document.querySelector("body");
   var backBodyh1 = document.querySelector("#h1 p");
   
   var horaAtual = hora + ':' + min + ':' + seg;

   if (horaAtual >= "5:00:00" && horaAtual <= "5:59:59") {      
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg)";
      backBodyh1.innerHTML += ` 🌌`;

   } else if (horaAtual >= "6:00:00" && horaAtual <= "6:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/2305946/pexels-photo-2305946.jpeg)";

      backBodyh1.innerHTML += ` 🌅`;

   } else if (horaAtual >= "7:00:00" && horaAtual <= "7:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/1456926/pexels-photo-1456926.jpeg)";
      backBodyh1.innerHTML += ` 🌅`;

   } else if (horaAtual >= "8:00:00" && horaAtual <= "8:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/4050469/pexels-photo-4050469.jpeg)";
      backBodyh1.innerHTML += ` 🌁`;

   } else if (horaAtual >= "9:00:00" && horaAtual <= "9:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg)";
      backBodyh1.innerHTML += ` 🌁`;

   } else if (horaAtual >= "10:00:00" && horaAtual <= "10:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/6033677/pexels-photo-6033677.jpeg)";
      backBodyh1.innerHTML += ` 🏖`;

   } else if (horaAtual >= "11:00:00" && horaAtual <= "11:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/5638745/pexels-photo-5638745.jpeg)";
      backBodyh1.innerHTML += ` 🏖`;

   } else if (horaAtual >= "12:00:00" && horaAtual <= "12:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg)";
      backBodyh1.innerHTML += ` 🏖`;

   } else if (horaAtual >= "13:00:00" && horaAtual <= "13:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg)";
      backBodyh1.innerHTML += ` 🏖️`;

   } else if (horaAtual >= "14:00:00" && horaAtual <= "14:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/3910031/pexels-photo-3910031.jpeg)";
      backBodyh1.innerHTML += ` 🏖️`;

   } else if (horaAtual >= "15:00:00" && horaAtual <= "15:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/1471143/pexels-photo-1471143.jpeg)";
      backBodyh1.innerHTML += ` 🌄`;

   } else if (horaAtual >= "16:00:00" && horaAtual <= "16:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/3889729/pexels-photo-3889729.jpeg)";
      backBodyh1.innerHTML += ` 🌇`;
      
   } else if (horaAtual >= "17:00:00" && horaAtual <= "17:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/33334/sunset-clouds-colors-sky.jpg)";
      backBodyh1.innerHTML += ` 🌇`;
      
   } else if (horaAtual >= "18:00:00" && horaAtual <= "18:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg)";
      backBodyh1.innerHTML += ` 🌆`;
      
   } else if (horaAtual >= "19:00:00" && horaAtual <= "19:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg)";
      backBodyh1.innerHTML += ` 🌆`;
      
   } else if (horaAtual >= "20:00:00" && horaAtual <= "20:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg)";
      backBodyh1.innerHTML += ` 🌉`;

   } else if (horaAtual >= "21:00:00" && horaAtual <= "21:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg)";
      backBodyh1.innerHTML += ` 🌉`;

   } else if (horaAtual >= "22:00:00" && horaAtual <= "22:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/204366/pexels-photo-204366.jpeg)";
      backBodyh1.innerHTML += ` 🌌`;

   } else if (horaAtual >= "23:00:00" && horaAtual <= "23:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/1055613/pexels-photo-1055613.jpeg)";
      backBodyh1.innerHTML += ` 🌌`;

   } else if (horaAtual >= "0:00:00" && horaAtual <= "4:59:59") {
      backBody.style.backgroundImage = "url(https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg)";
      backBodyh1.innerHTML += ` 🌃`;

   }
}

background();