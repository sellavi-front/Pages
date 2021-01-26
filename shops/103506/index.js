import "./docs/requisites.js"
import "./blocks/header/header.js"
import Paths from "./path/paths.js"
import Banner from "./blocks/banner/banner.js"


if(Paths.home) {
  let MainBanner = new Banner()
  MainBanner.render()
}