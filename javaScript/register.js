var back = document.getElementById("back_button");
back.onclick = function () {
    window.history.go(-1);
}
var ree = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

var email = document.getElementById("email");
var email_d = document.getElementById("email_description");
var reemail_d = document.getElementById("reemail_description");

email.oninput = function () {
    if (ree.test(email.value)) {
        email.style.border = "1px solid #000";
        email_d.innerHTML = "您的电子邮件地址用于确认购买并帮助您管理对 Sbeam 帐户的访问。"
        email_d.style.color = " #c6d4df";
    } else if(email.value === ""){
        email.style.border = "1px solid red";
        email_d.innerHTML = "<br>您必须输入此项";
        email_d.style.color = "red";
    }else {
    email_d.innerHTML = "<br>您输入的格式有误";
    email_d.style.color = "red";
    email.style.border = "1px solid red";

    
}
}

reemail.oninput = function(){
    if (reemail.value === email.value) {
        reemail.style.border = "1px solid #000";
        reemail_d.innerHTML = "Sbeam 将向此帐户发送一封用于确认的电子邮件。请通过邮件中的链接验证您的 Sbeam 电子邮件帐户。"
        reemail_d.style.color = " #c6d4df";
    } else if(reemail.value === ""){
        reemail.style.border = "1px solid red";
        reemail_d.innerHTML = "您必须输入此项";
        reemail_d.style.color = "red";
    }else {
    reemail_d.innerHTML = "您输入的邮箱地址与之前输入的不符";
    reemail_d.style.color = "red";
    reemail_d.style.color = "red";

    }
}
console.log(email.value);

var nickName = document.getElementById("nickname");
var nickNameTest = /^([A-Za-z0-9_-]{6,})$/;
var nickNameTest2 = /(?=.[0-9])/;
var nickNameTest3=/(?=.[A-Za-z])/;
var nickName_d = document.getElementById("nickname_description");

nickName.oninput = function(){
    if (nickNameTest.test(nickName.value)&&nickNameTest2.test(nickName.value)&&nickNameTest3.test(nickName.value)){
        nickName.style.border = "1px solid #000";
        nickName_d.innerHTML = ""
    }else if(nickName.value === ""){
        nickName.style.border = "1px solid red";
        nickName_d.innerHTML = "您必须输入此项";
    }else{
        nickName_d.innerHTML = "用户名必须含有一个数字和一个字母,至少6位且不能使用-_之外的符号";
        nickName_d.style.color = "red";
        nickName.style.border = "1px solid red";

    }
}

var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var password_test1= /(?=.[A-Za-z])/;
var password_test2= /(?=.[0-9])/;
var password_test3 = /^([A-Za-z0-9_-]{8,})/;
var password_d = document.getElementById("password_description");
var repassword_d = document.getElementById("repassword_description");

password.oninput = function(){
    if (password_test1.test(password.value) && password_test2.test(password.value) && password_test3.test(password.value)
    &&password.value != nickName.value){
        password.style.border = "1px solid #000";
        password_d.innerHTML = ""
    }else if(password.value === ""){
        password.style.border = "1px solid red";
        password_d.innerHTML = "您必须输入此项";
    }else if(password.value === nickName.value){
        password.style.border = "1px solid red";
        password_d.innerHTML = "密码必须和用户名不一致";
    }
    else{
        password_d.innerHTML = "密码必须包含大小写字母和数字的组合，不能使用特殊字符，且长度在8位以上";
        password_d.style.color = "red";
        password.style.border = "1px solid red";
    }console.log(password.value);

}
repassword.oninput = function(){
    if (repassword.value===password.value){
        repassword.style.border = "1px solid #000";
        repassword_d.innerHTML = ""
    }else if(repassword.value === ""){
        repassword.style.border = "1px solid red";
        repassword_d.innerHTML = "您必须输入此项";
    }else{
        repassword_d.innerHTML = "您输入的密码不一致";
        repassword_d.style.color = "red";
        repassword.style.border = "1px solid red";

    }
}

var re = document.getElementById("rendercaptcha");
var re_d = document.getElementById("rendercaptcha_description");
var re_test = /^J%PMVZ$/;
re.oninput = function(){
    if (re_test.test(re.value)){
        re.style.border = "1px solid #000";
        re_d.innerHTML = ""
    }else if(repassword.value === ""){
        re.style.border = "1px solid red";
        re_d.innerHTML = "您必须输入此项";
    }else{
        re_d.innerHTML = "您输入的验证码不正确";
        re_d.style.color = "red";
        re.style.border = "1px solid red";
}
}




var submit = document.getElementById("submit");
var tt = document.getElementById("form_description");
var form = document.getElementsByTagName("form")[0];
submit.onclick = function(){
    if(ree.test(email.value) && reemail.value === email.value && 
    nickNameTest.test(nickName.value) && password_test1.test(password.value) && 
    password_test2.test(password.value) && repassword.value===password.value
    && password_test3.test(password.value) && re_test.test(re.value)&&nickNameTest2.test(nickName.value)&&nickNameTest3.test(nickName.value)){
        smoothscroll();
        tt.innerHTML = "注册成功，5秒后跳转至登陆界面";
        dia("注册成功~欢迎新人呐🎶~");
        tt.style.color = "green";
        setTimeout('jumpurl()',5000); 
    }else{
        tt.innerHTML = "表单未正确填写";
        dia("给我认真点！");
        tt.style.color = "red";
        smoothscroll();
    }
}


function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}

function jumpurl(){  
    location='../login.html';  
  }  