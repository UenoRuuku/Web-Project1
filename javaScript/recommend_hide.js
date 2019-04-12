var description = document.getElementsByClassName("img_description");
var oLi = document.getElementsByTagName("li");
// alert("载入成功");

for(var i = 0 ; i<description.length ;  i++){
    oLi[i].index=i;
oLi[i].onmouseover = function(){
    description[this.index].style.display = "none";
}
oLi[i].onmouseout = function(){
    description[this.index].style.display = "flex";
}
oLi[i].onclick = function(){
    window.location.href='art_detail.html';
}
}