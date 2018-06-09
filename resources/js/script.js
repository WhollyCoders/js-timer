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
    "start": function(sec){
        Timer.clear(sec);
        var counter = setInterval(function(){
            var secondCount = Timer.config.seconds;
            Timer.display(secondCount);
            if(secondCount <= 0){

                Timer.config.seconds = 10;
                clearInterval(counter);
                Timer.end();

            }
            Timer.config.seconds = secondCount - 1;
        }, 1000);
    }
    ,
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
};
