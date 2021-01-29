import "./docs/requisites.js"
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../templates/TemplateTypeTwo/TemplateTypeTwo.js"
import "../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js"
import "../../fixes/js/RemoveBlur/RemoveBlur.js"
import Paths from "./path/paths.js"


/* Переносим меню в хэдэр */
if (document.querySelector('.header-wrapper')) {
  const oldNav = document.querySelector('.navigation .nav.sf-menu');
  const newNav = oldNav.cloneNode(true);
  document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('afterend', newNav.outerHTML);
  oldNav.remove();
}

/* Исправляем О нас */
document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > h4").innerHTML = 'О нас'
document.querySelector("#home > div.wrapper.wrapper-closed > footer > div.footer-widgets > div.container > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > a").innerHTML = 'О нас'


if(Paths.home) {
  //document.querySelector("#banner0 > div > div > div > div > picture > source").setAttribute("srcset", "https://cdn.sellavi.com/image/upload/ru/clients/103506/26d063c3bf4bf691704286bebed1d6fb15dd1142.jpg")
}
