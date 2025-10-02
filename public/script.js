const hamburger = document.getElementById("hamburger")
const atas = document.getElementById("atas")
const bawah = document.getElementById("bawah")
const tengah = document.getElementById("tengah")

const load = document.getElementById("loading")
const body = document.body

tengah.style.display = "block"
hamburger.addEventListener("click",()=>{
  if(tengah.style.display === "block"){
    tengah.style.display = "none"
    atas.style.position = "absolute"
    atas.style.rotate = "45deg"
    bawah.style.rotate = "135deg"
  }
  else{
    tengah.style.display = "block"
    atas.style.position ="relative"
    atas.style.rotate = "0deg"
    bawah.style.rotate = "0deg"
  }
})


const navMenu = document.getElementById("nav-menu")

const kumpul = document.getElementById("submit")
kumpul.addEventListener("click",()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.reload()
  },1200)
})

const navbar = document.getElementById("navbar")
window.onscroll = function(){
  const header = this.document.querySelector("header")
  const fixedNav = header.offsetTop

  if(window.pageYOffset > fixedNav){
    navbar.style.boxShadow = "0 0 9px 0 black"
  }
  else{
    navbar.style.boxShadow = "none"
  }
}

const instagram = document.getElementById("ig")
instagram.addEventListener("click",()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href = "https://instagram.com/ptramadian_"
  },1200)
})

const whatssapp = document.getElementById("wa")
whatssapp.addEventListener("click",()=>{
  load.style.display = 'flex'
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href = "https://wa.me/+6287763628863"
  },1200)
})

function whatssApp(){
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
  load.style.display = "none"
  body.style.opacity = "1"
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

const value = document.getElementById("value")
const calcRight = document.getElementById("calcRight")
const calcLeft = document.getElementById("calcLeft")

const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
numbers.forEach((number)=>{
  const button = document.createElement("button")
  button.innerHTML = number
  calcLeft.append(button)
  button.addEventListener("click",()=>{
    value.innerHTML += number
  })
})

const operations = ["+","-","x","/"]
operations.forEach((operation)=>{
  const button = document.createElement("button")
  button.innerHTML = operation
  calcRight.append(button)
  button.addEventListener("click",()=>{
    value.innerHTML += operation
  })
})

const del = document.createElement("button")
del.innerHTML = "DEL"
calcRight.append(del)
del.addEventListener("click",()=>{
  value.innerHTML = value.innerHTML.slice(0, -1)
})

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
calcRight.append(clear)
clear.addEventListener("click",()=>{
  value.innerHTML = "CLEAR THE AREA..."
  setTimeout(()=>{
      value.innerHTML = " "
  },1200)
})

const enter = document.createElement("button")
enter.innerHTML = "ENTER"
calcRight.append(enter)
enter.addEventListener("click",()=>{
  let ekspresi = value.innerHTML
  ekspresi = ekspresi.replace(/x/g,"*")
  try{
    value.innerHTML = eval(ekspresi)
  }
  catch{
    value.innerHTML ="ERROR"
    setTimeout(()=>{
      value.innerHTML = ""
    },1200)
  }
})

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
calcRight.append(bgr)
const warna =["red","white","blue","black","transparent","brown","black","white","black","white","transparent"]
let isik = 0
const chaD = document.getElementById("chatbot")

bgr.addEventListener("click",()=>{
  isik++
  chaD.style.backgroundColor = warna[isik]
})

const piano = document.getElementById("chord")
const chords = ["a","c","d","e","f"]
chords.forEach((chord)=>{
  const button = document.createElement("button")
  button.innerHTML = chord
  piano.append(button)
  button.addEventListener("click",()=>{
    const sound = new Audio(`${chord}.wav`)
    sound.play()
  })
})

const user = document.getElementById("userTanya")
const botAnswer = document.getElementById("botJawab")

function botSay(data){
  return[
    `Hi, What's your name?`,
    `Hello ${data?.nama}, where are you from?`,
    `Ouh youre from ${data?.kota}, Whats your favourite game?`,
    `Wow ${data?.game}, thats interesting!`,
  ]
}

let init = 0
let userData =[ ]
botAnswer.innerHTML = botSay()[0]

function submit(){
  init++
  if(init === 1){
    responseBot({nama : user.value})
  }
  else if(init === 2){
    responseBot({kota : user.value})
  }
  else if(init === 3){
    responseBot({game : user.value})
    user.style.display = "none"
  }
  else if(init === 4){
    botAnswer.innerHTML = "Nice to meet you!"
  }
}

function responseBot(jawabanUser){
  userData.push(user.value)
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    user.value = " "
    load.style.display = "none"
    body.style.opacity = "1"
    botAnswer.innerHTML = botSay(jawabanUser)[init]
  },1200)
}
