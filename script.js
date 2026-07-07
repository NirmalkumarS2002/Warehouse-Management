//menu toggle
const menubtn=document.querySelector(".menubtn")
const closebtn=document.querySelector(".closebtn")
const menubar=document.querySelector(".menubar")

menubtn.addEventListener("click",()=>{
    menubar.classList.add("visible")
})

closebtn.addEventListener("click",()=>{
    menubar.classList.remove("visible")
})

