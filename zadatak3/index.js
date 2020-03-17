document.getElementById("br").addEventListener("change", validacija);
document.getElementById("submit").addEventListener("click", sub);
document.addEventListener("keyup", keyup);
document.addEventListener("keypress", keypress);
document.addEventListener("keydown", keydown);
document.getElementById("dodaj").addEventListener("click", dodaj);
document.getElementById("chars").addEventListener("click", del);

function validacija(){
    if(event.target.value<0){
        event.target.value=0;
    }
}

function sub(){
    for(let i=0; i<document.getElementById("br").value; i++){
    document.getElementById("chars").innerHTML += '<div class="jedanKarakter"><button>x</button><input type="text" class="char"></div>';
}
    document.getElementById("hide").style.display="none";
    document.getElementById("jepalindrom").style.display="block";
    document.getElementById("dodaj").style.display="block";
}

function keyup(){
    if(event.target.className.toLowerCase()==="char"){
        jepalindrom();
         /*  console.log(word1);
          console.log(word2); */
         // console.log(event);
    }
}

function keydown(){
    if((event.keyCode<65&&event.keyCode!==32&&event.keyCode!==8)||(event.keyCode>90&&event.keyCode<97)||event.keyCode>122){
        event.preventDefault();
        alert("Molimo unesite neki drugi karakter!");
    }else{

         if(event.target.value.length>0&&event.keyCode!==8){
            if(event.target.nextSibling){
                event.target.nextSibling.focus();
                }else{
                    event.preventDefault();
                }
        } 
            
        if(event.target.value.length==0&&event.keyCode===8){
            if(event.target.previousSibling){
                event.target.previousSibling.focus();
                }
        }
        
    }
}

function keypress(){
    if(event.target.value.length>0){
        event.preventDefault();
    }
}

function dodaj(){
    let div = document.createElement("div");
    div.classList.add("jedanKarakter");

    let inp = document.createElement("input");
    inp.type="text";
    inp.classList.add("char");
    let btn = document.createElement("button");
    btn.innerHTML="x";
    div.appendChild(btn);
    div.appendChild(inp);
    document.getElementById("chars").appendChild(div);
}

function del(){
if(event.target.tagName.toLowerCase()==="button"){
event.target.parentNode.remove(event.target);
jepalindrom();
}
}

function jepalindrom(){
        let word1="";
        let word2="";
        for(let i=document.getElementsByClassName("char").length-1; i>-1; i--){
          word1+=document.getElementsByClassName("char")[i].value;
        }
        for(let i=0; i<document.getElementsByClassName("char").length; i++){
            word2+=document.getElementsByClassName("char")[i].value;
          }
          if(word1===word2){
              document.getElementById("jepalindrom").innerHTML="Jeste palindrom";
          }else{
              document.getElementById("jepalindrom").innerHTML="Nije palindrom";
          }
}