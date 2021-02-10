const customSection = document.querySelector(".custom_section")

let desktopDesc = `<div class='container d-flex'><img class='d-description' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612960805/sellavi/103506/Group_267_euicyq.png' alt='cacao'/></div>`
let mobileDesc = `<div class='container d-flex'><img class='m-description' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612960802/sellavi/103506/Component_3_v9oqjs.png' alt='cacao'/></div>`

let desktopFeatures = `<div class='container d-flex'><img class='d-features' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612963748/sellavi/103506/Group_273_r7kyiz.png' alt='cacao'/></div>`
let mobileFeatures = `<div class='container d-flex'><img class='m-features' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612963673/sellavi/103506/Component_4_o4a0xn.png' alt='cacao'/></div>`



if( screen.width > 480 ) {
  customSection.insertAdjacentHTML("afterbegin", desktopDesc)
  customSection.insertAdjacentHTML("beforeend", desktopFeatures)
} else {
  customSection.insertAdjacentHTML("afterbegin", mobileDesc)
  customSection.insertAdjacentHTML("beforeend", mobileFeatures)
}