let s = prompt("Masukkan nama anda")
if(s != "Dimas" && s!= "Dimass"){
  alert("Hi "+s+", Welcome")
  
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
const tengah = document.getElementById("tengah")
const bawah = document.getElementById("bawah")
const navMenu = document.getElementById("nav-menu")

tengah.style.display = "block"
hamburger.addEventListener("click",()=>{
  if(tengah.style.display === "block"){
    tengah.style.display = "none"
    atas.style.position = "absolute"
    bawah.style.rotate = "-45deg"
    atas.style.rotate = "45deg"
    navMenu.style.maxHeight = "500px"
  }else{
    tengah.style.display = "block"
    atas.style.position = "relative"
    atas.style.rotate = "0deg"
    bawah.style.rotate = "0deg"
    navMenu.style.maxHeight = "0px"
  }
})

const navbar = document.getElementById("navbar")
window.onscroll = ()=>{
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop
  if(window.pageYOffset > fixedNav){
    navbar.style.boxShadow = "0 0 9px 0 black"
  }else{
    navbar.style.boxShadow = "none"
  }
}

const load = document.getElementById("loading")
const body = document.body

const ig = document.getElementById("ig")
ig.addEventListener("click  ",()=>{
    load.style.display = "flex"
    body.style.opacity = "0.7"
    setTimeout(()=>{
      load.style.display = "none"
      body.style.opacity = "1"
      window.location.href = "https://instagram.com/ptramadian_"
    },1200)
})

const kumpul = document.getElementById("submit")
kumpul.addEventListener("click",()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
  },1200)
})

function whatssApp(){
    load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href= "https://wa.me/87763628863"
  },1200)
}

const value = document.getElementById("value")
const calcRight = document.getElementById("calcRight")
const calcLeft = document.getElementById("calcLeft")

const numbers =["1","2","3","4","5","6","7","8","9","(","0",")"]
numbers.forEach((number)=>{
  const button = document.createElement("button")
  button.innerHTML = number
  button.onclick = ()=>{
    value.innnerHTML += number
  }
  calcLeft.append(button)
})

const operations = ["+","-","x","/"]
operations.forEach((operation)=>{
  const button = document.createElement("button")
  button.innerHTML = operation
  button.addEventListener("click",()=>{
    value.innerHTML += operation
  })
  calcRight.append(button)
})

const enter = document.createElement("button")
enter.innerHTML = "ENTER"
enter.addEventListener("click",()=>{
  let ekspresi = value.innerHTML
  ekspresi = ekspresi.replace(/x/g,"*")
  try{
    value.innerHTML = eval(ekspresi)
  }catch{
    value.innerHTML = "ERROR"
    setTimeout(()=>{
      value.innerHTML = ""
    },1200)
  }
})
calcRight.append(enter)

const del = document.createElement("button")
del.innerHTML = "DEL"
del.addEventListener("click",()=>{
  value.innerHTML = value.innerHTML.slice(0, -1)
})
calcRight.append(del)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
clear.onclick= ()=>{
  value.innerHTML = "CLEAR THE AREA"
  setTimeout(()=>{
    value.innerHTML = ""
  },1200)
}
calcRight.append(clear)

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
calcRight.append(bgr)

const piano = document.getElementById("chord")
const chords = ["a","c","d","e","f"]
chords.forEach((chord)=>{
  const button = document.createElement("button")
  button.innerHTML = chord
  button.onclick = ()=>{
    const sound = new Audio(`${chord}.wav`)
    sound.play()
  }
  piano.append(button)
})

const user = document.getElementById("userTanya")
const bot = document.getElementById("botJawab")

function botSay(data){
  return[
    `Hi, Im jarvis, who are you?`,
    `Hi ${data?.nama}, Where are you from?`,
    `Ouh youre from ${data?.kota}, whats your hobby?`,
    `Wow ${data?.hobi}, such an interesting hobby!`
  ]
}

let init =0
let userData = []
bot.innerHTML = botSay()[0]

function submit(){
  init++
  if(init === 1){
    responseBot({nama : user.value})
  }else if(init === 2){
    responseBot({kota : user.value})
  }else if(init === 3){
    responseBot({hobi : user.value})
    user.style.display = "none"
  }
  else if(init === 4){
    bot.innerHTML = "Nice to know Ya !"
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
    bot.innerHTML = botSay(jawabanUser)[init]
    user.value = ""
  },1200)

}
}else{
  alert("nono ya " + s)
  window.location.reload()
}