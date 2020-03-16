document.getElementById("buttons").addEventListener("click", dugme)


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
