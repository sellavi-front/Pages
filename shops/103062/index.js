import './fixes/fixes.js'
import './template/template.js'
import renderBanner from "./components/banner/banner.js"
import {fixHomeCategories, fixCategory} from "./components/categories/categories.js"
import './../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import pages from "./pages/pages.js";

if(pages.home) {
  renderBanner()
  //fixHomeCategories()
}

if(pages.productCategory) {
  //fixCategory()
}