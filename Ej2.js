var cont = 7;
var numRow = 0;
var table = document.getElementById("table");
var addPhoto = document.getElementById("addPhoto");
addPhoto.addEventListener("click" , add , false);

function add(){
if(cont%7==0){
    let row = document.createElement("tr");
    $("#table").appendChild(row);
    numRow++;
}
var actualRow = table.rows[numRow];
var x = actualRow.insertCell(count);
x.innerHTML = "New cell";
count++;
}

function $ (selector){
    return document.querySelector(selector);
}