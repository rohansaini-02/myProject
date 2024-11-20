let cnum =Math.floor(MAth.random()*100)+1;
let Attempt=0;
let attemptData=document.getElementById("attempts")
// let attempt = document.getElementById("Attempt")
let userinp = document.getElementById("inp");
let subBtn=document.getElementById("Submit");
let resBtn = document.getElementById("resBtn");
let message =document.getElementById("msg");
function check(){
    let usernum = parseInt(userinp.value);
    if(cnum ==usernum){
        message.innerHTML="Congratulations u have guessed the number! ";
        message.style.color="green";
        resBtn.style.display="block";

    }else if(cnum<usernum){
        message.innerHTML="Too High! try again";
        message.style.color="red";

    }else{
        message.innerHTML="Too low! try again";
        message.style.color="red";
    }
    Attempt++;
    attemptData.innerHTML=Attempt;
//     setTimeout(()=>{
// userinp.value = "";
// message.innerHTML = "";
//     },1000)
}
function restart(){
    cnum =Math.floor(Math.random()*100)+1;
    Attempt=0;
}
subBtn.addEventListener("click",check);
resBtn.addEventListener("click",restart);