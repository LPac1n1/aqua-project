var btnlog = document.querySelector("#b-login-screen");
var btncad = document.querySelector("#b-cad-screen");
var body = document.querySelector("body");
var hided = document.querySelector("#hidded")
var show = document.querySelector("#show")
var op = document.querySelector(".op")
var pass = document.querySelector("#floatingPassword")
var logo = document.querySelector(".logo-pags")
var logolog = document.querySelector("#logo-login")
var white_btn = document.querySelector("#white_btn")
var dark_btn = document.querySelector("#dark_btn")
var nav = document.querySelector(".navbar")

btnlog.addEventListener("click", function(){
  body.classList.remove("cadastro-js")
  body.classList.add ("login-js")
})

btncad.addEventListener("click", function(){
  body.classList.remove("login-js")
  body.classList.add ("cadastro-js")
})

dark_btn.addEventListener("click", function(){
  body.classList.add("escuro")
  body.classList.remove("claro")
  logo.src = "/static/aquasite/images/global_images/logo-escura.png"
  logolog.src="/static/aquasite/images/global_images/logo-escura.png"
})

white_btn.addEventListener("click", function(){
  body.classList.remove("escuro")
  body.classList.add("claro")
  logo.src = "/static/aquasite/images/global_images/logo-claro.png"
  logolog.src="/static/aquasite/images/global_images/logo-claro.png"
})

hided.addEventListener("click", function(event){
  event.preventDefault()
  hided.classList.add("hide")
  show.classList.remove("hide")
  pass.type = "text"

})

show.addEventListener("click", function(event){
  event.preventDefault();
  hided.classList.remove("hide")
  show.classList.add("hide")
  pass.type = "password"
})

