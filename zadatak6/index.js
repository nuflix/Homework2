document.getElementById("buttons").addEventListener("click", dugme);
document.addEventListener("keypress", dugme2);

function dugme(){
    if(event.target.tagName.toLowerCase()==="button"){
       if(event.target.innerText==="="){
        document.getElementById("text").value=eval(document.getElementById("text").value);
       }else if(event.target.innerText==="C"){
        document.getElementById("text").value="";
        }
        else{
           document.getElementById("text").value += event.target.innerText;
       }
    }
}

function dugme2(){
   if(!isNaN(event.key)||event.key==="+"||event.key==="-"||event.key==="*"||event.key==="/"||event.key==="."){
    document.getElementById("text").value += event.key;
   } 
}