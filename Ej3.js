var hideHomer=true;
var hideMarge=true;
var hideBart=true;
var hideLisa=true;
var hideMaggie=true;

function $(selector){
    return document.querySelector(selector);
}

$("#homer").addEventListener("click",function(){
    var homer=document.getElementById("pH");
    if(hideHomer){
        homer.style.display="block";
        hideHomer=false;
    } else{
        homer.style.display="none";
        hideHomer=true; 
    }    
});

$("#marge").addEventListener("click",function(){
    var marge=document.getElementById("pM");
    if(hideMarge){
        marge.style.display="block";
        hideMarge=false;
    } else{
        marge.style.display="none";
        hideMarge=true; 
    }    
});

$("#bart").addEventListener("click",function(){
    var bart=document.getElementById("pB");
    if(hideBart){
        bart.style.display="block";
        hideBart=false;
    } else{
        bart.style.display="none";
        hideBart=true; 
    }    
});

$("#lisa").addEventListener("click",function(){
    var lisa=document.getElementById("pL");
    if(hideLisa){
        lisa.style.display="block";
        hideLisa=false;
    } else{
        lisa.style.display="none";
        hideLisa=true; 
    }    
});

$("#maggie").addEventListener("click",function(){
    var maggie=document.getElementById("pMgg");
    if(hideMaggie){
        maggie.style.display="block";
        hideMaggie=false;
    } else{
        maggie.style.display="none";
        hideMaggie=true; 
    }    
});