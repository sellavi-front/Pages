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

if ( !Paths.home && !Paths.checkout) {
  headerWidgets.forEach(item => {
    item.classList.add('colored')
  })
} else console.log(`Error: can't add a 'colored' class`)

