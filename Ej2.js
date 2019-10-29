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
    var myRowArray = document.getElementsByTagName("tr");
    var myCellArray = document.getElementsByTagName("td");
    if(myCellArray.length>0){
        var lastRow = myRowArray[myRowArray.length-1];
        if(count%7==0){
            document.getElementById("table").lastChild.remove();
            lastRow = myRowArray[myRowArray.length-1];
            lastRow.removeChild(myCellArray[myCellArray.length-1]);
            count--;
        }else{            
            lastRow.removeChild(myCellArray[myCellArray.length-1]);
            count--;
        }
    }else{
        alert("No hay imagen para borrar");
    }
    
}

function $(selector){
    return document.querySelector(selector);
}