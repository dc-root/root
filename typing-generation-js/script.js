var CharacterPos = 0;
var MsgBuffer = "";
var TypeDelay = 70; 
var NxtMsgDelay = 1100;
var MsgIndex = 0;
var delay;

var MsgArray = ["Hello! how are you?", "This is the secound message", "And this is the last message!"];

var startButton = document.getElementById("start");

startButton.addEventListener('click',  function StartTyping() { 
      var id = document.getElementById("typing-text");
  
      if (CharacterPos != MsgArray[MsgIndex].length) {
         MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
         id.value = MsgBuffer+"|";
         delay = TypeDelay;
         id.scrollTop = id.scrollHeight; 
      } else {
           delay = NxtMsgDelay;
           MsgBuffer   = "";
           CharacterPos = -1;
           if (MsgIndex!=MsgArray.length-1){
             MsgIndex++;
           } else {
             MsgIndex = 0;
           }
       }
      setTimeout(StartTyping, delay);
      CharacterPos++;
});

