var login = document.getElementById("login_button");
var username = document.getElementById("username");
var password = document.getElementById("password");
var description = document.getElementById("id_description");
var form = document.getElementById("form");


login.onclick = function(){
    if(username.value==="Ruuku"&&password.value==="Ruukuniubi"){
        setCookie('username','Ruuku',365);
        setTimeout('window.history.go(-1)',5000);
        description.innerHTML="登录成功，5秒后跳转至原页面";
        dia("登录成功~歓迎いたします")
        description.style.color="green";
        // form.action="index.html"
        // form.submit();
    }else if(username.value==="Ruuku"&&password.value!="Ruukuniubi"){
        description.style.color="red";
        description.innerHTML="密码错误";
        dia("密码错误QAQ")
    }
    else if(username.value===""||password.value===""){
        description.style.color="red";
        description.innerHTML="用户名或密码不能为空";
        dia("用户名或密码不能为空!");
    }else{
        description.style.color="red";
        description.innerHTML="用户不存在";
        dia("哈？真有你这个人嘛？")
    }
}




//下面这个函数用来设置cookie 
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+"path=/";
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
  
