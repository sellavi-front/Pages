import '../../fixes/js/FooterCopy/FooterCopy.js';
import './utils/accuring/accuring.js'
import './components/Header/Header.js'
/*import './components/CatalogBtn/CatalogBtn.js'*/
import './components/Products/Products.js'

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js'
import '../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js'
import '../../fixes/js/RemoveBlur/RemoveBlur.js'

import pages from "./config/conditions.js"

if(pages.main) {
  document.querySelector("#banner0 > div > div > div > div > picture > source").setAttribute('srcset', 'https://cdn.sellavi.com/image/upload/v1612794865/ru/clients/102648/78a8f4a45eb55e0eb3fefadab7dca827462e58a6.webp')
}






