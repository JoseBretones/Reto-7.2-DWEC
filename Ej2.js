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
    // var lastTr = document.getElementById("table").lastChild;
    // lastTr.setAttribute("id" , "lastTr");
    // var lastTd = document.getElementById("lastTr").lastChild;
    // lastTr.removeChild(lastTd);
    // lastTr.removeAttribute("lastTr");
    // count--;
    var myRowArray = document.getElementsByTagName("tr");
    var myCellArray = document.getElementsByTagName("td");
    if(myCellArray.length>0){
        let lastRow = myRowArray[myRowArray.length-1];
        if((myCellArray.length+1)%7 != 0){
        lastRow.removeChild(myCellArray[myCellArray.length-1]);
        }else{
            table.removeChild(myRowArray[myRowArray.length-1]);
            myRowArray.pop();
        }
    }else{
        alert("No hay imagen para borrar");
    }
    
}

function $(selector){
    return document.querySelector(selector);
}