/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
var food = 100
var space = 1
setInterval(()=>{
  document.getElementById("food").innerHTML = "You have "+food+" food. You consume 5 food per space."
  document.getElementById("space").innerHTML = "You are on space "+space+". Get to space 30 to win!"
  if(space >= 30) document.body.innerHTML = "You made it to Elsewhere!"
  if(food == 0) document.body.innerHTML = "You lose because you starved to death..."
},50)
function advance() {
  if(Math.random() * 6 <= 1) securityPlanes()
  else if(Math.random() * 5 <= 1) fish()
  else {
    space++
    food-=5
  }
  if(Math.random() * 9 <= 1) {
    chooseOne()
  }
}
function securityPlanes() {
  document.getElementById("secplan").style.display = "block"
}
function snowmem() {
  if(Math.random() * 6 <= 1) document.body.innerHTML = "You lose because you didn't do it correctly!"
  else document.getElementById("secplan").style.display = "none"
}
function fish() {
  document.getElementById("fish").style.display = "block"
  document.getElementById("chooseOne").style.display = "none"
}
function fishInternal() {
  if(Math.random() * 3 <= 1) document.getElementById("fText").innerHTML = "You didn't get any food..."
  else if(Math.random() * 2 <= 1) {
    document.getElementById("fText").innerHTML = "You got 5 food!"
    food+=5
  }
  else {
    document.getElementById("fText").innerHTML = "You got 10 food!"
    food+=10
  }
  document.getElementById("fish").style.display = "none"
}
function chooseOne() {
  document.getElementById("chooseOne").style.display = "block"
}
function burst() {
  space += Math.floor(Math.random()*3)+2
  document.getElementById("chooseOne").style.display = "none"
}