function myFunction(){
  let x = document.getElementById("about")
  let plus = document.getElementById("plus")
  let minus = document.getElementById("minus")



if(x.classList.contains("hidden")) {
  x.classList.remove("hidden")
  minus.classList.remove("hidden")
  plus.classList.add("hidden")
} else {
  x.classList.add("hidden")
  plus.classList.remove("hidden")
  minus.classList.add("hidden")
}
}
