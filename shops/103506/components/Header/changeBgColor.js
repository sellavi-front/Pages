import Paths from "../../path/paths.js"


/*let changeBgColor = (color) => {*/
  const headerWrapper = document.querySelector(".header-wrapper")
  if ( !Paths.home ) {
    console.log(1)
    headerWrapper.classList.add('colored').style.background = `#efdfc5`
    /*document.querySelector(".header-wrapper.colored").style.background = `#efdfc5`*/
  }

