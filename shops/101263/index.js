import "../../components/HeaderTypeTwo/HeaderTypeTwo.js"
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../fixes/fixes.js"
//import Banner from "./blocks/banner.js"
import pages from "./utils/pages/pages.js"
import Advantages from "./blocks/advantages.js"
import Functions from "./utils/functions/functions.js"
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js'
import CustomSection from "./blocks/custom-section.js"
import CustomBanner from "./blocks/custom-banner.js"

const bootstrapClasses = [
  'col-lg-4',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-lg-6',
  'col-xl-4',
/*  'mb-4',*/
  'container'
];



if(pages.home) {
  //let banner = new Banner()
  //banner.updateImgCategories()
  let customBanner = new CustomBanner()
  customBanner.render()
  let advantages = new Advantages()
  advantages.render()
  if (document.querySelector('.product-item')) {
    const productItems = document.querySelectorAll('.product-item');
    const deleteSelectors = new DeleteClasses(productItems, bootstrapClasses);
    deleteSelectors.findAndDelete();
  }
  let customSection = new CustomSection()
  customSection.render()
  /* Catalog */
  let oldCatalog = document.querySelector(".mobile-navigation-wrapper")
  oldCatalog.classList.add("header-catalog")
  let newCatalog = oldCatalog.cloneNode(true)
  document.querySelector(".logo").insertAdjacentHTML("afterend", newCatalog.outerHTML)
  oldCatalog.remove()
  let headerCatalog = document.querySelector(".header-catalog")
  headerCatalog.insertAdjacentHTML("beforeend", `<span class="catalog-title">Каталог</span>`)
}


