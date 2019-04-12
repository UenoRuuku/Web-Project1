var active = document.getElementsByClassName("container_login")[0];
var unactive = document.getElementsByClassName("container_login_unactive")[0];
var exit = document.getElementById("exit");


var search_button = document.getElementsByClassName("search_btn iconfont")[0];
var search_area = document.getElementsByClassName("search_text")[0];
var search_engine = document.getElementsByClassName("search_area")[0];
var conversation_text = document.getElementById("conversation_text");
var conversation_area = document.getElementsByClassName("pet_conversation")[0];
var pet = document.getElementsByClassName("pet")[0];
var timerCount = null;


checkCookie();

exit.onclick = function () {
  delCookie('username');
  checkCookie();
}


function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
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



function checkCookie() {
  username = getCookie('username');
  if (username != null && username != "") {
    active.className = "container_login_unactive";
    unactive.className = "container_login"
    dia("欢迎Ruuku~");
  }
  else {
    unactive.className = "container_login_unactive";
    active.className = "container_login"
  }
}


search_button.onclick = function () {
  if (search_area.value === "") {
    dia("搜索内容不能为空~");
  } else {
    search_engine.action = "search.html";
    search_engine.submit();
  }
}

pet.onclick = ran;

function ran() {
  var choice = Math.floor(Math.random() * 6 + 1);
  switch (choice) {
    case 1: dia("博丽神社的香火钱🎵~");
      break;
    case 2: dia("再摸我的话，小学生也不会理你");
      break;
    case 3: dia("変態!ロール!");
      break;
    case 4: dia("欢迎光临Sbeam艺术交易平台~");
      break;
    case 5: dia("月の光が美しい");
    break;
    case 6:dia("不能拖拽是因为作者偷懒呐……");
    break;

  }
}

var timerCon = setInterval(r, 5000);


function dia(content) {
  clearTimeout(timerCount);
  conversation_area.style.opacity = "1";
  conversation_text.innerHTML = content;
  timerCount = setTimeout(del, 10000);
}

function del() {
  conversation_area.style.opacity = "0";

}

function r(){
  var random = Math.floor(Math.random() * 5 + 1);
  if(random===1){
    ran();
  }
}





// 流产的拖拽项目



// var mouseX, mouseY, objX, objY;
// var dragging = false;

// pet.style.left = "1050px";
// pet.style.top = "200px";

// pet.onmousedown = function (event) {
//   event = event || window.event;
//   dragging = true;
//   mouseX = event.clientX;
//   mouseY = event.clientY;
//   objX = parseInt(pet.style.left);
//   objY = parseIntpet.style.top;
//   console.log("mouseX"+objX);
//   console.log(event.clientX);
// }

// document.onmousemove = function (event) {
//   event = event || window.event;
//   if (dragging) {
//     pet.style.left = event.clientX - mouseX + objX+"px";
//     pet.style.top = event.clientY - mouseY + objY+"px";
//     // console.log("mouseX"+mouseX);
//     // console.log(event.clientX);  
//   }

// }

// document.onmouseup = function () {
//   dragging = false;
// }