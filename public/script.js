const hamburger = document.getElementById("hamburger")
const atas = document.getElementById("atas")
const tengah = document.getElementById("tengah")
const bawah = document.getElementById("bawah")

const load = document.getElementById("loading")
const body = document.body

const navMenu = document.getElementById("nav-menu")
tengah.style.display = "block"

hamburger.addEventListener("click",()=>{
    if(tengah.style.display === "block"){
        tengah.style.display = "none"
        atas.style.rotate = "45deg"
        atas.style.position = "absolute"
        bawah.style.rotate = "-45deg"
        navMenu.style.maxHeight = "500px"
    }
    else{
        atas.style.position = "relative"
        tengah.style.display = "block"
        atas.style.rotate = "0deg"
        bawah.style.rotate = "0deg"
        navMenu.style.maxHeight = "0"
    }
})

const navbar = document.getElementById("navbar"); // typo: getElemebtById
window.onscroll = function () {
    const header = document.querySelector("header"); // lebih aman daripada byId("header")
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        navbar.style.borderBottom = "1px solid black";
        navbar.style.boxShadow = "0px 0px 9px 0px black";
    } else {
        navbar.style.borderBottom = "none"; // biar hilang pas scroll ke atas lagi
         navbar.style.boxShadow = "none";
    }
};

const ig = document.getElementById("ig")
ig.addEventListener("click",()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
  window.location.href="https://instagram.com/ptramadian_"
  },1200)
  
})

const wa= document.getElementById("wa")
wa.addEventListener("click",()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
window.location.href="https://wa.me/+6287763628863"
  },1200)
    
})

function whatssApp(){
    load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
window.location.href="https://wa.me/+6287763628863"
  },1200)
    
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("fade-left")) {
        entry.target.classList.add("show-left");
      }
      if (entry.target.classList.contains("fade-right")) {
        entry.target.classList.add("show-right");
      }
      if(entry.target.classList.contains("fade-bottom")){
        entry.target.classList.add("show-bottom");
      }
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-left, .fade-right, .fade-bottom").forEach(el => observer.observe(el));


