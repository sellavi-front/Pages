import Paths from "../../../../path/paths.js"

if( !(location.pathname === '/') ) {
  console.log(1)
  document.querySelector(".logo").classList.add('logo-edited')
} else document.querySelector(".logo").classList.remove('logo-edited')