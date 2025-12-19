let x = prompt("Masukkan Nama Anda dibawah ini")
if(x != "Dimas" && x != "Geral"){
  alert(`Hi ${x}, Welcome !!`)
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

const hamburger = document.getElementById("hamburger")
const atas = document.getElementById("atas")
const bawah = document.getElementById("bawah")
const tengah = document.getElementById("tengah")
const navMenu = document.getElementById("nav-menu")

tengah.style.display = "block"
hamburger.addEventListener("click",()=>{
  if(tengah.style.display === "block"){
    tengah.style.display = "none"
    atas.style.rotate = "45deg"
    bawah.style.rotate = "-45deg"
    navMenu.style.maxHeight = "500px"
  }else{
    tengah.style.display = "block"
    atas.style.rotate = "0deg"
    bawah.style.rotate = "0deg"
    navMenu.style.maxHeight = "0px"
  }
})

const load = document.getElementById("loading")
const body = document.body

const navbar = document.getElementById("navbar")
window.addEventListener("scroll",()=>{
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop
  if(window.pageYOffset > fixedNav){
    navbar.style.boxShadow = "0 0 9px 0 black"
  }else{
    navbar.style.boxShadow = "none"
  }
})

const ig = document.getElementById("ig")
ig.addEventListener("click",()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href = "https://instagram.com/ptramadian_"
  },1200)
})

function whatssApp(){
    load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href = "https://wa.me/87763628863"
  },1200)
}

const wa = document.getElementById("wa")
wa.onclick = ()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href = "https://wa.me/87763628863"
  },1200)
}

const value = document.getElementById("value")
const calcLeft = document.getElementById("calcLeft")
const calcRight = document.getElementById("calcRight")

const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
numbers.forEach((number)=>{
  const button = document.createElement("button")
  button.innerHTML = number
  button.addEventListener("click",()=>{
    value.innerHTML += number
  })
  calcLeft.append(button)
})

const operations = ["+","-","x","/"]
operations.forEach((operation)=>{
  const button = document.createElement("button")
  button.innerHTML = operation
  button.onclick = ()=>{
    value.innerHTML += operation
  }
  calcRight.append(button)
})

const enter = document.createElement("button")
enter.innerHTML = "ENTER"
enter.addEventListener("click",()=>{
  let ekspresi = value.innerHTML
  ekspresi = ekspresi.replace(/x/g,"*")
  try{
    value.innerHTML = eval(ekspresi)
  }
  catch{
    value.innerHTML = "ERROR"
    setTimeout(()=>{
      value.innerHTML = ""
    },1200)
  }
})
calcRight.append(enter)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
clear.addEventListener("click",()=>{
  value.innerHTML = "CLEAR THE AREA"
  setTimeout(()=>{
    value.innerHTML = " "
  },1200)
})
calcRight.append(clear)

const del = document.createElement("button")
del.innerHTML = "DEL"
del.onclick = ()=>{
  value.innerHTML = value.innerHTML.slice(0, -1)
}
calcRight.append(del)

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
calcRight.append(bgr)

const piano = document.getElementById("chord")
const chords = ["a","c","d","e","f"]
chords.forEach((chord)=>{
  const button = document.createElement("button")
  button.innerHTML = chord
  button.addEventListener("click",()=>{
    const sound = new Audio(`${chord}.wav`)
    sound.play()
  })
  piano.append(button)
})

const user = document.getElementById("userTanya")
const bot = document.getElementById("botJawab")

function botSay(data){
  return[
    `Hi Im DIMS, who are you?`,
    `Hi ${data?.nama}, Where are you from?`,
    `Ouhh youre from ${data?.kota}, Whats yout hobby?`,
    `Wow ${data?.hobi}, thats so interesting!`,
  ]
}

let init = 0
bot.innerHTML = botSay()[0]
let userData =[]

function submit(){
  init ++
  if(init === 1){
    responseBot({nama : user.value})
  }
  else if(init === 2){
    responseBot({kota : user.value})
  }
  else if(init === 3){
    responseBot({hobi : user.value})
    user.style.display = "none"
  }
  else if(init === 4){
    bot.innerHTML = "NICE TO KNOW YA!"
    setTimeout(()=>{
      load.style.display = "flex"
      body.style.opacity = "0.7"   
    },500)
    setTimeout(()=>{
      load.style.display = "none"
      body.style.opacity = "1"
      window.location.reload()
    },2000)
  }
}

function responseBot(jawabanUser){
  userData.push(user.value)
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    user.value = ""
    bot.innerHTML = botSay(jawabanUser)[init]
  },1200)
}
}
else{
  alert("NO NO YA " + x)
  window.location.reload()
}