const customSection = document.querySelector(".custom_section")
let desktop = `<div class='container d-flex'><img class='d-features' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612960805/sellavi/103506/Group_267_euicyq.png' alt='cacao'/></div>`
let mobile = `<div class='container d-flex'><img class='m-features' src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612960802/sellavi/103506/Component_3_v9oqjs.png' alt='cacao'/></div>`

if( screen.width > 480 ) {
  customSection.insertAdjacentHTML("afterbegin", desktop)
} else {
  customSection.insertAdjacentHTML("afterbegin", mobile)
}