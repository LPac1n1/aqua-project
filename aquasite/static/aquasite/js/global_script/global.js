var white_btn = document.querySelector("#white_btn")
var dark_btn = document.querySelector("#dark_btn")
var nav = document.querySelector(".navbar")

dark_btn.addEventListener("click", function(){
  dark_btn.classList.add("hide")
  white_btn.classList.remove("hide")
  nav.classList.remove("navcolor-white"), nav.classList.add("navcolor-dark")
})

white_btn.addEventListener("click", function(){
  nav.classList.add("navcolor-white"), nav.classList.remove("navcolor-dark")
  white_btn.classList.add("hide")
  dark_btn.classList.remove("hide")
})