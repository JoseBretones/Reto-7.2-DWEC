var addPhoto = document.getElementById("addPhoto");
addPhoto.addEventListener("click" , add , false);
var count = 0;
var table = document.getElementsByTagName("table");
function add(){
    var time = new Date().getTime();

    if(count%7 == 0){
       var tr = document.createElement("tr");   
       $("table").appendChild(tr);
       var td = document.createElement("td");
       td.innerHTML = "HOLA";
       $("table tr").appendChild(td);
       count++;
    }else{
       var td = document.createElement("td");
       td.innerHTML = "HOLA";
       document.getElementById("table").lastChild.appendChild(td);
       count++;
    }
}

function $(selector){
    return document.querySelector(selector);
}