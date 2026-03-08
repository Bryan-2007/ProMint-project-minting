const loginBtn = document.querySelector(".login-button");
const popup = document.querySelector(".login-popup");
const closeBtn = document.querySelector(".back");
const blur_effect = document.querySelector(".blur-effect");

loginBtn.onclick = function(){
    popup.style.display = "block";
    blur_effect.style.display = "block"
}

closeBtn.onclick = function(){
    popup.style.display = "none";
    blur_effect.style.display = "none";
}