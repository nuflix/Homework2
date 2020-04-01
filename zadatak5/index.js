document.getElementById("tabs").addEventListener("click", changeTab);
document.getElementById("start").addEventListener("click", starts);
document.getElementById("stop").addEventListener("click", stops);
document.getElementById("reset").addEventListener("click", resets);

let tab = 0;
let maxTime="25:00";
let beep = new Audio("./beep.mp3");
let timer;

function changeTab(){
if(event.target.classList.contains("tab")){
  if(!event.target.classList.contains("sel")){
    document.getElementsByClassName("tab")[0].classList.remove("sel");
    document.getElementsByClassName("tab")[1].classList.remove("sel");
    document.getElementsByClassName("tab")[2].classList.remove("sel");
    event.target.classList.add("sel");
  }
}
if(event.target.innerText==="pomodoro"){
  document.getElementById("pomodoro").style.display="block";
  document.getElementById("shortB").style.display="none";
  document.getElementById("longB").style.display="none";
  tab=0;
}else if(event.target.innerText==="short break"){
  document.getElementById("pomodoro").style.display="none";
  document.getElementById("shortB").style.display="block";
  document.getElementById("longB").style.display="none";
  tab=1;
}else if(event.target.innerText==="long break"){
  document.getElementById("pomodoro").style.display="none";
  document.getElementById("shortB").style.display="none";
  document.getElementById("longB").style.display="block";
  tab=2;
}
stops();
}

function currTab(){
if(tab===0){
  maxTime="25:00";
  return document.getElementById("pomodoro");
}else if(tab===1){
  maxTime="05:00";
  return document.getElementById("shortB");
}else{
  maxTime="10:00";
  return document.getElementById("longB");
}
}

function starts(){
  let el = currTab();
timer = setInterval(function() {countdown(el)}, 1000);
}

function stops(){
clearInterval(timer);
}

function resets(){
  stops();
  let el = currTab();
  el.innerHTML = maxTime;
}

function countdown(el){
let mins=el.innerHTML.toString().substring(0,2);
let secs = el.innerHTML.toString().substring(3,5);
secs=Number(secs)-1;

let displayMinutes;
let displaySeconds;

if(Number(secs)==-1){
  if(Number(mins)>0){
  secs=59;
  mins=Number(mins)-1;
  }else{
    beep.play();
    return 0;
  }
}

if(Number(mins)<10){
  displayMinutes="0"+Number(mins).toString();
}else{
  displayMinutes=Number(mins).toString();
}

if(Number(secs)<10){
  displaySeconds="0"+Number(secs).toString();
}else{
  displaySeconds=Number(secs).toString();
}

el.innerHTML = displayMinutes + ":" + displaySeconds;

}