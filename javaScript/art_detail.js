var back = document.getElementById("back_button");
back.onclick=function(){
    window.history.go(-1);
}
var buy = document.getElementById("buy");
var pet_c = document.getElementsByClassName("pet_conversation")[0];
var pet_t = document.getElementById("conversation_text");


buy.onclick = function(){
    username = getCookie('username');
    if (username != null && username != "") {
        dia("购物车里有新画作咯~");  
        }
        else {
            window.location.href='login.html';
        }
    
}

function dia(content){
  pet_c.style.opacity = "1";
  pet_t.innerHTML=content;
  var timerCount = setTimeout(del,6000);
}

function del(){
  pet_c.style.opacity = "0";

}



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
  
  
  
