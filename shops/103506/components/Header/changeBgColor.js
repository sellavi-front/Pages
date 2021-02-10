import Paths from "../../path/paths.js"

const headerWidgets = [
  document.querySelector(".header-wrapper"),
  document.querySelector(".mobile-navigation-wrapper"),
  document.querySelector("#cart"),
  document.querySelector("#wishlist"),
  document.querySelector("#login"),
  document.querySelector(".header .header-search button"),
  document.querySelector("#search > div.search_field > input")
]

if ( !Paths.home ) {
  headerWidgets.forEach(item => {
    item.classList.add('colored')
  })
  document.querySelector("body.ltr> div > header > div.header-wrapper > div.container-fluid.d-flex > div.logo > a > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
}

