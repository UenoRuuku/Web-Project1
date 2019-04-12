var top_up = document.getElementById("top_up");
var QRcode = document.getElementById("QRcode");

top_up.onclick = function(){
    QRcode.style.display = "block";
}
QRcode.onclick = function(){
    QRcode.style.display = "none";

}