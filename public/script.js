let namaLu = prompt("Masukkan nama")
if(namaLu !="Dimas"){
  alert("HOI " +namaLu)
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("fade-left")) {
          entry.target.classList.add("show-left");
        }
        if (entry.target.classList.contains("fade-right")) {
          entry.target.classList.add("show-right");
        }
        if (entry.target.classList.contains("fade-bottom")) {
          entry.target.classList.add("show-bottom");
        }
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".fade-left, .fade-right, .fade-bottom")
    .forEach(el => observer.observe(el))

    const hamburger = document.getElementById("hamburger")
    const atas = document.getElementById('atas')
    const tengah = document.getElementById("tengah")
    const bawah = document.getElementById("bawah")
    const navMenu = document.getElementById("nav-menu")
    tengah.style.display = "block"

    hamburger.addEventListener("click",()=>{
      if(tengah.style.display === "block"){
        tengah.style.display = "none"
        atas.style.rotate = "45deg"
        bawah.style.rotate = "-45deg"
        atas.style.position = "absolute"
        navMenu.style.maxHeight = "500px"
      }else{
        tengah.style.display = "block"
        atas.style.position = "relative"
        atas.style.rotate = "0deg"
        navMenu.style.maxHeight = "0px"
        bawah.style.rotate = "0deg"
      }
    })

    const load = document.getElementById("loading")
    const body = document.body

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

    const wa = document.getElementById("wa")
    wa.addEventListener("click",()=>{
      load.style.display = "flex"
      body.style.opacity = "0.7"
      setTimeout(()=>{
        load.style.display = "none"
        body.style.opacity = "1"
        window.location.href = "https://wa.me.6287763628863"
      },1200)
    })

    function whatssApp(){
      load.style.display = "flex"
      body.style.opacity = '0.7'
      setTimeout(()=>{
        load.style.display = "none"
        body.style.opacity = "1"
        window.location.href= "https://wa.me.6287763628863"
      },1200)
    }

    const kumpul = document.getElementById("submit")
    kumpul.addEventListener("click",()=>{
      load.style.display = "flex"
      body.style.opacity = "0.7"
      setTimeout(()=>{
        load.style.display = "none"
        body.style.opacity = "1"
      },1200)
    })

    const calcLeft = document.getElementById("calcLeft")
    const calcRight = document.getElementById("calcRight")
    const value = document.getElementById("value")

    const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
    numbers.forEach((n)=>{
      const button = document.createElement("button")
      button.innerHTML = n
      button.addEventListener("click",()=>{
        value.innerHTML = value.innerHTML + 1
      })
      calcLeft.append(button)
    })

    const operations = ["+","-","x","/"]
    operations.forEach((n)=>{
      const button = document.createElement("button")
      button.innerHTML = n
      button.addEventListener("click",()=>{
        value.innerHTML += n
      })
      calcRight.append(button)
    })

    const enter = document.createElement("button")
    enter.innerHTML = "ENTER"
    enter.addEventListener("click",()=>{
      let nilai = value.innerHTML
      nilai = nilai.slice("x","*")
      try{
        value.innerHTML = eval(nilai)
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
    clear.addEventListener("click",()=>{
      value.innerHTML = "CLEAR THE AREA.."
      setTimeout(()=>{
        value.innerHTML = ""
      },1200)
    })
    calcRight.append(clear)

    const bgr = document.createElement("button")
    bgr.innerHTML = "BGR"
    calcRight.append(bgr)

    const piano = document.getElementById("chord")
    const chords = ["a","c","d","e","f"]
    chords.forEach((c)=>{
      const button = document.createElement("button")
      button.innerHTML = c
      button.addEventListener("click",()=>{
        const sound = new Audio(`${c}.wav`)
        sound.play()
      })
      piano.append(button)
    })

    const user = document.getElementById("userTanya")
    const bot = document.getElementById("botJawab")
    
    function botSay(data){
      return[
        `Hello im dims, who are you?`,
        `Hi ${data?.nama}, where are you from?`,
        `Ouh youre from ${data?.kota}, whats your hobby?`,
        `Wow ${data?.hobi}, such an interesting Hobby!`
      ]
    }

    let init = 0
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
        bot.innerHTML = "Nice to know ya"
        setTimeout(()=>{
          load.style.display = "flex"
          body.style.opacity = "0.7"
        },1000)
        setTimeout(()=>{
          load.style.display = "none"
          body.style.opacity = "1"
          winndow.loaction.reload()
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
        bot.innerHTML = botSay(jawabanUser)[ini]
      },1200)
    }


}else{
  alert("NONO " +namaLu)
}