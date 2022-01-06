let view=document.querySelector(".main__content--view")
let contin=document.querySelector(".main__content--continue")
let hide=document.querySelector(".main__content--none")
let menuButton=document.querySelector(".header__menu--button")
let menu=document.querySelector(".header__inner")
let headerLogo=document.querySelector(".header__logo")
let headerClose=document.querySelector(".header__menu--close")


view.addEventListener("click", function(event){
    contin.style.display="block"
    view.style.display="none"
    event.preventDefault()
}, false)

hide.addEventListener("click", function(event) {
    contin.style.display="none"
    event.preventDefault()
    view.style.display="block"
}, false)

menuButton.addEventListener("click",()=>{
    menu.classList.toggle("header__inner--active")
    menuButton.classList.toggle("header__menu--button--hide")
} )

headerClose.addEventListener("click", ()=>{
    menu.classList.remove("header__inner--active")
    menuButton.classList.remove("header__menu--button--hide")
})
