const customSection = document.querySelector(".custom_section")
let desktop = `<img src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612960805/sellavi/103506/Group_267_euicyq.png' alt='cacao'/>`
let mobile = `<img src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612960802/sellavi/103506/Component_3_v9oqjs.png' alt='cacao'/>`

if( screen.width > 480 ) {
  customSection.insertAdjacentHTML("afterbegin", desktop)
} else {
  customSection.insertAdjacentHTML("afterbegin", mobile)
}