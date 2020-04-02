var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
var listS = document.getElementById("itemz");
let id = -1;
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
// Add item
document.addEventListener('keydown', sel);

listS.addEventListener("click", sel2);

window.addEventListener("load", loadz, false);

function addItem(e) {
  e.preventDefault();
  //Get input value
  // Create new li element
  // Add class
  // Add text node with input value
  // Create del button element
  // Add classes to del button
  // Append text node
  // Append button to li
  // Append li to list
  let val = document.getElementById("item").value;
  document.getElementById("items").innerHTML += `<li class="list-group-item">${val}<button class="btn btn-danger btn-sm float-right delete">X</button></li>`;
  save();
}
// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        save();
    }
  }
}
// Filter items
function filterItems(e) {
  // convert text to lowercase
  listS.style.display="block";
  if(e.keyCode===40||e.keyCode===38){
    return 0;
  }else if(e.keyCode===13){
    if(listS.getElementsByClassName("sel").length>0){
      /* filter.value=listS.getElementsByClassName("sel")[0].innerText; */
      sel2Enter();
      return 0;
    }

  }

  id=-1;

  var text = e.target.value.toLowerCase();
  // Get list items
  var items = itemList.getElementsByTagName("li");
  // Convert HTMLCollection to an array
  listS.innerHTML = "";
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
     listS.innerHTML += item.outerHTML;
     listS.getElementsByTagName("li")[listS.getElementsByTagName("li").length-1].removeChild(listS.getElementsByTagName("li")[listS.getElementsByTagName("li").length-1].getElementsByTagName("button")[0]);
    } else {
      item.style.display = "none";
    }
  });


}

function save(){
    localStorage.setItem("items", document.getElementById("items").innerHTML);
}

function loadz(){
    if(localStorage.getItem("items")){
    document.getElementById("items").innerHTML = localStorage.getItem("items").toString();
    }else{
        document.getElementById("items").innerHTML = '<li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>';
    }
    listS.innerHTML = "";
}

function sel(){

  if(listS.getElementsByClassName("list-group-item").length===1){
    listS.getElementsByClassName("list-group-item")[0].classList.add("sel");
  }else{
  if(event.keyCode===40){
   
    id++;
    if(id<=listS.getElementsByClassName("list-group-item").length-1){
      if(id>0){
   listS.getElementsByClassName("list-group-item")[id-1].classList.remove("sel");  
      }
    listS.getElementsByClassName("list-group-item")[id].classList.add("sel");
    }else{
      listS.getElementsByClassName("list-group-item")[0].classList.add("sel");
      listS.getElementsByClassName("list-group-item")[id-1].classList.remove("sel");
      id=0;
    }

  }

  if(event.keyCode===38){
   
    id--;
    if(id<0){
      id=listS.getElementsByClassName("list-group-item").length-1;
      listS.getElementsByClassName("list-group-item")[0].classList.remove("sel");
      listS.getElementsByClassName("list-group-item")[id].classList.add("sel");
    }else{
      listS.getElementsByClassName("list-group-item")[id+1].classList.remove("sel");
      listS.getElementsByClassName("list-group-item")[id].classList.add("sel");
    }

  }

}

}

function sel2(){
  filter.value=event.target.innerText;
  listS.innerHTML=event.target.outerHTML;
  
 // var text = e.target.value.toLowerCase();
  // Get list items
  var items = itemList.getElementsByTagName("li");
  // Convert HTMLCollection to an array
  
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if ( event.target.innerText.toString().toLowerCase() === itemName.toLowerCase()) {
      item.style.display = "block";
      //console.log("hello: " + item.innerText.substr(0, filter.value.length).toLowerCase());
    } else {
      item.style.display = "none";
      //console.log(item.innerText.substr(0, filter.value.length).toLowerCase());
    }
  });

}

function sel2Enter(){

  filter.value=listS.getElementsByClassName("sel")[0].innerText;;
  listS.innerHTML=listS.getElementsByClassName("sel")[0].outerHTML;

  var items = itemList.getElementsByTagName("li");
  // Convert HTMLCollection to an array
  
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if ( filter.value.toString().toLowerCase() === itemName.toLowerCase()) {
      item.style.display = "block";
     // console.log("hello: " + item.innerText.substr(0, filter.value.length).toLowerCase());
    } else {
      item.style.display = "none";
     // console.log(item.innerText.substr(0, filter.value.length).toLowerCase());
    }
  });
}