import Paths from "../../path/paths.js"

if ( !Paths.home || Paths.checkout) {
  document.querySelector("body.ltr> div > header > div.header-wrapper > div.container-fluid.d-flex > div.logo > a > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
} else {
  document.querySelector("#home > div.content-area > section > div.logo_mobile_checkout > a > figure > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
}