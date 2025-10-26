let namamuLek = prompt("Input your name :")
if(namamuLek != "d"){
alert(`Hi ${namamuLek}, Welcomeeee`)
const hamburger = document.getElementById("hamburger")
const atas = document.getElementById("atas")
const tengah = document.getElementById("tengah")
const bawah = document.getElementById("bawah")
tengah.style.display = "block"
hamburger.onclick = function(){
  if(tengah.style.display === "block"){
    tengah.style.display = "none"
    atas.style.position = "absolute"
    atas.style.rotate = "45deg"
    bawah.style.rotate = "-45deg"
  }
  else{
    tengah.style.display = "block"
    atas.style.position = "relative"
    bawah.style.rotate = "0deg"
    atas.style.rotate = "0deg"
  }
}

const kumpulin = document.getElementById("submit")
kumpulin.addEventListener('click',()=>{
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
  },1200)
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
ig.addEventListener("click",()=>{
  body.style.opacity = "0.7"
  load.style.display = "flex"
  setTimeout(()=>{  
    body.style.opacity = "1"
    load.style.display = "none"
    window.location.href = 'https://instagram.com/ptramadian_'
  },1200)
})

function whatssApp(){
  load.style.display = "flex"
  body.style.opacity = "0.7"
  setTimeout(()=>{
    load.style.display = "none"
    body.style.opacity = "1"
    window.location.href= "https://wa.me/6287763628863"
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
const calcLeft = document.getElementById("calcLeft")
const calcRight = document.getElementById("calcRight")

const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
numbers.forEach((number)=>{
  const button = document.createElement("button")
  button.innerHTML = number
  button.onclick = ()=>{
    value.innerHTML += number
  }
  calcLeft.append(button)
})

const operations = ["+","-","x","/"]
operations.forEach((operation)=>{
  const button = document.createElement("button")
  button.innerHTML = operation
  button.addEventListener('click',()=>{
    value.innerHTML += operation
  })
  calcRight.append(button)
})

const del = document.createElement("button")
del.innerHTML = "DEL"
del.addEventListener("click",function(){
  value.innerHTML = value.innerHTML.slice(0 ,-1)
})
calcRight.append(del)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
clear.onclick = ()=>{
  value.innerHTML = "CLEAR THE AREA"
  setTimeout(()=>{
    value.innerHTML = " "
  },1200)
}
calcRight.append(clear)

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

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
let anjay = 0
const warna =["red","black","white","red","green","blue","brown","white","transparent"]
const parallax2 = document.getElementById("parallax2")
bgr.addEventListener("click",()=>{
  anjay++
  parallax2.style.backgroundColor = warna[anjay]
})
calcRight.append(bgr)

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
const botJawab = document.getElementById("botJawab")

function botSay(data){
  return [
    `Hi, Im Jarvis, Who are you?`,
    `Hi ${data?.nama}, Where're you from?`,
    `ohh Youre from ${data?.kota}, whats your hoby?`,
    `Wow ${data?.hobi}, sounds interesting!`,
  ]
}

let userData = [ ]
botJawab.innerHTML = botSay()[0]
let init = 0

function submit(){
  init++
  if(init ===1){
    resposneBot({nama : user.value})
  }
  else if(init === 2){
    responseBot({kota : user.value})
  }
  else if(init === 3){
    responseBot({hobi : user.value})
    user.style.display = "none"
  }
  else if(init === 4){
    botJawab.innerHTML = "Nice to Know Ya !"
    setTimeout(()=>{
      load.style.display = "flex"
      body.style.opacity = "0.7"
    },1000)
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
    botJawab.innerHTML = botSay(jawabanUser)[init]
    user.value = ""
  },1200)
}

}else{
  alert(`Hi ${namamuLek}, YOU SON OF THE..`)
  window.location.reload()
}

