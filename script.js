let btn = document.querySelector(".btnShow")
let enquire = document.querySelector(".enquire")

btn.addEventListener("click", () => {
    enquire.classList.add("show")
})
let hide = document.querySelector(".hide")
hide.addEventListener("click", () => {
    enquire.classList.remove("show")
})

let micon = document.querySelector(".hideIcon i")
let nav = document.querySelector("nav")
micon.addEventListener("click", () => {
    nav.classList.toggle('showMenu')
    micon.classList.toggle('fa-bars')
    micon.classList.toggle('fa-xmark')
})








let gallary = document.querySelector(".gallary")
// console.log(gallary.innerHtml)
let gallaryOverlay = document.querySelector(".gallaryOverlay")
// console.log(gallaryOverlay)
let gallaryModal = document.querySelector(".gallaryModal")

let currentImg = document.querySelector(".gallaryModal img")
// console.log(currentImg)
gallary.addEventListener("click", (e) => {
    // console.log(gallary)
    if (e.target.src !== undefined) {
        gallaryOverlay.classList.add("showOverlay")
        // console.log("shoeOverlay")
        gallaryModal.classList.add("gallaryModalShow")
        currentImg.src = e.target.src
        // console.log(gallary)
    }
})

gallaryOverlay.addEventListener("click", () => {
    gallaryOverlay.classList.remove("showOverlay")
    gallaryModal.classList.remove("gallaryModalShow")
    currentImg.src = e.target.src
})






let allTabs = document.querySelectorAll(".container ul li")
// console.log(allTabs)
let allContent = document.querySelectorAll(".AreaContent")
// console.log(allContent)

allTabs.forEach((Element, index) => {
    Element.addEventListener("click", () => {
        Element.classList.add("activeTab")
        allContent[index].classList.add('activeTabContent')
        // console.log(allTabs)
        allTabs.forEach((el, i) => {
            // console.log(allTabs)
            if (i != index) {
                el.classList.remove("activeTab")
                allContent[i].classList.remove('activeTabContent')
                // allTabs[i].classList.remove('activeTabContent')
                // console.log(allContent)

            }
        })
    })
})

