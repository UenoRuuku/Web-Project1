var Ul = document.getElementsByTagName("ul")[1];
var Li = document.getElementsByClassName("ass_adv_li");
var Div = document.getElementById("ass_adv");
var left = document.getElementById("ass_arrow_left");
var right = document.getElementById("ass_arrow_right");
var timer2 = null;
var timerT = null;
var timerS = null;
var kaiguan = true;
var mSpeed = 40;
var tail = document.getElementsByClassName("tail")[0];
checkCookie();



Div.onclick = function(){
    window.location.href='art_detail.html';
}

function fnMove2() {

    if (Ul.offsetLeft >= 0) {
        // Ul.style.left = 0;
        Ul.style.left = Ul.offsetLeft - mSpeed + "px";
        stopMove2();
    }
    Ul.style.left = Ul.offsetLeft + mSpeed + "px";
}

function fnMove3() {

    if (Ul.offsetLeft <= -Ul.offsetWidth / 2.1) {
        // Ul.style.left = -Ul.offsetWidth / 2 + "px";
        stopMove3();
    }
    Ul.style.left = Ul.offsetLeft - mSpeed + "px";
}


function setMove2() {
    if (kaiguan) { } else {
        stopMove3();
        timer2 = setInterval(fnMove2, 30); 
        kaiguan = true;
    }
}

function setMove3() {
    if (kaiguan) {
        stopMove2();
        timerT = setInterval(fnMove3, 30);
        kaiguan = false;
    }
}



function stopMove2() {
    clearInterval(timer2);
}
function stopMove3() {
    clearInterval(timerT);
}

// 
left.onclick = setMove2;
right.onclick = setMove3;



function getCookie(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1
        c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) { c_end = document.cookie.length; }
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  }
  
  
  
  function checkCookie() {
    username = getCookie('username');
    if (username != null && username != "") {
        tail.style.opacity ="0";
        tail.style.height = "0px"
    }
    else {
        tail.style.opacity ="1";
        tail.style.height="266px";
    }
  }
  
