import Paths from "../../path/paths.js"

if( Paths.checkout ) {
  document.querySelector("body.ltr > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.logo.logo-edited > a > figure > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
}

if ( !Paths.home ) {
  document.querySelector("body.ltr> div > header > div.header-wrapper > div.container-fluid.d-flex > div.logo > a > img").setAttribute("src", 'https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1612967822/sellavi/103506/Group_277_c28c6u.png')
}