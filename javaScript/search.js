var leg = document.getElementsByClassName("leg_button_a");
var oli = document.getElementsByTagName("li");

for(var i = 0 ; i < oli.length ; i++){
    oli[i].index = i;
    leg[i].index = i;
    leg[i].onclick = a;
}

leg[0].style.background="#202C3B";


function a(){
    var oactive = document.getElementsByClassName("active")[0];
    if(oli[this.index] === oactive){
    }else{
        oli[this.index].className = "active";
        oactive.className ="";
        b();
        this.style.background="#202C3B"
    }
}

function b(){
    for(var i = 0 ; i < oli.length ; i++){
        leg[i].style.background="#216182";
    }
}

var item = document.getElementsByClassName("item");
for(var i = 0; i< item.length; i++){
    item[i].onclick = function(){
        window.location.href='art_detail.html';
    }
}