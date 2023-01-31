var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if  we click on the start reset check if playing or not
document.getElementById("startreset").onclick =
function() {
    if (playing == true)
    {
location.reload();
    }else{
        //if we are playing 
        //change mode to playing
playing = true;
score = 0;

document.getElementById("scorevalue").innerHTML = score;

show("timeremaining");
timeremaining = 60;


document.getElementById("timeremainingvalue").innerHTML
 = timeremaining;
 hide("gameOver")

 // hide game over box


    //set score to zero
document.getElementById("startreset").innerHTML = "Reset Game";
// if not playing show countdown box 
//startcountdown 
startCountdown();
generateQA();

}
}
for(i=1; i<5; i++){
    
//clicking on an anwser box
document.getElementById("box"+i).onclick = function(){
    //check if we are playing 
    if(playing==true){
        if(this.innerHTML == correctAnswer){
            // got correct anwser 
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function() {
              hide("correct");  
            }, 1000);
            // generate new anwser
            generateQA();
    }else{
        hide("correct");
        show("wrong");
        setTimeout(function() {
          hide("wrong");  
        }, 1000);

    }
    }

}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        
    document.getElementById("timeremainingvalue").innerHTML
     = timeremaining;  
     if (timeremaining == 0){
     stopCountdown();
     show("gameOver");

     document.getElementById("gameOver").innerHTML = 
     "<p> game over! </p><p> your score is " + score  +  ".</p>";
    hide("timeremaining");
    hide("correct");
    hide("wrong");     
    playing = false;
    document.getElementById("startreset").innerHTML = "Start Game";
           }
    }, 1000);
    
}

}

              
 //stop counter    
function stopCountdown() {
    clearInterval(action);
}

function hide(Id){
document.getElementById(Id).style.display =
"none";
}

function show(Id){
document.getElementById(Id).style.display =
"block";
}

function generateQA(){
    var x = 1 + Math.round(11 * Math.random());
    var y = 1 + Math.round(11 * Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;

     correctPosition = 1 + Math.round(3 * Math.random());
    
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];
    
    for (i=1; i<5; i++){
        if(i != correctPosition){
           
            var wrongAnswer;  
           do{
              wrongAnswer = (1 + Math.round(11 * Math.random()))* (1 + Math.round(11 * Math.random()));
             }while(answers.indexOf(wrongAnswer)>-1)
            
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}