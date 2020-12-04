import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
import imgArr from "./utils/images.js"
import pages from "./utils/pages.js"
import renderAboutCompanyTemplate from "./pages/aboutCompany/aboutCompany.js"
import renderComplexTemplate from "./pages/complex/complex.js"
import renderDeliveryTemplate from "./pages/delivery/delivery.js"
import renderBanner from "./blocks/banner/banner.js"
import renderCustomSectionAboutCompany from "./blocks/customSection/aboutCompany/aboutCompany.js"
import renderFooter from "./blocks/footer/footer.js"


/* Deleting burger */
//document.querySelector("#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.mobile-navigation-wrapper.sticky").remove()

/* Setting logo */
document.querySelector("header>.header-wrapper>.container").setAttribute("class", "container-fluid")
let containerNavbar = document.querySelector(".logo")
containerNavbar.classList.add("navbar__block")

let navbar = `
      <a class="navbar_item" href="/about-company/"><p>О компании</p></a>
      <a class="navbar_item" href="/delivery/"><p>Доставка</p></a>
      <a class="navbar_item" href="#"><p>Оплата и возврат</p></a>
      <a class="navbar_item" href="/complex/"><p>Комплексное оснащение</p></a>
      <a class="navbar_item" href="#"><p>Готовые решения</p></a>
      <a class="navbar_item" href="#"><p>Контакты</p></a>
`

containerNavbar.insertAdjacentHTML("beforeend", navbar)
if(pages.home) {
  renderBanner()
  renderCustomSectionAboutCompany()

  document.querySelector(".section-title.mb-4.mt-4").remove()
  document.querySelector(".row.products.grid").remove()
  document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section > div").setAttribute("class", "container-fluid")
  let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")

  let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customSection, "afterbegin")
  categories.render()
}

if(pages.about) {
  renderAboutCompanyTemplate()
}

if(pages.complex) {
  renderComplexTemplate()
}

if(pages.delivery) {
  renderDeliveryTemplate()
}

/* ALL PAGES */
/* Copy footer-meta */
renderFooter()
