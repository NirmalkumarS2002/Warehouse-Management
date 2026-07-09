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

//errorpage

let errorpage=document.querySelectorAll(".errorpage")
errorpage.forEach((error)=>{
    error.addEventListener("click",()=>{
        window.location.href="404.html"
    })
})
