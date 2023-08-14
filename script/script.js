'use strict';

//inputs
const container = document.querySelector(".img-container")
const buttons = document.querySelectorAll(".btn")
const imagesBtnContainer = document.querySelector(".images-btns")
//outputs

//global variable
const imgList = ["Park", "Hotel", "Resort", "Tree", "Sunset", "Lake", "Desert", "Bridge"] // [0, 1, 2]
let index = 0 // initial index for imgList while load

//functions
const init = () => {
    generateButtons(imgList)
}

const btnCount = () => {
    const imageBtn = document.createElement("button")
    imageBtn.classList.add("round")
    imagesBtnContainer.appendChild(imageBtn)

    const buttonArray = imagesBtnContainer.querySelectorAll(".round")
    // console.log(buttonArray)
    buttonArray.forEach((ele, btnindex, arr) => {
        if (btnindex === 0) {
            ele.classList.add("active")
        }
    })
}

const generateButtons = (img) => {
    imagesBtnContainer.innerHTML = ""
    img.forEach((btn) => {
        btnCount(btn)
        console.log(btn)
    })
}

const updateActiveButton = () => {
    const buttonArray = imagesBtnContainer.querySelectorAll(".round")
    // console.log(buttonArray)
    buttonArray.forEach((ele, btnindex, arr) => {
        if (btnindex === index) {
            ele.classList.add("active")
        } else {
            ele.classList.remove("active")
        }
    })
}

//events
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("btn-left")) {
            console.log("yes I'm left")
            index--;
            console.log(index)
            if (index < 0) {
                index = imgList.length - 1
                console.log(index)
            }
        } else {
            console.log("yes I'm right")
            index++;
            console.log(index)
            if (index === imgList.length) {
                index = 0
                console.log(index)
            }
        }
        container.style.background = `url("assets/${imgList[index]}.jpg") center/cover fixed no-repeat`
        updateActiveButton()
    })
})

//initial settings
init();
