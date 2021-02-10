import Paths from "../../path/paths.js"

const headerWrapper = document.querySelector(".header-wrapper")
if ( !Paths.home ) {
  console.log(1)
  headerWrapper.classList.add('colored')
  document.querySelector(".header-wrapper.colored").style.background = '#eed6ae'
}