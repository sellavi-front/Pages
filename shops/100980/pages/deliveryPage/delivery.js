import contentOptimizer from "../contentOptimizer.js"
import DropDownList from "../../../../components/DropDownList/DropDownList.js";
import deliveryTemplate from "./accordionTemplates/delivery/delivery.js"
import paymentTemplate from "./accordionTemplates/payment/payment.js"
import rulesTemplate from "./accordionTemplates/rulesOfReturn/rulesOfReturn.js";


let DropDown = [
  {
    buttonTitle: "1. Доставка",
    description: deliveryTemplate
  },
  {
    buttonTitle: "2. Оплата",
    description: paymentTemplate
  },
  {
    buttonTitle: "3. Правила обмена, возврата товара",
    description: rulesTemplate
  },
]

let mainTemplate = `
 <div class="container-fluid inner-page">
    <div class="bread__crumbs_container">
        <a href="/">Главная</a> > <a href="/delivery/" class="active__page">Доставка и оплата</a>
    </div>
    <div class="about__company_container">
        <h1>Доставка, оплата и возврат</h1>
        <img src="https://res.cloudinary.com/dd2edlvdy/image/upload/v1606999797/elevate-dI-aXC7DWpQ-unsplash_1_cycp3p.png" alt="img"/>
    </div>
 </div>
`
let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")

let innerPage = document.querySelector(".content-area")

let dropDownListContainer = new DropDownList(innerPage, "beforeend", DropDown)

let renderDeliveryTemplate = () => {
  contentOptimizer(mainTemplate, sectionTitles, information)
  dropDownListContainer.render()
}

export default renderDeliveryTemplate