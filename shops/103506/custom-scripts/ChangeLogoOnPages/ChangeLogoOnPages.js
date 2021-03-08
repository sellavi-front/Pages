import Paths from "../../path/paths.js"

if( screen.width > 300 &&  Paths.checkout ) {
  document.querySelector("#home > div.content-area > section > div.logo_mobile_checkout > a > figure > img").setAttribute("src", 'https://res.cloudinary.com/depgheppz/image/upload/v1614957369/Frame_5_s3iyuq.png')
}

if ( Paths.home ) {
  document.querySelector("body.ltr> div > header > div.header-wrapper > div.container-fluid.d-flex > div.logo > a > img").setAttribute("src", 'https://res.cloudinary.com/depgheppz/image/upload/v1614957369/Frame_5_s3iyuq.png')
}

