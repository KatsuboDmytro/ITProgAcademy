const hamburger = document.querySelector(".hamburger"),
navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
})
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove(".active");
    navigation.classList.toggle("active");
}))