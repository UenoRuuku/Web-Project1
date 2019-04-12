var oDiv = document.getElementById("div1");
var oUl = document.getElementsByTagName("ul")[0];
var oLi = document.getElementsByTagName("li");
var timer = null;
var iSpeed = 5;
var width = 0;

oUl.innerHTML += oUl.innerHTML;

// 一下所使用的代码，只有不适用liveserver时才能使用



// oUl.style.width = oLi.length * oLi[0].offsetWidth * 2 + "px";
// for(var i = 0; i<oLi.length ; i++){
//     width += oLi[i].offsetWidth;
// }
// oUl.style.width = width + "px";
console.log(oUl.style.width);
function fnMove() {
    if (oUl.offsetLeft < -oUl.offsetWidth/1.55) {
        iSpeed = -iSpeed;
    }
    else if (oUl.offsetLeft >= 0) {
        iSpeed = -iSpeed;
    }
    oUl.style.left = oUl.offsetLeft + iSpeed + "px";    
}
timer = setInterval(fnMove, 30)

oDiv.onmouseover = function () {
    clearInterval(timer);
}
oDiv.onmouseout = function () {    
    timer = setInterval(fnMove, 30);
}


