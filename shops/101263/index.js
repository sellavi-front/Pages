import "../../templates/TemplateTypeTwo/TemplateTypeTwo.js"
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../fixes/fixes.js"
import Banner from "./blocks/banner.js"
import pages from "./utils/pages/pages.js"
import Advantages from "./blocks/advantages.js"
import Functions from "./utils/functions/functions.js"



if(pages.home) {
  let banner = new Banner()
  banner.updateImgCategories()
  let advantages = new Advantages()
  advantages.render()
  let Fixes = new Functions()
  Fixes.deleteSpanBuyBtn()
}

if(pages.productCategory) {
  let Fixes = new Functions()
  Fixes.deleteSpanBuyBtn()
}


