import './../../templates/TemplateTypeTwo/TemplateTypeTwo.js'
import "../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js";
import "../../fixes/fixes.js";
import Fixes from "./fixes/fixes.js";

let fixes = new Fixes()
fixes.deleteUnnecessaryClasses()
fixes.updateImgCategories()
fixes.insertTitleToCategories()


