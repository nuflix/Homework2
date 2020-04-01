var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
// Add item

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
  var text = e.target.value.toLowerCase();
  // Get list items
  var items = itemList.getElementsByTagName("li");
  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
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
        document.getElementById("items").innerHTML = '                <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li><li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>';
    }
}