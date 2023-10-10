var timer = 60;
var score = 0;
var hitRn = 0;


function increaseScore(){
    score += 1;
    document.querySelector("#score-val").textContent=score;
}
function GetNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hit-val").textContent= hitRn
}
function makeBubble(){
    var clutter = "";

for(var i=1; i<=138;i++){
    var rn =Math.floor(Math.random()*10)
    clutter +=` <div class="bubble">${rn}</div>`;
}

document.querySelector("#p-btm").innerHTML = clutter;

}

function runTimer(){
   var timerInt= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer-val").textContent =timer;
        }
        else{
            clearInterval(timerInt);
        }
    },1000);

}
document.querySelector("#p-btm").addEventListener("click",function (details) {
   var clickedNum = Number(details.target.textContent);
   if(clickedNum === hitRn){
    increaseScore()
   }
});
runTimer();
makeBubble();
GetNewHit();
increaseScore();
