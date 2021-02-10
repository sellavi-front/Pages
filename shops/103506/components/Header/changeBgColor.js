import Paths from "../../path/paths.js"


/*let changeBgColor = (color) => {*/
  const headerWrapper = document.querySelector(".header-wrapper")
  if ( !Paths.home ) {
    console.log(1)
    headerWrapper.classList.add('colored')
    document.querySelector(".header-wrapper.colored").style.backgroundColor = `#efdfc5 !important`
  } else headerWrapper.style.backgroundColor = `transparent !important`

