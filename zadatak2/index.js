let myTurn = 0;
let isEnd=0;
document.getElementById("table").addEventListener("click", turn);
function turn(){

if(event.target.innerHTML == ""){
    isEnd++;
    if(myTurn===0){
    document.getElementsByClassName("sel")[0].classList.remove("sel");
    event.target.innerHTML="x";
    event.target.style.backgroundColor="lightgray";
    myTurn=1;
    document.getElementsByClassName("me")[1].classList.add("sel");
    }else{
    document.getElementsByClassName("sel")[0].classList.remove("sel");
    event.target.innerHTML="o";
    event.target.style.backgroundColor="gray";
    myTurn=0;
    document.getElementsByClassName("me")[0].classList.add("sel");
    }

    let td = document.getElementsByTagName("td");

if(td[0].innerHTML===td[1].innerHTML&&td[0].innerHTML===td[2].innerHTML&&td[0].innerHTML!==""){
    alert(td[0].innerHTML + " wins!")
}

if(td[3].innerHTML===td[4].innerHTML&&td[3].innerHTML===td[5].innerHTML&&td[3].innerHTML!==""){
    alert(td[3].innerHTML + " wins!")
} 

if(td[6].innerHTML===td[7].innerHTML&&td[6].innerHTML===td[8].innerHTML&&td[6].innerHTML!==""){
    alert(td[6].innerHTML + " wins!")
} 

if(td[0].innerHTML===td[3].innerHTML&&td[0].innerHTML===td[6].innerHTML&&td[0].innerHTML!==""){
    alert(td[0].innerHTML + " wins!")
}

if(td[1].innerHTML===td[4].innerHTML&&td[1].innerHTML===td[7].innerHTML&&td[1].innerHTML!==""){
    alert(td[1].innerHTML + " wins!")
} 

if(td[2].innerHTML===td[5].innerHTML&&td[2].innerHTML===td[8].innerHTML&&td[2].innerHTML!==""){
    alert(td[2].innerHTML + " wins!")
} 

if(td[0].innerHTML===td[4].innerHTML&&td[0].innerHTML===td[8].innerHTML&&td[0].innerHTML!==""){
    alert(td[0].innerHTML + " wins!")
} 

if(td[2].innerHTML===td[4].innerHTML&&td[2].innerHTML===td[6].innerHTML&&td[2].innerHTML!==""){
    alert(td[2].innerHTML + " wins!")
} 

if(isEnd===9){alert("It's a draw!")}

}
}