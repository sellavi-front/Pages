import Paths from "../../path/paths.js"

if( screen.width > 300 &&  Paths.checkout ) {
  document.querySelector("#home > div.content-area > section > div.logo_mobile_checkout > a > figure > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
}

if ( !Paths.home ) {
  document.querySelector("body.ltr> div > header > div.header-wrapper > div.container-fluid.d-flex > div.logo > a > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
}

