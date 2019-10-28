let li1 = document.getElementById("li1");
let mark1 = document.getElementById("mark1");
changes(li1,mark1);

let li2 = document.getElementById("li2");
let mark2 = document.getElementById("mark2");
changes(li2,mark2);

let li3 = document.getElementById("li3");
let mark3 = document.getElementById("mark3");
changes(li3,mark3);

let li4 = document.getElementById("li4");
let mark4 = document.getElementById("mark4");
changes(li4,mark4);

let li5 = document.getElementById("li5");
let mark5 = document.getElementById("mark5");
changes(li5,mark5);





function changes (x , y){
x.addEventListener("mouseover" , function(){
    x.style.marginLeft="3em";
    x.style.color="white";
    x.style.transitionDuration="2s";
    // var mark1 = document.getElementById("mark1");
   y.style.marginLeft="3em";
   y.style.transitionDuration="2s";
},false);

x.addEventListener("mouseout" , function(){
    x.style.marginLeft="0";
    x.style.color="black";
    x.style.transitionDuration="2s";
   y.style.marginLeft="0";
   y.style.transitionDuration="2s";
},false);
}