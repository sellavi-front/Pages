import Paths from "../../path/paths.js"

const headerWrapper = document.querySelector(".header-wrapper")
if ( !Paths.home ) {
  headerWrapper.classList.add('colored')
  headerWrapper.style.background = '#eed6ae'
}