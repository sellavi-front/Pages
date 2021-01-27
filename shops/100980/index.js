import GetCategoriesFromNavbar from "../../components/GetCategoriesFromNavbar/GetCategoriesFromNavbar.js"
import imgArr from "./utils/images.js"
import pages from "./utils/pages.js"
import renderAboutCompanyTemplate from "./pages/aboutPage/aboutCompany.js"
import renderComplexTemplate from "./pages/complexPage/complex.js"
import renderDeliveryTemplate from "./pages/deliveryPage/delivery.js"
import renderSolutionsTemplate from "./pages/solutionsPage/solutions.js"
import renderBanner from "./blocks/banner/banner.js"
import renderCustomSectionAboutCompany from "./blocks/customSection/aboutCompany/aboutCompany.js"
import renderWhatWeDo from "./blocks/customSection/whatWeDo/whatWeDo.js"
import renderWhyChooseUs from "./blocks/customSection/whyChooseUs/whyChooseUs.js"
import renderHowWeWork from "./blocks/customSection/howWeWork/howWeWork.js"
import renderFooter from "./blocks/footer/footer.js"
import sendHomeForm from "./wa-forms/home-form.js"
import sendComplexForm from "./wa-forms/сomplex-form.js"
import renderContactsLayout from "./pages/contactsPage/contactsPage.js"


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
      <a class="navbar_item" href="/contact/"><p>Контакты</p></a>
    </div>
`

containerNavbar.insertAdjacentHTML("afterend", navbar)
let wishlist = `
  <div class="header_wishlist">
    <a
      id="wishlist"
      class="position-relative"
      href="https://${location.host}/index.php?route=account/wishlist"
      role="link"
    >
      <i class="far fa-heart"></i>
    </a>
  </div>
`;

let search = document.querySelector("#search")
search.insertAdjacentHTML("afterend", wishlist)
if(pages.home) {

  // Banner
  renderBanner()

  // Categories
  let nodeList = document.querySelectorAll("header>.navigation-wrapper>.container>.navigation>.nav.sf-menu>li")
  let categories = new GetCategoriesFromNavbar(Array.from(nodeList), imgArr, "Каталог товаров", customSection, "afterbegin")
  categories.render()

  // Custom section
  renderCustomSectionAboutCompany()
  renderWhatWeDo()
  renderWhyChooseUs()
  renderHowWeWork()


  document.querySelector(".section-title.mb-4.mt-4").remove()
  document.querySelector(".row.products.grid").remove()
  document.querySelector("#home > div.wrapper.wrapper-closed > div.content-area > section > div").setAttribute("class", "container-fluid")

  let homeFormBtn = document.querySelector(".banner__submit__form__btn")
  homeFormBtn.addEventListener("click", () => {
    sendHomeForm().call()
  })

}

if(pages.about) {
  renderAboutCompanyTemplate()
}

if(pages.complex) {
  renderComplexTemplate()
  let complexFormBtn = document.querySelector(".complex__submit__form__btn")
  complexFormBtn.addEventListener("click", () => {
    sendComplexForm().call()
  })
}

if(pages.delivery) {
  renderDeliveryTemplate()
}

if(pages.solutions) {
  renderSolutionsTemplate()
}

if(pages.contacts) {
  renderContactsLayout()
}

if(pages.cart) {
  document.querySelector(".panel-group").classList.remove("accordion")
}

/* ALL PAGES */
/* Copy footer-meta */
renderFooter()
