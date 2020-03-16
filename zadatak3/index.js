document.getElementById("br").addEventListener("change", validacija);
document.getElementById("submit").addEventListener("click", sub);
document.addEventListener("keyup", keyup);
document.addEventListener("keypress", keypress);

function validacija(){
    if(event.target.value<0){
        event.target.value=0;
    }
}

function sub(){
    for(let i=0; i<document.getElementById("br").value; i++){
    document.getElementById("chars").innerHTML += '<input type="text" class="char">';
    }
    document.getElementById("hide").style.display="none";
    document.getElementById("jepalindrom").style.display="block";
}

function keyup(){
    if(event.target.className.toLowerCase()==="char"){
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
          console.log(word1);
          console.log(word2);
    }
}

function keypress(){
    if(event.key==="d"){
        event.preventDefault();
        alert("Molimo unesite neki drugi karakter!");
    }
}