var addPhoto = document.getElementById("addPhoto");
addPhoto.addEventListener("click" , add , false);
var removePhoto = document.getElementById("removePhoto");
removePhoto.addEventListener("click" , remove , false);
var count = 0;
var table = document.getElementsByTagName("table");

function add(){
    var time = new Date().getTime();
    if(count%7 == 0){
       var tr = document.createElement("tr");   
       $("table").appendChild(tr);
       var td = document.createElement("td");
       td.innerHTML = "<img src='http://lorempixel.com/200/100/?'"+time+">";
       document.getElementById("table").lastChild.appendChild(td);
       count++;
       }else{
       var td = document.createElement("td");
       td.innerHTML = "<img src='http://lorempixel.com/200/100/?'"+time+">";
       document.getElementById("table").lastChild.appendChild(td);
       count++;

    }
}

function remove(){
    var lastTr = document.getElementById("table").lastChild;
    lastTr.setAttribute("id" , "lastTr");
    var lastTd = document.getElementById("lastTr").lastChild;
    lastTr.removeChild(lastTd);
    lastTr.removeAttribute("lastTr");
    count--;
    
}

function $(selector){
    return document.querySelector(selector);
}