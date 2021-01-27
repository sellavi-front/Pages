import './fixes/fixes.js'
import renderBanner from "./components/banner/banner.js"
import {fixHomeCategories, fixCategory} from "./components/categories/categories.js"
/*import './../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';*/
import pages from "./pages/pages.js";
import '../../components/HeaderTypeTwo/HeaderTypeTwo.js'
import '../../components/PictureCategories/PictureCategories.js'

if(pages.home) {
  //renderBanner()
  fixHomeCategories()
}

if(pages.productCategory) {
  fixCategory()
}

const list = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');

list.forEach((el) => {
  const tr = el.textContent;

  if(tr.includes(' - ')) {
    el.textContent = tr.slice(2);
  }
});

document.querySelector("#home > div > header > div.navigation-wrapper > div > nav > ul > li.flexy.has_children.megamenu").classList.remove("megamenu")