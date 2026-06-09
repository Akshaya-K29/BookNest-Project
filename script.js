var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){

    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

 var container = document.querySelector(".container")
 var addbook = document.getElementById("add-book")
 var booktitleinput = document.getElementById("Book-title-input")
  var bookauthorinput = document.getElementById("Book-Author-input")
   var bookdescriptioninput = document.getElementById("book-description-input")

   var bookcount = document.getElementById("book-count")
   
   
addbook.addEventListener("click",function(event){

    event.preventDefault()

    if(
    booktitleinput.value.trim() === "" ||
    bookauthorinput.value.trim() === "" ||
    bookdescriptioninput.value.trim() === ""
){
    alert("Please fill all fields")
    return
} 


var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML= `<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>

<button onclick="deletebook(event)">Delete</button>`
container.append(div)
booktitleinput.value = ""
bookauthorinput.value = ""
bookdescriptioninput.value = ""
popupoverlay.style.display="none"
popupbox.style.display="none"
updateCount()
   })

   function updateCount(){
    bookcount.textContent =
    document.querySelectorAll(".book-container").length
}

  function deletebook(event)
{
    event.target.parentElement.remove()
    updateCount()
}
updateCount()