var Timer = {
    "config":{

        "hours": 1,
        "minutes": 1,
        "seconds": 10

    },
    "output": function(){
        return document.getElementById("timer-output");
    },
    "clear": function(sec){
        Timer.output().innerHTML = "";
        Timer.config.seconds = sec;
    },
    "start": setInterval(this.myCounter, 1000),
    "myCounter": function(){
      var secondCount = Timer.config.seconds;
      Timer.display(secondCount);
      if(secondCount <= 0){

          Timer.config.seconds = 10;
          clearInterval(Timer.myCounter);
          Timer.end();

      }
      Timer.config.seconds = secondCount - 1;
  },
  "stop": function(){
      clearInterval(Timer.myCounter);
    },
    "display": function(data){
        Timer.output().innerHTML = data;
    },
    "gameOver": function(){
        var audio = new Audio('./resources/audio/buzzer.mp3');
        audio.play();
    },
    "end": function(){
        Timer.display("Time is UP!!!");
        Timer.gameOver();
    }
}

var startButton = document.getElementsByTagName("button")[0];
var formChoice = document.getElementById("form-choice");
startButton.addEventListener("click", function(){
  // timeLimit = parseInt(formChoice.value);
  // Timer.start(timeLimit);
    Timer.start;
});

// var myVar = setInterval(myTimer, 1000);
//
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }
//
// function myStopFunction() {
//     clearInterval(myVar);
// }
