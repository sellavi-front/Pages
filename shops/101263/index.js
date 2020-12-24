import "../../components/HeaderTypeTwo/HeaderTypeTwo.js"
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../fixes/fixes.js"
import Banner from "./blocks/banner.js"
import pages from "./utils/pages/pages.js"
import Advantages from "./blocks/advantages.js"
import Functions from "./utils/functions/functions.js"
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js'

const bootstrapClasses = [
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-lg-6',
  'col-xl-4',
  'mb-4',
  'container'
];



if(pages.home) {
  let banner = new Banner()
  banner.updateImgCategories()
  let advantages = new Advantages()
  advantages.render()
  let Fixes = new Functions()
  if (document.querySelector('.product-item')) {
    const productItems = document.querySelectorAll('.product-item');
    const deleteSelectors = new DeleteClasses(productItems, bootstrapClasses);
    deleteSelectors.findAndDelete();
  }
}

if(pages.productCategory) {
  let Fixes = new Functions()
}


