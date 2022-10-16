import "./style.css";

// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

//COOKIES
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks(){
    cookieboks.classList.add("hidden");
    sessionStorage.setItem("fjerncookieboks", true);
}

if(sessionStorage.getItem("fjerncookieboks")){
    cookieboks.classList.add("hidden");
}