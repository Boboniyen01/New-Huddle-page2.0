let clickButton = document.getElementById("1st-btn")
console.log(clickButton)
  let Bodycolor = document.body

function changeBackgroundColor(){
if (clickButton.textContent == "Register"){
  clickButton.textContent ="Registered"
  Bodycolor.style.backgroundColor =" hsl(300, 69%, 71%)" 
}else { 
  clickButton.textContent= "Register" // i had issue here because i used 3 equals to instead of one
  Bodycolor.style.backgroundColor ="hsl(257, 40%, 49%)" 
}

console.log(clickButton)
}

clickButton.addEventListener("click", changeBackgroundColor )