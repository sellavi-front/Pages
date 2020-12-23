import "../../templates/TemplateTypeTwo/TemplateTypeTwo.js"
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../fixes/fixes.js"
import Banner from "./blocks/banner.js"
import pages from "./utils/pages/pages.js"

if(pages.home) {
  let banner = new Banner()
  banner.updateImgCategories()
}


