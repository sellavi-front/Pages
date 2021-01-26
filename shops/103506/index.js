import "./docs/requisites.js"
import Paths from "./path/paths.js"
import Banner from "./blocks/banner/banner.js"
import "./blocks/header/header.js"

if(Paths.home) {
  let MainBanner = new Banner()
  MainBanner.render()
}