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

let sectionTitles = document.querySelector(".page-section.titles")
let information = document.querySelector(".page-section.color.information")
sectionTitles.remove()
information.remove()
let contentArea = document.querySelector(".content-area")
let dropDownListContainer = new DropDownList(contentArea, "afterbegin", DropDown)


let renderDeliveryTemplate = () => {
  dropDownListContainer.render()
}

export default renderDeliveryTemplate