import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
import imgArr from "./utils/images.js"
import pages from "./utils/pages.js"
import renderAboutCompanyTemplate from "./pages/aboutPage/aboutCompany.js"
import renderComplexTemplate from "./pages/complexPage/complex.js"
import renderDeliveryTemplate from "./pages/deliveryPage/delivery.js"
import renderSolutionsTemplate from "./pages/solutionsPage/solutions.js"
import renderBanner from "./blocks/banner/banner.js"
import renderCustomSectionAboutCompany from "./blocks/customSection/aboutCompany/aboutCompany.js"
import renderWhyChooseUsTemplate from "./blocks/customSection/whyChooseUs/whyChooseUs.js"
import renderFooter from "./blocks/footer/footer.js"


/* Setting logo */
document.querySelector("header>.header-wrapper>.container").setAttribute("class", "main__menu")
let containerNavbar = document.querySelector(".logo")
let customSection = document.querySelector(".custom_section")

let navbar = `
    <div class="navbar__block">
      <a class="navbar_item" href="/about-company/"><p>О компании</p></a>
      <a class="navbar_item" href="/delivery/"><p>Доставка, оплата и возврат</p></a>
      <a class="navbar_item" href="/complex/"><p>Комплексное оснащение</p></a>
      <a class="navbar_item" href="/solutions/"><p>Готовые решения</p></a>
    </div>
`

containerNavbar.insertAdjacentHTML("afterend", navbar)
if(pages.home) {

  // Banner
  renderBanner()

  // Categories
  let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
  let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customSection, "afterbegin")
  categories.render()

  // Custom section
  renderCustomSectionAboutCompany()

  renderWhyChooseUsTemplate()

  document.querySelector(".section-title.mb-4.mt-4").remove()
  document.querySelector(".row.products.grid").remove()
  document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section > div").setAttribute("class", "container-fluid")
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

if(pages.solutions) {
  renderSolutionsTemplate()
}

/* ALL PAGES */
/* Copy footer-meta */
renderFooter()
