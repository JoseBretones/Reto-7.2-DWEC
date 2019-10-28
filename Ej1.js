// var span1 = document.getElementById("span1");
// span1.addEventListener("mouseover" , mouseover);
// span1.addEventListener("mouseout" , mouseout);

// function mouseover(){
//     document.getElementById("span1").style.color = "white";
//     document.getElementById("p1").style.paddingLeft = "20px";
//     setTimeout(function () {
//         document.getElementById("p1").style.paddingLeft = "";
//         document.getElementById("span1").style.color = "black";
//     }, 1500);
// }
// function mouseout(){
//     setTimeout(function () {
//         document.getElementById("span1").style.color = "black";
//     }, 1500);
// }


var Arrayparagraphs = document.getElementsByName("paragraph");
var ArraySpans = document.getElementsByName("span");

for (let a = 0 ; a < ArraySpans.length ; a++){
    ArraySpans[a].addEventListener("mouseover" , mouseover);
    ArraySpans[a].addEventListener("mouseout" , mouseout);
}

function mouseover(event){
   event.target.style.color = "white";
   event.target.style.paddingLeft = "20px";
    setTimeout(function () {
        event.target.style.paddingLeft = "";
        event.target.style.color = "black";
        }, 1500);
}
function mouseout(){
    setTimeout(function () {
        event.target.style.color = "black";
    }, 1500);
}
