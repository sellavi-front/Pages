import Paths from "../../path/paths.js"

const headerWrapper = document.querySelector(".header-wrapper")
const burger = document.querySelector(".mobile-navigation-wrapper")
if ( !Paths.home ) {
  console.log(1)
  headerWrapper.classList.add('colored')
  burger.classList.add('colored')
}

