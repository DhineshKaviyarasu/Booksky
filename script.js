var overlay=document.querySelector(".overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbtn=document.getElementById("add-popupbutton")
var cancelbtn=document.getElementById("cancel-popup")
// addpopupbtn.addEventListener("click",function(){
//   overlay.style.display="block"
//   popupbox.style.display="block"
// })

function popup(){
  overlay.style.display="block"
  popupbox.style.display="block"
}
cancelbtn.addEventListener("click", function(event)
{
  event.preventDefault()
  overlay.style.display="none"
  popupbox.style.display="none"

})


var container=document.querySelector(".container-box")
var addbook=document.getElementById("add-book")
var bookinput=document.getElementById("book-title-input")
var authorinput=document.getElementById("book-author-input")
var bookdesc=document.getElementById("book-desc-input")

addbook.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","container")
  div.innerHTML=`<h2>${bookinput.value}</h2>
 <h3>${authorinput.value}</h3>
 <p>${bookdesc.value}</p>
 <button class="delete-btn" onclick="deletebook(event)">Delete</button>`
container.append(div)
overlay.style.display="none"
popupbox.style.display="none"
})

function addbooktoweb(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","container")
  div.innerHTML=`<h1>${bookinput.value}</h1>
 <h5>${authorinput.value}</h5>
 <p>${bookdesc.value}</p>
 <button class="delete-btn" onclick="deletebook(event)">Delete</button>`
container.append(div)
overlay.style.display="none"
popupbox.style.display="none"
}

function deletebook(event){
  event.target.parentElement.remove()
}