document.getElementById("left").addEventListener("click", left);
document.getElementById("right").addEventListener("click", right);
document.getElementById("img").addEventListener("click", zoomz);
document.getElementById("x").addEventListener("click", close);

let zoom=0;
let id=0;
let maxid=3;
let img = document.getElementById("img");
let canSwitch = 0;

document.getElementById("content").addEventListener("mouseover", function(){ canSwitch=1; });
document.getElementById("content").addEventListener("mouseleave", function(){ canSwitch=0; });
document.addEventListener('keydown', logKey);

function left(){
if(id===0){
    id=maxid;
}else{
    id--;
}
img.src= "./images/img" + id + ".png";
}

function right(){
    if(id===maxid){
        id=0;
    }else{
        id++;
    }
    img.src= "./images/img" + id + ".png";
}

function zoomz(){
 img.style.maxHeight="100vh";
img.style.maxWidth="100vw"; 
document.getElementById("x").style.display="block";
}

function close(){
    img.style.maxHeight="200px";
    img.style.maxWidth=""; 
    document.getElementById("x").style.display="none";
}

function logKey(){
    if(canSwitch===1){
    
if(event.keyCode===37){
    left();
}

if(event.keyCode===39){
    right();
}

    }
}