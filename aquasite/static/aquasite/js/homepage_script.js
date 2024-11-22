var inicio = document.querySelector("#inicio")
var white_btn = document.querySelector("#white_btn")
var dark_btn = document.querySelector("#dark_btn")
var imginicio = document.querySelector("#imginicio")
var nav = document.querySelector(".navbar")
var body = document.querySelector("body")
var card = document.querySelectorAll(".card")
var cardBody = document.querySelectorAll(".card-body")
var info = document.querySelector(".info")
var html = document.documentElement
var cardimgs = document.querySelectorAll(".card-img-top")
var cardtext = document.querySelectorAll(".card-text")

dark_btn.addEventListener("click", function(){
  dark()
})

function dark (){
  body.classList.remove("back-white"), body.classList.add("back-dark")
  inicio.classList.remove("inicio-white"), inicio.classList.add("inicio-dark")
  imginicio.src="/static/aquasite/images/homepage_images/dark_theme_image.jpeg"

  imginicio.classList.remove('side-image')
  
  card.forEach(card => {
    card.style.backgroundColor='black'
  });

  cardimgs.forEach(cardimgs =>{
    cardimgs.style.opacity='90%'
  })

  cardtext.forEach(cardtext=>{
    cardtext.style.color='white'
  })

  info.style.background='linear-gradient(to right, #01707a, transparent)'
  
}

white_btn.addEventListener("click", function(){
  body.classList.add("back-white"), body.classList.remove("back-dark")
  inicio.classList.add("inicio-white"), inicio.classList.remove("inicio-dark")
  imginicio.src="/static/aquasite/images/global_images/logo-claro.png"

  card.forEach(card => {
    card.style.backgroundColor="#a3eef5"
  });

  cardtext.forEach(cardtext=>{
    cardtext.style.color='black'
  })

  imginicio.classList.add('side-image')

})

var cards=document.querySelector(".cards")
var apearCards=100
var contact=document.querySelector('.contact-container')
var apearContact = 300 

window.addEventListener('scroll', function(){
  var scrollPosition=window.scrollY

  if (scrollPosition > apearCards){
    cards.classList.remove('hide')
  } if (scrollPosition > apearContact) {
    contact.classList.remove('hide')
  }
})