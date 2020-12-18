import './../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js"
import "../../fixes/fixes.js"
import ContactsWithMap from "../../components/ContactsWithMap/ContactsWithMap.js"
import contactData from "./utils/utils.js"
import Fixes from "./fixes/fixes.js"

let fixes = new Fixes()
fixes.deleteUnnecessaryClasses()
fixes.updateImgCategories()
fixes.insertTitleToCategories()

if (document.querySelector('.common-home')) {
  const customSection = document.querySelector('.custom_section');
  customSection.classList.add('container');
  const map = new ContactsWithMap(customSection, 'beforeend', contactData);
  map.render();
}


