var button = document.querySelector(".navLeft");
var close = document.querySelector(".close")
var all = document.querySelector(".all");
var aa = document.querySelector(".A");
var nav = document.querySelector("#nav");
var view = document.querySelector(".view");
button.onclick = function () {
    // close.style.left=60+"vw";
    nav.style.left = 0 + "vw";
    all.style.left = 60 + "vw";
    // close.style.transitionDuration = '500ms';
    nav.style.transitionDuration = '500ms';
    all.style.transitionDuration = '500ms';
    view.style.height = "100vh";
    button.style.display = "none";
    close.style.display = "block";
}
close.onclick = function () {
    nav.style.left = -60 + "vw";
    all.style.left = 0 + "vw";
    close.style.left = 0 + "vw";
    close.style.transitionDuration = '500ms';
    nav.style.transitionDuration = '500ms';
    all.style.transitionDuration = '500ms';
    view.style.height = "100%";
    button.style.display = "block";
    close.style.display = "none";
}
window.onresize = function () {
    var wid = document.documentElement.clientWidth;
    if (wid > 770)
        button.style.display = "none";
    if (wid < 770)
        button.style.display = "block";


}