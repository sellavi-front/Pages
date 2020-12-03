import contentOptimizer from "../contentOptimizer.js"
import DropDownList from "../../../../components/DropDownList/DropDownList.js";
import deliveryTemplate from "./accordionTemplates/delivery/delivery.js"
import paymentTemplate from "./accordionTemplates/payment/payment.js"
import rulesTemplate from "./accordionTemplates/rulesOfReturn/rulesOfReturn.js";


let DropDown = [
  {
    buttonTitle: "Доставка",
    description: deliveryTemplate
  },
  {
    buttonTitle: "Оплата",
    description: paymentTemplate
  },
  {
    buttonTitle: "Оплата",
    description: rulesTemplate
  },
]

let mainTemplate = `
 <div class="container-fluid inner-page">
    <div class="bread__crumbs_container">
        <a href="/">Главная</a> > <a href="/about-company/" class="active__page">О компании</a>
    </div>
    <div class="about__company_container">
        <h1>О компании</h1>
        <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1606748087/WhatsApp_Image_2020-11-30_at_17.50.42_qqcz5l.jpg" alt="about"/>
    </div>
 </div>
`
let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")

let innerPage = document.querySelector(".inner-page")
let dropDownListContainer = new DropDownList(innerPage, "beforeend", DropDown)


let renderDeliveryTemplate = () => {
  contentOptimizer(mainTemplate, sectionTitles, information)
  setTimeout(function() {
    dropDownListContainer.render()
  }, 1000)
}

export default renderDeliveryTemplate