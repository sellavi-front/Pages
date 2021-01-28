import "./docs/requisites.js"
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../templates/TemplateTypeTwo/TemplateTypeTwo.js"
import "../../fixes/js/ButtonContainerInProductCard.js"
import "../../fixes/js/RemoveBlur/RemoveBlur.js"
import Paths from "./path/paths.js"

if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.navigation .nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
  oldNav.remove();
}

if(Paths.home) {

}